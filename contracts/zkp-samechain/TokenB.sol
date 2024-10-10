// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenB is ERC20, Ownable {
    address public tokenBridge;

    event DataReceived(address indexed recipient, uint256 amount);

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    /**
     * @dev Thiết lập địa chỉ TokenBridge. Chỉ chủ sở hữu có thể gọi.
     * @param _tokenBridge Địa chỉ hợp đồng TokenBridge.
     */
    function setTokenBridge(address _tokenBridge) external onlyOwner {
        require(_tokenBridge != address(0), "Invalid TokenBridge address");
        tokenBridge = _tokenBridge;
    }

    /**
     * @dev Mint TokenB cho người nhận. Chỉ TokenBridge mới có thể gọi.
     * @param recipient Địa chỉ nhận TokenB.
     * @param amount Số lượng TokenB muốn mint.
     */
    function mint(address recipient, uint256 amount) external {
        require(msg.sender == tokenBridge, "Only TokenBridge can mint");
        _mint(recipient, amount);
        emit DataReceived(recipient, amount);
    }

    /**
     * @dev Burn TokenB từ người gọi.
     * @param amount Số lượng TokenB muốn burn.
     */
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}