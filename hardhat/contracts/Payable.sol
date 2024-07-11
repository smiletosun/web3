pragma solidity ^0.8.0;

contract testPayable {
    event Received(address, uint);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}
