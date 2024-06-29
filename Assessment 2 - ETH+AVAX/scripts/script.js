const contractAddress = '0x7c6b373fBF778911a4da044C219fd67D1515e5DD';
const contractABI = [
    {
        "constant": false,
        "inputs": [{ "name": "_value", "type": "uint256" }],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDoubleValue",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

let web3 = new Web3(Web3.givenProvider || "http://localhost:8000");
let simpleStorage = new web3.eth.Contract(contractABI, contractAddress);

async function setValue() {
    try {
        let accounts = await web3.eth.getAccounts();
        let value = document.getElementById('inputValue').value;
        await simpleStorage.methods.set(value).send({ from: accounts[0] });
        console.log("Value set successfully");
    } catch (error) {
        console.error("Error setting value:", error);
    }
}

async function getValue() {
    try {
        let value = await simpleStorage.methods.get().call();
        document.getElementById('storedValue').innerText = value;
        console.log("Current value:", value);
    } catch (error) {
        console.error("Error getting value:", error);
    }
}

async function getDoubleValue() {
    try {
        let value = await simpleStorage.methods.getDoubleValue().call();
        document.getElementById('doubleValue').innerText = value;
        console.log("Double value:", value);
    } catch (error) {
        console.error("Error getting double value:", error);
    }
}
