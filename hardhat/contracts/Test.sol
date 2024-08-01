//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Test {
    string public message = "Hello, World!";
    uint public num = 1;
    address public owner = msg.sender;

    event Log(address sender, string message);
    event TLog(address sender, bool sent, bytes message);
    event OtherLog();

    constructor() {
        owner = msg.sender;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function testRequire(uint256 _i) public pure returns (uint256) {
        require(_i > 10, "Input must be greater than 10");
        return _i;
    }

    function testRevert(uint256 _i) public pure {
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
    }

    function testAssert() public view {
        assert(num == 0);
    }

    modifier validAddress(address _addr) {
        require(_addr != address(0), "Invalid address");
        _;
    }

    modifier onlyOwener() {
        require(owner == msg.sender, "Not the owner");
        _;
    }

    function testModifier(address _addr) public validAddress(_addr) onlyOwener {
        owner = _addr;
        emit OtherLog();
        emit Log(msg.sender, "changed owner to ");
    }

    function sendEnth(address to) public {
        require(to != address(0), "Invalid address");
        (bool sent, bytes memory data) = to.call{value: 1 ether}("ssx");
        emit TLog(msg.sender, sent, data);
    }

    function enCode(uint a) public view returns (bytes memory) {
        return abi.encode(a);
    }

    /**
     * 需要注意 delegateCall 只是调用代码，但是数据还是在当前合约中，而且数据排列方式需要合约中的数据排列顺序一致
     */

    function delegateCallTest(
        address target,
        string memory args,
        string memory _message
    ) external {
        bytes memory data = abi.encodeWithSignature(args, _message);
        (bool status, ) = address(target).delegatecall{gas: 1 ether}(data);
        require(status, "Forwarded call failed.");
    }

    function callTest(
        address target,
        string memory args,
        string memory _message
    ) external {
        bytes memory data = abi.encodeWithSignature(args, _message);
        (bool isOk, ) = address(target).call{gas: 1 ether}(data);
        require(isOk, "call failed");
    }
}
