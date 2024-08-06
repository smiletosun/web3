// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Text {
    mapping (address => string[]) articles;

    address  owner;

    constructor() {
        owner = msg.sender;
    }

    function addAirticle(string memory _name) public {
        articles[msg.sender].push(_name);
    }

    function getArticles(address _user) public view returns (string[] memory) {
        return articles[_user];
    }
}
