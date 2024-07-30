// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Wallet {
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint256 amount) external {
        require(msg.sender == owner, "only owner can withdraw");
        payable(msg.sender).transfer(amount);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
