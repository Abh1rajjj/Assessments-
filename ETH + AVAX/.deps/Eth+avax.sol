// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Metacrafters {
    address public owneradd;
    constructor() {
        owneradd = msg.sender;
    }
    function setOwner(address newOwner) public {
        require(msg.sender == owneradd, "Only the current owner can set a new owner");

        assert(newOwner != address(0));

        owneradd = newOwner;
        assert(owneradd == newOwner);
    }
    function divide(uint256 numerator, uint256 denominator) public pure returns (uint256) {
        require(denominator != 0, "Denominator cannot be zero");
        return numerator / denominator;
    }

    function checkEven(uint256 number) public pure {
        if (number % 2 != 0) {
            revert("The number is odd");
        }
    }
}
