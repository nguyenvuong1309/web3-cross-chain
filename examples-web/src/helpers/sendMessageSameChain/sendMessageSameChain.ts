const { ethers } = require("ethers");
import { addressContractSendMessageSameChain } from "config/constants";
import { Messaging__factory as sendMessageSameChain } from "../../../src/types/factories/contracts/sendMessageSameChain/sendMessageSameChain.sol";

const abi = sendMessageSameChain.abi;
const contractAddress =
  addressContractSendMessageSameChain ||
  "0x1A9aa87a6149c1864C62F09A404E016E6E70385D";

const provider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8500/3"
);

const privateKey =
  "0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32";
const wallet = new ethers.Wallet(privateKey, provider);

const fundingAccountPrivateKey =
  "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4"; // Replace with your funding account private key
const fundingWallet = new ethers.Wallet(fundingAccountPrivateKey, provider);



export async function main() {
  console.log("🚀 ~ main ~ wallet:", addressContractSendMessageSameChain);

  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // Interact with the contract
  await interactWithContract(contract);
}

async function interactWithContract(contract: any) {
  // console.log(`Interacting with contract at ${contract.address}`);

  // const tx = await contract.sendMessage("Hello, blockchain!");
  // const receipt = await tx.wait();

  // console.log(`Transaction hash: ${receipt.transactionHash}`);
  // console.log(`Message sent successfully`);

  // const message = await contract.getMessage();
  // console.log(`Message from contract: ${message}`);
  try {
    const tx = {
      to: wallet.address,
      value: 1000000000000, // Transfer the difference to meet the minimum balance
    };

    const txResponse = await fundingWallet.sendTransaction(tx);
    await txResponse.wait();
    console.log("🚀 ~ funding success");

    const receiverAddress = "0x809587034aA5b0a0E849A57B88aa6e30EAF2750e";
    const message = "Hello, Blockchain!";
    const transactionResponse = await contract.sendMessage(
      receiverAddress,
      message,
      {
        gasLimit: 1000000,
      }
    );
    const res = await transactionResponse.wait();
    console.log("🚀 ~ interactWithContract ~ res:", res);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

export async function sendMessage(to: string, content: string): Promise<void> {
  const txResponse = await fundingWallet.sendTransaction({
    to: wallet.address,
    value: 1000000000000,
  });
  await txResponse.wait();

  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const tx = await contract.sendMessage(to, content, {
    gasLimit: 1000000,
  });
  await tx.wait();
  console.log('Message sent:', tx);
}

// Function to get messages sent to a specific address
export async function getMessages(to: string): Promise<void> {
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const messages = await contract.getMessages(to);
  return messages
}

// Function to get messages sent from a specific address
export async function getMessagesFrom(from: string): Promise<void> {
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const messages = await contract.getMessagesFrom(from);
  return messages
}