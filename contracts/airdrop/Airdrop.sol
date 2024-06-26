// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import { AxelarExecutable } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import { IAxelarGateway } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import { IERC20 } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol";
import { IAxelarGasService } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";

/**
 * @title Airdrop Contract
 * @notice Airdrop contract that inherits from AxelarExecutable contract
 */
contract Airdrop is AxelarExecutable {
    // Immutable reference to the gas service contract
    IAxelarGasService public immutable gasService;

    // Variables to track airdrop details
    uint256 public amountReceived;
    address[] public airdropRecipients;

    /**
     * @param gateway_ Address of the Axelar gateway on the deployed chain
     * @param gasReceiver_ Address of the Axelar gas service on the deployed chain
     */
    constructor(address gateway_, address gasReceiver_) AxelarExecutable(gateway_) {
        // Initialize the gas service contract
        gasService = IAxelarGasService(gasReceiver_);
    }

    /**
     * @notice Function to initiate airdrop to multiple recipients on another chain
     * @param destinationChain Name of the destination chain (ex. "Fantom")
     * @param destinationAddress Address on destination chain this transaction is going to
     * @param destinationAddresses Recipient addresses receiving sent funds
     * @param symbol Symbol of token being sent
     * @param amount Amount of tokens being sent
     */
    function sendToMany(
        string memory destinationChain,
        string memory destinationAddress,
        address[] calldata destinationAddresses,
        string memory symbol,
        uint256 amount
    ) external payable {
        // Require a gas payment for the transaction
        require(msg.value > 0, "Gas payment is required");

        // Get the token address associated with the provided symbol
        address tokenAddress = gateway.tokenAddresses(symbol);

        // Transfer tokens from sender to this contract
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), amount);

        // Approve the gateway to spend tokens on behalf of this contract
        IERC20(tokenAddress).approve(address(gateway), amount);

        // Encode the recipient addresses into a payload
        bytes memory payload = abi.encode(destinationAddresses);

        // Pay for native gas using the gas service contract
        gasService.payNativeGasForContractCallWithToken{ value: msg.value }(
            address(this),
            destinationChain,
            destinationAddress,
            payload,
            symbol,
            amount,
            msg.sender
        );

        // Initiate a contract call on the gateway
        gateway.callContractWithToken(destinationChain, destinationAddress, payload, symbol, amount);
    }

    /**
     * @notice Function to retrieve the list of airdrop recipients
     * @return List of airdrop recipients
     */
    function getRecipients() public view returns (address[] memory) {
        return airdropRecipients;
    }

    /**
     * @notice Internal function to execute airdrop on the current chain
     * @param payload Encoded GMP message sent from source chain
     * @param tokenSymbol Symbol of token sent from source chain
     * @param amount Amount of tokens sent from source chain
     */
    function _executeWithToken(
        string calldata,
        string calldata,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) internal override {
        // Decode the payload to get the recipient addresses
        address[] memory recipients = abi.decode(payload, (address[]));

        // Get the token address associated with the provided symbol
        address tokenAddress = gateway.tokenAddresses(tokenSymbol);

        // Set amountReceived and airdropRecipients variables
        amountReceived = amount;
        airdropRecipients = recipients;

        // Calculate the amount of tokens to send to each recipient
        uint256 sentAmount = amount / recipients.length;

        // Transfer tokens to each recipient
        for (uint256 i = 0; i < recipients.length; i++) {
            IERC20(tokenAddress).transfer(recipients[i], sentAmount);
        }
    }
}
