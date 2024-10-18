// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LockReleaseProtocol {
    struct Transaction {
        address payer;
        address intermediary;
        uint256 value;
        uint256 fee;
        uint256 collateral;
        uint256 timestamp;
        bool isLocked;
        bool isReleased;
        bool isDisputed;
    }

    uint256 public txCounter;
    mapping(uint256 => Transaction) public transactions;

    // Events
    event LockRequested(
        uint256 indexed txId,
        address indexed payer,
        address indexed intermediary,
        uint256 value,
        uint256 fee
    );
    event LockCompleted(uint256 indexed txId);
    event ReleaseRequested(uint256 indexed txId);
    event ReleaseCompleted(uint256 indexed txId);
    event DisputeInitiated(uint256 indexed txId);

    // Constants
    uint256 public constant MAX_DELAY = 1 hours; // Example delay

    // Lock Phase Functions

    function requestLock(address _intermediary, uint256 _fee) external payable {
        require(msg.value > _fee, "Value must be greater than fee");

        uint256 _value = msg.value - _fee;

        txCounter++;
        transactions[txCounter] = Transaction({
            payer: msg.sender,
            intermediary: _intermediary,
            value: _value,
            fee: _fee,
            collateral: 0,
            timestamp: block.timestamp,
            isLocked: false,
            isReleased: false,
            isDisputed: false
        });

        emit LockRequested(txCounter, msg.sender, _intermediary, _value, _fee);
    }

    function completeLock(uint256 _txId) external payable {
        Transaction storage txn = transactions[_txId];
        require(msg.sender == txn.intermediary, "Not the intermediary");
        require(!txn.isLocked, "Already locked");
        require(msg.value >= txn.collateral, "Insufficient collateral");

        txn.collateral = msg.value;
        txn.isLocked = true;

        emit LockCompleted(_txId);
    }

    // Release Phase Functions

    function requestRelease(uint256 _txId) external {
        Transaction storage txn = transactions[_txId];
        require(msg.sender == txn.payer, "Not the payer");
        require(txn.isLocked, "Transaction not locked");
        require(!txn.isReleased, "Already released");

        txn.isReleased = true;

        // Transfer funds to payer
        payable(txn.payer).transfer(txn.value + txn.collateral);

        emit ReleaseRequested(_txId);
        emit ReleaseCompleted(_txId);
    }

    // Dispute Function

    function initiateDispute(uint256 _txId) external {
        Transaction storage txn = transactions[_txId];
        require(msg.sender == txn.payer, "Not the payer");
        require(!txn.isReleased, "Already released");
        require(block.timestamp > txn.timestamp + MAX_DELAY, "Too early to dispute");

        txn.isDisputed = true;

        // Logic for dispute resolution
        // For demo purposes, we'll assume the payer wins the dispute
        payable(txn.payer).transfer(txn.value + txn.collateral);

        emit DisputeInitiated(_txId);
    }
}
