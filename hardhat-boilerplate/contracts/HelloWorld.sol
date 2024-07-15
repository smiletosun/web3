//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

// We import this library to be able to use console.log
import "hardhat/console.sol";

contract HelloWorld {
    event UpdateMessage(string oldMessage, string newMessage);

    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function update(string memory newMessage) public {
        message = newMessage;
        emit UpdateMessage(message, newMessage);
    }

    function get() public view returns (string memory) {
        return message;
    }
}
