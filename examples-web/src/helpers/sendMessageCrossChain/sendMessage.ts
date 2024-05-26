import { ethers } from "ethers";
import { SenderReceiver__factory as SenderReceiver } from "../../../src/types/factories/contracts/sendMessageCrossChain/Message.sol";
const {
  AxelarQueryAPI,
  Environment,
  EvmChain,
  GasToken,
} = require("@axelar-network/axelarjs-sdk");
const api = new AxelarQueryAPI({ environment: Environment.TESTNET });

const fantomRpc = process.env.NEXT_PUBLIC_FANTOM_RPC;
const deployerPrivateKey = process.env
  .NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY as string;
const fantomContractAddress = process.env
  .NEXT_PUBLIC_SEND_MESSAGE_CROSS_CHAIN_CONTRACT_ADDRESS_FANTOM as string;
const moonbeamContractAddress =
  process.env.NEXT_PUBLIC_SEND_MESSAGE_CROSS_CHAIN_CONTRACT_ADDRESS_MOONBEAM;

// Transfer tokens : Fantom -> Moonbeam
export async function sendMessageCrossChain() {
  try {
    // Set up provider and wallet for Fantom
    const fantomProvider = new ethers.providers.JsonRpcProvider(fantomRpc);
    const fantomWallet = new ethers.Wallet(deployerPrivateKey, fantomProvider);

    // Get the deployed contract instance on Fantom
    const fantomContract = new ethers.Contract(
      fantomContractAddress,
      SenderReceiver.abi,
      fantomWallet
    );

    // Define the message and the destination details
    const destinationChain = "Moonbeam";
    const destinationAddress = moonbeamContractAddress;
    const message = "Hello from Fantom to Moonbeam";

    // Estimate gas fee (adjust the gas estimation method as needed)
    const gasPrice = await fantomProvider.getGasPrice();
    console.log("🚀 ~ sendMessageCrossChain ~ gasPrice:", gasPrice);
    const estimatedGas = await fantomContract.estimateGas.sendMessage(
      destinationChain,
      destinationAddress,
      message,
      { value: gasPrice }
    );

    // Send the message
    const tx = await fantomContract.sendMessage(
      destinationChain,
      destinationAddress,
      message,
      {
        value: estimatedGas.mul(gasPrice),
        gasLimit: estimatedGas,
      }
    );

    console.log("Transaction hash:", tx.hash);
    await tx.wait();
    console.log("Message sent successfully!");
  } catch (error) {
    console.log("🚀 ~ transferTokens ~ error:", error);
  }
}

// async function gasEstimator() {
//   const gasLimit = ethers.BigNumber.from(700000); // Ensure this is a BigNumber
//   const gasMultiplier = 1.1; // Ensure this is a number or "auto"
//   const minGasPrice = ethers.utils.parseUnits("1", "gwei").toString(); // Optional, in wei

//   const gas = await api.estimateGasFee(
//     EvmChain.FANTOM,
//     EvmChain.POLYGON,
//     gasLimit,
//     gasMultiplier,
//     GasToken.FTM,
//     minGasPrice
//   );

//   return ethers.utils.parseEther(gas); // Convert the result to BigNumber
// }

async function gasEstimator() {
  try {
    const gas = await api.estimateGasFee(
      EvmChain.FANTOM,
      EvmChain.MOONBEAM,
      GasToken.FTM,
      ethers.BigNumber.from(700000),
      1.1
    );

    return ethers.utils.parseEther(gas);
  } catch (error) {
    console.log("🚀 ~ gasEstimator ~ error:", error);
  }
}
