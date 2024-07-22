// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OnlyOwner {
    address owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function owend() public {
        owner = msg.sender;
    }

    function transferOwner(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    function currntOwner() public view returns (address) {
        return owner;
    }
}
