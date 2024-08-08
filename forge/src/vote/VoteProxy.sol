// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 引入EIP-1967代理标准
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

// 你的代理合约可以继承OpenZeppelin的ERC1967Proxy
contract ProxyVote is ERC1967Proxy {
    constructor(address logic, bytes memory data) ERC1967Proxy(logic, data) {}
}
