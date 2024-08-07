// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import "forge-std/Test.sol";
import {Text} from "../src/Text.sol";

contract CounterScript is Test {
    Text public text;

    function setUp() public {
        text = new Text();
    }

    function run() public {}

    function testOwner() public view {
        assertEq(text.getOwner() == address(this), true);
    }

    function testAdd() public {
        address a1 = makeAddr("alice");
        address a2 = makeAddr("alice2");
        vm.startPrank(a1);
        text.addAirticle("Hello World1");
        text.addAirticle("Hello World2");
        text.addAirticle("Hello World3");
        string[] memory articles1 = text.getArticles();
        console.log(articles1[0]);
        console.log(articles1[1]);
        console.log(articles1[2]);
        assertEq(articles1.length, 3);
        vm.stopPrank();

        vm.startPrank(a2);
        text.addAirticle("Hello World!");
        string[] memory articles2 = text.getArticles();
        assertEq(articles2[0], "Hello World!");
        vm.stopPrank();
    }
}
