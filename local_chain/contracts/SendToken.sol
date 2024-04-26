// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SendTransaction {
    // Event to emit when Ether is sent
    event EtherSent(address indexed to, uint256 amount);

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Function to send Ether from this contract to an address
    function sendEther(address payable _to, uint256 _amount) public {
        require(address(this).balance >= _amount, "Insufficient balance in contract");

        // Attempt to send Ether. If it fails, revert the transaction
        (bool sent, ) = _to.call{value: _amount}("");
        require(sent, "Failed to send Ether");

        // Emit an event after successful Ether transfer
        emit EtherSent(_to, _amount);
    }

    // Function to check the balance of the contract
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
