# MyToken Smart Contract

This README provides an overview and instructions for the `MyToken` Solidity smart contract. The contract is designed to manage a simple token on the Ethereum blockchain. It allows for minting and burning of tokens, with checks to ensure that the burning process doesn't exceed the balance of the address involved. This document is intended for developers and enthusiasts looking to understand and deploy a basic token contract using Solidity.

## Description

`MyToken` is a Solidity smart contract that represents a simple token with basic functionalities for minting and burning tokens. It includes:

- Public variables to store the token's name, abbreviation, and total supply.
- A mapping to keep track of balances associated with different addresses.
- A `mint` function to increase the total supply and the balance of a specific address.
- A `burn` function to decrease the total supply and the balance of a specific address, with checks to ensure that the address has a sufficient balance to burn the tokens.

This contract serves as an educational example to illustrate the fundamental concepts of token creation and management on the Ethereum blockchain.

## Getting Started

### Prerequisites

To interact with the `MyToken` contract, you'll need an Ethereum wallet and some Ether for gas fees. Additionally, you'll need a Solidity development environment like Remix IDE.

### Setting Up the Contract

1. **Navigate to Remix IDE:** Open your web browser and go to [Remix IDE](https://remix.ethereum.org/).

2. **Create a New File:**
    - In the left sidebar, click on the "+" icon to create a new file.
    - Name the file `MyToken.sol`.

3. Copy and Paste the Code:
    - Copy the following Solidity code into `MyToken.sol`:

    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity >=0.8.18;

    contract MyToken {

        // Public variables here
        string public tname = "ARC";
        string public tabrv = "AR";
        uint public totalsup = 0;

        // Mapping variable here
        mapping(address => uint) public bal;

        // Mint function
        function mint(address adr, uint val) public {
            totalsup += val;
            bal[adr] += val;
        }

        // Burn function
        function burn(address adr, uint val) public {
            if(bal[adr] >= val) {
                totalsup -= val;
                bal[adr] -= val;
            }
        }
    }
    ```

### Compiling the Contract

1. Select the Compiler Version:
    - Click on the "Solidity Compiler" tab on the left sidebar.
    - Set the compiler version to `0.8.18` or a compatible version.
  
2. Compile the Contract:
    - Click the "Compile MyToken.sol" button.

### Deploying the Contract

1. Navigate to the Deployment Tab:
    - Click on the "Deploy & Run Transactions" tab in the left sidebar.

2. Deploy the Contract:
    - Select `MyToken` from the contract dropdown menu.
    - Click the "Deploy" button.
    - Approve any transactions in your Ethereum wallet.

### Interacting with the Contract

1. Check Token Details:
    - After deployment, you can view the token's name, abbreviation, and total supply by clicking on the corresponding public variables (e.g., `tname`, `tabrv`, `totalsup`).

2. Minting Tokens:
    - Use the `mint` function to add tokens to an address.
    - Enter the address and the number of tokens you want to mint, and then click the "transact" button.

3. Burning Tokens:
    - Use the `burn` function to remove tokens from an address.
    - Enter the address and the number of tokens you want to burn, ensuring the address has a sufficient balance.
