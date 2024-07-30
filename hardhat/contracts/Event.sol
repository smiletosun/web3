//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IEventSubscriber {
    function handleTransferEvent(
        address from,
        address to,
        uint256 value
    ) external;
}

contract Subscribe {
    uint public num = 1;
    address[] public subscriberList;
    mapping(address => bool) subscribers;

    event Log(address sender, address to, uint256 value);
    event OtherLog();

    function subscribe() public {
        require(subscribers[msg.sender] == false, "Already subscribed");
        subscribers[msg.sender] = true;
        subscriberList.push(msg.sender);
    }

    function unsubscribe() public {
        require(subscribers[msg.sender] == true, "Not subscribed");
        subscribers[msg.sender] = false;

        for (uint i = 0; i < subscriberList.length; i++) {
            if (subscriberList[i] == msg.sender) {
                subscriberList[i] = subscriberList[subscriberList.length - 1];
                subscriberList.pop();
                break;
            }
        }
    }

    function transfer(address to, uint256 value) public {
        emit Log(msg.sender, to, value);
        for (uint256 i = 0; i < subscriberList.length; i++) {
            IEventSubscriber(subscriberList[i]).handleTransferEvent(
                msg.sender,
                to,
                value
            );
        }
    }
}
