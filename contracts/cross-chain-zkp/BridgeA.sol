pragma solidity ^0.8.0;

import { AxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IAxelarGasService } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol';

contract BridgeA is AxelarExecutable {
    IAxelarGasService public immutable gasService;
    string public message;

    event MessageReceived(string sourceChain, string sourceAddress, string message);

    constructor(address gateway_, address gasService_) AxelarExecutable(gateway_) {
        gasService = IAxelarGasService(gasService_);
    }

    function  sendData(
        string calldata destinationChain,
        string calldata destinationAddress,
        string calldata message_
    ) external payable {
        bytes memory payload = abi.encode(message_);
        gasService.payNativeGasForContractCall{value: msg.value} (
            address(this),
            destinationChain,
            destinationAddress,
            payload,
            msg.sender
        );

        gateway.callContract(destinationChain, destinationAddress, payload);
    }

    function _execute(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload_
    ) internal override {
        message = abi.decode(payload_, (string));
        emit MessageReceived(sourceChain, sourceAddress, message);
        
        // Add any additional logic you want to trigger upon receiving the message here.
        // Example: call an internal function or interact with another contract.
        _performActionOnMessageReceived(sourceChain, sourceAddress, message);
    }

    function _performActionOnMessageReceived(
        string calldata sourceChain,
        string calldata sourceAddress,
        string memory message_
    ) internal {
        // Implement your custom logic here.
        // This function is a placeholder for any actions you want to perform.
    }
}
