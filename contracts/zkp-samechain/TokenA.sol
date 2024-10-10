// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import { TokenBridge } from "./TokenBridge.sol";

contract TokenA is ERC20, Ownable {
    TokenBridge public tokenBridge;

    event DataSent(address indexed sender, address indexed recipient, uint256 amount);

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    /**
     * @dev Thiết lập địa chỉ TokenBridge. Chỉ chủ sở hữu có thể gọi.
     * @param _tokenBridge Địa chỉ hợp đồng TokenBridge.
     */
    function setTokenBridge(address _tokenBridge) external onlyOwner {
        require(_tokenBridge != address(0), "Invalid TokenBridge address");
        tokenBridge = TokenBridge(_tokenBridge);
    }

    /**
     * @dev Mint TokenA cho địa chỉ nhất định. Chỉ chủ sở hữu có thể gọi.
     * @param to Địa chỉ nhận TokenA.
     * @param amount Số lượng TokenA muốn mint.
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Burn TokenA từ người gọi.
     * @param amount Số lượng TokenA muốn burn.
     */
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

     // Burn tokens từ địa chỉ khác với sự cho phép
    function burnFrom(address account, uint256 amount) public {
        uint256 currentAllowance = allowance(account, msg.sender);
        require(currentAllowance >= amount, "TokenA: burn amount exceeds allowance");
        _approve(account, msg.sender, currentAllowance - amount);
        _burn(account, amount);
    }

    /**
     * @dev Gửi dữ liệu đến TokenBridge và burn TokenA tương ứng.
     * @param recipient Địa chỉ nhận TokenB trên TokenBridge.
     * @param amount Số lượng TokenA muốn gửi (sẽ được burn và tương ứng mint TokenB).
     */
    function sendData(address recipient, uint256 amount) external payable {
        require(address(tokenBridge) != address(0), "TokenBridge not set");
        require(balanceOf(msg.sender) >= amount, "Insufficient TokenA balance");

        // Burn TokenA từ người gửi
        _burn(msg.sender, amount);

        // Gửi dữ liệu đến TokenBridge
        tokenBridge.receiveData{value: msg.value}(recipient, amount);

        emit DataSent(msg.sender, recipient, amount);
    }
}



















// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// interface ITokenBridge {
//     function receiveData(address recipient, uint256 amount) external;
// }

// contract TokenA is ERC20, Ownable {
//     ITokenBridge public tokenBridge;

//     event DataSent(address indexed sender, address indexed recipient, uint256 amount);

//     constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

//     /**
//      * @dev Thiết lập địa chỉ TokenBridge. Chỉ chủ sở hữu có thể gọi.
//      * @param _tokenBridge Địa chỉ hợp đồng TokenBridge.
//      */
//     function setTokenBridge(address _tokenBridge) external onlyOwner {
//         require(_tokenBridge != address(0), "Invalid TokenBridge address");
//         tokenBridge = ITokenBridge(_tokenBridge);
//     }

//     /**
//      * @dev Mint TokenA cho địa chỉ nhất định. Chỉ chủ sở hữu có thể gọi.
//      * @param to Địa chỉ nhận TokenA.
//      * @param amount Số lượng TokenA muốn mint.
//      */
//     function mint(address to, uint256 amount) external onlyOwner {
//         _mint(to, amount);
//     }

//     /**
//      * @dev Burn TokenA từ người gọi.
//      * @param amount Số lượng TokenA muốn burn.
//      */
//     function burn(uint256 amount) external {
//         _burn(msg.sender, amount);
//     }

//     /**
//      * @dev Gửi dữ liệu đến TokenBridge và burn TokenA tương ứng.
//      * @param recipient Địa chỉ nhận TokenB trên TokenBridge.
//      * @param amount Số lượng TokenA muốn gửi (sẽ được burn và tương ứng mint TokenB).
//      */
//     function sendData(address recipient, uint256 amount) external payable {
//         require(address(tokenBridge) != address(0), "TokenBridge not set");
//         require(balanceOf(msg.sender) >= amount, "Insufficient TokenA balance");

//         // Burn TokenA từ người gửi
//         _burn(msg.sender, amount);

//         // Gửi dữ liệu đến TokenBridge
//         tokenBridge.receiveData(recipient, amount);

//         emit DataSent(msg.sender, recipient, amount);
//     }
// }