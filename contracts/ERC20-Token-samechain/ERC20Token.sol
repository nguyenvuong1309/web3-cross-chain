// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20Token {
    string public name = "ethereum";
    string public symbol = "eth";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * (10 ** uint256(decimals));

    mapping(address => uint256) balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        // Initially assign all tokens to the contract's deployer
        balances[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function transfer(address _to, uint256 _amount) public returns (bool success) {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }
}
