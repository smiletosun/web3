// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Text {
    mapping (address => string[]) articles;
    address  owner;

    event AddArticle(address indexed user, string article);

    constructor() {
        owner = msg.sender;
    }

    function addArticle(string memory article) public {
        articles[msg.sender].push(article);
        emit AddArticle(msg.sender, article);
    }

    function getArticles() public view returns (string[] memory) {
        return articles[msg.sender];
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
