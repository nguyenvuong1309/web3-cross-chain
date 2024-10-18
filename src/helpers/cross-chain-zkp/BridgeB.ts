import { ethers } from "ethers";
import { BridgeB__factory as BridgeBfactory } from "../../../src/types/factories/contracts/cross-chain-zkp";

const kavaRpc = process.env.NEXT_PUBLIC_KAVA_RPC;
const deployerPrivateKey = process.env
  .NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY as string;
const kavaContractAddress = process.env
  .NEXT_PUBLIC_BRIDGE_B_KAVA_CONTRACT_ADDRESS as string;
const moonbeamContractAddress = process.env
  .NEXT_PUBLIC_BRIDGE_B_MOONBEAM_CONTRACT_ADDRESS as string;
// Transfer tokens : Fantom -> Kava
export async function sendData(message: string) {
  try {
    // Set up provider and wallet for Fantom
    const kavaProvider = new ethers.providers.JsonRpcProvider(kavaRpc);
    const kavaWallet = new ethers.Wallet(deployerPrivateKey, kavaProvider);

    // Get the deployed contract instance on Fantom
    const kavaContract = new ethers.Contract(
      kavaContractAddress,
      BridgeBfactory.abi,
      kavaWallet
    );

    // Define the message and the destination details
    const destinationChain = "Moonbeam";
    const destinationAddress = moonbeamContractAddress;

    // Estimate gas fee (adjust the gas estimation method as needed)
    // const gasPrice = await fantomProvider.getGasPrice();
    // const estimatedGas = await fantomContract.estimateGas.sendData(
    //   destinationChain,
    //   destinationAddress,
    //   message,
    //   { value: ethers.utils.parseEther("0.5") } // Include 1 FTM in the value field for estimation
    // );

    // Send the message with 1 FTM
    console.log("🚀 ~ sendData ~ fantomProvider:", destinationChain,destinationAddress,message);
    const tx = await kavaContract.sendData(
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
