const { ethers } = require("ethers");
import { addressContractSendMessageSameChain } from "config/constants";
import { MessageContract__factory as SingleChainMessagefactory } from "../../../src/types/factories/contracts/sendMessageSameChain.sol";

const abi = SingleChainMessagefactory.abi;
const contractAddress =
  addressContractSendMessageSameChain ||
  "0x34AE22DCe95B21b7aB0d87520Ef85824F9A8913a";

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
