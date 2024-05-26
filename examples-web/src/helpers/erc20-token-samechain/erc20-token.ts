import { ethers } from "ethers";
import { ERC20Token__factory as ERC20Tokenfactory } from "../../../src/types/factories/contracts/ERC20-Token-samechain";

// Connection to a local Ganache blockchain
const provider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8500/3"
);

// The private key should correspond to one of the accounts in Ganache
const privateKey =
  "0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32";
const wallet = new ethers.Wallet(privateKey, provider);

const fundingAccountPrivateKey =
  "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4"; // Replace with your funding account private key
const fundingWallet = new ethers.Wallet(fundingAccountPrivateKey, provider);

// The Contract ABI and Address
const contractABI = ERC20Tokenfactory.abi;
const contractAddress = "0x0Aa420284A367D7acaD94f9C1fa47D2844841740";

// Creating a new contract instance
// const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export async function sendERC20Tokens(contract: any, to: any, amount: any) {
  const tx = {
    to: wallet.address,
    value: 1000000000000, // Transfer the difference to meet the minimum balance
  };

  const txResponse = await fundingWallet.sendTransaction(tx);
  await txResponse.wait();
  console.log("🚀 ~ funding success");
  try {
    const tx = await contract.transfer(to, amount, {
      gasLimit: 1000000,
    });
    await tx.wait(); // Waiting for the transaction to be mined
    console.log("Tokens transferred:", tx);
  } catch (error) {
    console.log("🚀 ~ sendERC20Tokens ~ error:", error);
  }
}

export async function getBalanceERC20Token(contract: any, address: any) {
  // Querying the balance
  const balance = await contract.balanceOf(address);
  console.log(`Balance of ${address}:`, balance.toString());
  return balance;
}

// The following example usage should be moved to a separate file where these functions are imported
// Example usage:
// import { sendTokens, getBalance } from './path_to_this_file';
// const recipientAddress = '0x123...'; // Replace with actual recipient address
// sendTokens(recipientAddress, '1000000000000000000'); // Sending 1 token (assuming 18 decimals)
// getBalance(recipientAddress);

let PROVIDER: ethers.providers.Web3Provider;
let SIGNER: ethers.providers.JsonRpcSigner;
let CONTRACT: ethers.Contract;

declare global {
  interface Window {
    ethereum: any;
  }
}

// Connect to MetaMask
export async function connectMetaMask(): Promise<void> {
  if (
    typeof window !== "undefined" &&
    typeof window.ethereum !== "undefined" &&
    window.ethereum
  ) {
    PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
    await PROVIDER.send("eth_requestAccounts", []);
    SIGNER = provider.getSigner();
    CONTRACT = new ethers.Contract(contractAddress, contractABI, SIGNER);
    // document.getElementById('sendTokenButton')!.disabled = false;
    // document.getElementById('getBalanceButton')!.disabled = false;
    console.log("MetaMask connected");
  } else {
    console.error(
      "MetaMask is not installed. Please install MetaMask and try again."
    );
  }
}

// Send ERC20 Token
export async function sendToken_(): Promise<void> {
  const toAddress = prompt("Enter the recipient's address:");
  const amount = prompt("Enter the amount of tokens to send:");

  if (!toAddress || !amount) {
    console.error("Address or amount is invalid.");
    return;
  }

  const parsedAmount = ethers.utils.parseUnits(amount, 18); // Assuming the token has 18 decimals

  try {
    const tx = await CONTRACT.transfer(toAddress, parsedAmount, {
      gasLimit: 1000000,
    });
    console.log("Transaction sent:", tx);
    await tx.wait(); // Waiting for the transaction to be mined
    console.log("Tokens transferred:", tx);
  } catch (error) {
    console.error("Error sending tokens:", error);
  }
}

// Get ERC20 Token Balance
export async function getBalance_(contract: any): Promise<void> {
  const address = prompt("Enter the address to check the balance:");

  if (!address) {
    console.error("Address is invalid.");
    return;
  }

  try {
    const balance = await contract.balanceOf(address);
    console.log(
      `Balance of ${address}:`,
      ethers.utils.formatUnits(balance, 18)
    );
  } catch (error) {
    console.error("Error getting balance:", error);
  }
}
