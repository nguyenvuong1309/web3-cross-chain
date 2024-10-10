import { ethers } from "ethers";
import { BridgeA__factory as BridgeAfactory } from "../../../src/types/factories/contracts/cross-chain-zkp/BridgeA__factory";

const fantomRpc = process.env.NEXT_PUBLIC_FANTOM_RPC;
const deployerPrivateKey = process.env
  .NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY as string;
const fantomContractAddress = process.env
  .NEXT_PUBLIC_BRIDGE_A_FANTOM_CONTRACT_ADDRESS as string;
const kavaContractAddress = process.env
  .NEXT_PUBLIC_BRIDGE_A_KAVA_CONTRACT_ADDRESS as string;

// Transfer tokens : Fantom -> Kava
export async function sendData(message: string) {
  try {
    // Set up provider and wallet for Fantom
    const fantomProvider = new ethers.providers.JsonRpcProvider(fantomRpc);
    console.log("🚀 ~ sendData ~ fantomProvider:", deployerPrivateKey);
    const fantomWallet = new ethers.Wallet(deployerPrivateKey, fantomProvider);

    // Get the deployed contract instance on Fantom
    const fantomContract = new ethers.Contract(
      fantomContractAddress,
      BridgeAfactory.abi,
      fantomWallet
    );

    // Define the message and the destination details
    const destinationChain = "kava";
    const destinationAddress = kavaContractAddress;

    // Estimate gas fee (adjust the gas estimation method as needed)
    // const gasPrice = await fantomProvider.getGasPrice();
    // const estimatedGas = await fantomContract.estimateGas.sendData(
    //   destinationChain,
    //   destinationAddress,
    //   message,
    //   { value: ethers.utils.parseEther("0.5") } // Include 1 FTM in the value field for estimation
    // );

    // Send the message with 1 FTM
    const tx = await fantomContract.sendData(
      destinationChain,
      destinationAddress,
      message,
      {
        value: ethers.utils.parseEther("0.21"), // Send 1 FTM along with the message
        // gasLimit: estimatedGas,
        // gasPrice: gasPrice,
      }
    );

    console.log("Transaction hash:", tx.hash);
    await tx.wait();
    console.log("Message sent successfully!");
  } catch (error) {
    console.log("🚀 ~ sendMessageCrossChain ~ error:", error);
  }
}
