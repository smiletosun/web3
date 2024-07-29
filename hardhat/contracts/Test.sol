//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Test {
    uint public num = 1;

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
        // Assert should only be used to test for internal errors,
        // and to check invariants.

        // Here we assert that num is always equal to 0
        // since it is impossible to update the value of num
        assert(num == 0);
    }
}
