// pragma solidity ^0.8.0;

// /**
//  * @title SingleChainMessage
//  * @notice Contract for sending and storing messages within the same blockchain network.
//  */
// contract SingleChainMessage {

//     // State variable to store the message
//     string public message;

//     // State variable to store the sender's address
//     address public sender;

//     // Event to be emitted when the message is updated
//     event MessageUpdated(address indexed sender, string newMessage);

//     /**
//      * @notice Updates the stored message and emits an event.
//      * @param newMessage The new message to store.
//      */
//     function sendMessage(string calldata newMessage) external {
//         // Update the message and sender
//         message = newMessage;
//         sender = msg.sender;

//         // Emit the MessageUpdated event
//         emit MessageUpdated(msg.sender, newMessage);
//     }

//     /**
//      * @notice Retrieves the stored message.
//      * @return The stored message.
//      */
//     function getMessage() external view returns (string memory) {
//         return message;
//     }

//     /**
//      * @notice Retrieves the sender's address.
//      * @return The address of the sender who updated the message.
//      */
//     function getSender() external view returns (address) {
//         return sender;
//     }
// }


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageContract {
    // Event to emit when a message is sent
    event MessageSent(address indexed from, address indexed to, string message);

    // Mapping from an address to list of messages received
    mapping(address => string[]) private messages;

    // Function to send a message to a specific address
    function sendMessage(address _to, string memory _message) public {
        messages[_to].push(_message);
        emit MessageSent(msg.sender, _to, _message);
    }

    // Function to get all messages sent to a specific address
    function getMessages(address _address) public view returns (string[] memory) {
        return messages[_address];
    }
}
