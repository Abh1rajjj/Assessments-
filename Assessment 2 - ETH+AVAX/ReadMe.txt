# Simple Storage DApp

## Overview

This README provides an overview and instructions for setting up and using the Simple Storage Decentralized Application (DApp). The DApp is designed to store a value on the Ethereum blockchain, retrieve the stored value, and compute double the stored value. The DApp is built using Solidity for the smart contract and a basic web frontend for user interaction.

## Description

The Simple Storage DApp includes the following functionalities:

- **Set Value:** Users can set a value in the smart contract.
- **Get Value:** Users can retrieve the stored value from the smart contract.
- **Get Double Value:** Users can compute and retrieve double the stored value.

The smart contract `SimpleStorage.sol` consists of the following functions:
1. **`set(uint256 _value)`**: Sets the stored value.
2. **`get()`**: Retrieves the stored value.
3. **`getdoubleValue()`**: Computes and retrieves double the stored value.

## Getting Started

### Prerequisites

To interact with the Simple Storage DApp, you will need:

- **MetaMask**: A browser extension that serves as an Ethereum wallet.
- **Ganache**: A local blockchain for development.
- **Web Server**: To serve your frontend files locally.

### Setting Up the Contract and Frontend

1. **Clone or Download the Project:**

   - Clone the project from GitHub or download the files directly.
   - Ensure the following files are present:
     - `index.html`: Frontend code.
     - `script.js`: JavaScript code for interacting with the smart contract.
     - `SimpleStorage.sol`: Solidity smart contract.

2. **Install Dependencies:**

   - Install MetaMask in your browser and set it up.
   - Install Ganache for a local Ethereum network.

### Setting Up MetaMask and Ganache

1. **Configure MetaMask to Connect to Ganache:**

   - Open MetaMask, click on the network dropdown, and select "Add Network."
   - Enter the following details:

     ```
     Network Name: Ganache Local
     New RPC URL: http://127.0.0.1:7545
     Chain ID: 1337
     Currency Symbol: ETH
     ```

   - Click "Save" to add the local network.

2. **Run Ganache:**

   - Start Ganache and make sure it is running. Note down the provided RPC server URL and port (usually http://127.0.0.1:7545).

### Deploying the Smart Contract

1. **Open Remix IDE:**

   - Navigate to [Remix IDE](https://remix.ethereum.org/).

2. **Create a New File and Paste the Code:**

   - Create a new file named `SimpleStorage.sol`.
   - Copy and paste the following Solidity code into the file:

     ```solidity
     // SPDX-License-Identifier: MIT
     pragma solidity ^0.8.0;

     contract SimpleStorage {
         uint256 private storedValue;

         function set(uint256 _value) public {
             storedValue = _value;
         }

         function get() public view returns (uint256) {
             return storedValue;
         }

         function getdoubleValue() public view returns (uint256) {
             return storedValue * 2;
         }
     }
     ```

3. **Compile and Deploy:**

   - Select the "Solidity Compiler" tab and compile the contract using version `0.8.0`.
   - Switch to the "Deploy & Run Transactions" tab, select `Injected Web3` as the environment, and deploy the contract.
   - Approve the transaction in MetaMask and note down the deployed contract address.

### Setting Up the Local Server

1. **Host Your Frontend Files Locally:**

   - Open your terminal or command prompt.
   - Navigate to the directory containing `index.html` and `script.js` using `cd`.

   - Run a local web server using Python:
     - For Python 3.x, run:
       ```sh
       python -m http.server
       ```

2. **Access Your Local Web Server:**

   - Open your web browser and navigate to `http://localhost:8000`.

### Interacting with the DApp

1. **Set a Value:**

   - Enter a value in the input field and click "Set Value".
   - Approve the transaction in MetaMask.

2. **Get the Stored Value:**

   - Click "Get Value" to retrieve and display the stored value.

3. **Get Double the Stored Value:**

   - Click "Get Double Value" to compute and display double the stored value.

## Additional Information

- **Gas Fees:** Each transaction requires gas fees, which are paid in Ether. Ensure you have enough Ether in your wallet.
- **Security:** Always verify addresses and function parameters before sending transactions to avoid errors.

## Disclaimer

This project is intended for educational purposes. Use it at your own risk, and ensure you thoroughly test and audit your contracts before deploying them on a live network.
