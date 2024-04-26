// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract TokenTransfer {
    // Function to transfer tokens from one address to another
    function transferTokens(address _token, address _from, address _to, uint256 _amount) public {
        IERC20 token = IERC20(_token);
        require(token.transferFrom(_from, _to, _amount), "Transfer failed");
    }

    // Function to check the balance of an address
    function checkBalance(address _token, address _account) public view returns (uint256) {
        IERC20 token = IERC20(_token);
        return token.balanceOf(_account);
    }
}