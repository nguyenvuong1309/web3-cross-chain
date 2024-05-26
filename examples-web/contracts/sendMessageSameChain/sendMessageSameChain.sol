// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Messaging {
    // Message structure to store message details
    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }

    // Mapping from receiver address to list of messages
    mapping(address => Message[]) private messages;

    // Event to emit when a message is sent
    event MessageSent(address indexed from, address indexed to, string content, uint256 timestamp);

    // Function to send a message to a specific address
    function sendMessage(address _to, string calldata _content) external {
        require(bytes(_content).length > 0, "Message content cannot be empty");
        require(_to != address(0), "Invalid address");

        // Create a new message
        Message memory newMessage = Message({
            sender: msg.sender,
            content: _content,
            timestamp: block.timestamp
        });

        // Add the message to the recipient's list
        messages[_to].push(newMessage);

        // Emit the MessageSent event
        emit MessageSent(msg.sender, _to, _content, block.timestamp);
    }

    // Function to get all messages sent to a specific address
    function getMessages(address _to) external view returns (Message[] memory) {
        return messages[_to];
    }

    // Function to get all messages sent from a specific address
    function getMessagesFrom(address _from) external view returns (Message[] memory) {
        uint256 count = 0;
        uint256 index = 0;

        // First, count the number of messages sent from the specified address
        for (uint256 i = 0; i < messages[msg.sender].length; i++) {
            if (messages[msg.sender][i].sender == _from) {
                count++;
            }
        }

        // Create an array to hold the messages
        Message[] memory fromMessages = new Message[](count);

        // Populate the array with messages from the specified address
        for (uint256 i = 0; i < messages[msg.sender].length; i++) {
            if (messages[msg.sender][i].sender == _from) {
                fromMessages[index] = messages[msg.sender][i];
                index++;
            }
        }

        return fromMessages;
    }
}
