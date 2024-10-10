// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TokenA.sol";
import "./TokenB.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ITokenB {
    function mint(address recipient, uint256 amount) external;
}

contract TokenBridge is Ownable {
    TokenB public tokenB;

    event BridgeExecuted(address indexed sender, address indexed recipient, uint256 amount);

    constructor(address _tokenB) {
        require(_tokenB != address(0), "Invalid TokenB address");
        tokenB = TokenB(_tokenB);
    }

    /**
     * @dev Thiết lập địa chỉ TokenB. Chỉ chủ sở hữu có thể gọi.
     * @param _tokenB Địa chỉ hợp đồng TokenB.
     */
    function setTokenB(address _tokenB) external onlyOwner {
        require(_tokenB != address(0), "Invalid TokenB address");
        tokenB = TokenB(_tokenB);
    }

    /**
     * @dev Nhận dữ liệu từ TokenA và thực hiện mint TokenB cho người nhận.
     * @param recipient Địa chỉ nhận TokenB.
     * @param amount Số lượng TokenB muốn mint.
     */
    function receiveData(address recipient, uint256 amount) external payable {
        // require(recipient != address(0), "Invalid recipient address");
        // require(amount > 0, "Amount must be greater than zero");

        // // Mint TokenB cho người nhận
        // tokenB.mint(recipient, amount);

        // emit BridgeExecuted(msg.sender, recipient, amount);
    }
}