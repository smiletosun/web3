//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

// We import this library to be able to use console.log
import "hardhat/console.sol";

contract HelloWorld {
    event UpdateMessage(string oldMessage, string newMessage);

    string public message;
    address public owner;

    constructor(string memory initialMessage) {
        message = initialMessage;
        owner = msg.sender;
    }

    function update(string memory newMessage) public {
        message = newMessage;
        emit UpdateMessage(message, newMessage);
    }

    function get() public view returns (string memory) {
        return message;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
