// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 逻辑合约
contract TransparentLogic {
    address public logicAddress; // 防止存储冲突
    address public adminAddress; // 防止存储冲突
    uint public count;

    function incrementCounter() public {
        count += 1;
    }

    function getCount() public view returns (uint) {
        return count;
    }
}

contract TransparentProxy {
    address public logicAddress; // 防止存储冲突
    address public adminAddress; // 防止存储冲突

    constructor(address logic) {
        logicAddress = logic;
        adminAddress = msg.sender;
    }

    receive() external payable {
        require(msg.sender != adminAddress, "Admin not allowed"); // 限制了调用者不能是管理员
        _fallback(logicAddress);
    }

    fallback() external payable {
        _fallback(logicAddress);
    }

    function _fallback(address logic) internal {
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), logic, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())

            switch result
            // delegatecall returns 0 on error.
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }
}
