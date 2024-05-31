const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Load the contract's ABI
const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../artifacts/contracts/sendMessageSameChain.sol/SingleChainMessage.json"
  ),
  "utf8"
);
const artifact = JSON.parse(json);

const abi = artifact.abi;
const contractAddress = process.env.SEND_MESSAGE_SAME_CHAIN_CONTRACT_ADDRESS;

async function main() {
  // Set up the provider to connect to your local blockchain
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8500/3"
  );

  // Your account to interact with the contract
  const privateKey =
    "0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32";
  const wallet = new ethers.Wallet(privateKey, provider);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // Interact with the contract
  await interactWithContract(contract);

  const recipientAddress = "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53"; // Replace with the actual recipient address
  await sendMessageToAddress(contract, recipientAddress);
}

async function interactWithContract(contract) {
  console.log(`Interacting with contract at ${contract.address}`);

  // Example interaction: Calling a function `sendMessage`
  // Replace `sendMessage` with the actual function name from your contract and provide necessary arguments
  const tx = await contract.sendMessage("Hello, blockchain!");
  const receipt = await tx.wait();

  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`Message sent successfully`);

  // Example interaction: Reading data from the contract
  // Replace `getMessage` with the actual function name from your contract
  const message = await contract.getMessage();
  console.log(`Message from contract: ${message}`);
}

async function sendMessageToAddress(contract, recipientAddress) {
  console.log(`Interacting with contract at ${contract.address}`);

  // Example interaction: Calling a function `sendMessage`
  // Replace `sendMessage` with the actual function name from your contract and provide necessary arguments
  const tx = await contract.sendMessage(recipientAddress, "Hello, blockchain!");
  const receipt = await tx.wait();

  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`Message sent successfully`);

  // Example interaction: Reading data from the contract
  // Replace `getMessage` with the actual function name from your contract
  const message = await contract.getMessage();
  console.log(`Message from contract: ${message}`);
}

main().catch(console.error);
