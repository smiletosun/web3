// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Text} from "../src/Text.sol";

contract CounterScript is Script {
    Text public counter;

    function setUp() public {
        counter = new Text();
    }

    function run() public {
        vm.startBroadcast();

        vm.stopBroadcast();
    }
}
