import { ethers } from "ethers";
import { SenderReceiver__factory as SenderReceiver } from "../../../src/types/factories/contracts/sendMessageCrossChain/Message.sol";

const fantomRpc = process.env.NEXT_PUBLIC_FANTOM_RPC;
const deployerPrivateKey = process.env
  .NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY as string;
const fantomContractAddress = process.env
  .NEXT_PUBLIC_SEND_MESSAGE_CROSS_CHAIN_CONTRACT_ADDRESS_FANTOM as string;
const moonbeamContractAddress = process.env
  .NEXT_PUBLIC_SEND_MESSAGE_CROSS_CHAIN_CONTRACT_ADDRESS_MOONBEAM as string;

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
      { value: ethers.utils.parseEther("0.5") } // Include 1 FTM in the value field for estimation
    );

    // Send the message with 1 FTM
    const tx = await fantomContract.sendMessage(
      destinationChain,
      destinationAddress,
      message,
      {
        value: ethers.utils.parseEther("0.5"), // Send 1 FTM along with the message
        gasLimit: estimatedGas,
        gasPrice: gasPrice,
      }
    );

    console.log("Transaction hash:", tx.hash);
    await tx.wait();
    console.log("Message sent successfully!");
  } catch (error) {
    console.log("🚀 ~ sendMessageCrossChain ~ error:", error);
  }
}

export async function listenForMessageReceived(
  onMessageReceived: (message: string) => void
) {
  // provider: ethers.providers.Provider,
  //contractAddress: string
  const moonbeamProvider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_MOONBEAM_RPC
  );
  try {
    const contract = new ethers.Contract(
      moonbeamContractAddress,
      SenderReceiver.abi,
      moonbeamProvider
    );

    contract.on(
      "MessageReceived",
      (
        sourceChain: string,
        sourceAddress: string,
        message: string,
        event: ethers.Event
      ) => {
        console.log("Message received!");
        console.log("Source Chain:", sourceChain);
        console.log("Source Address:", sourceAddress);
        console.log("Message:", message);
        onMessageReceived(message);
        // You can add any additional logic here that should run when a message is received
      }
    );

    console.log("Listening for MessageReceived events...");
  } catch (error) {
    console.log("🚀 ~ listenForMessageReceived ~ error:", error);
  }
}

// Function to get all received messages
export async function getAllReceivedMessages(
  provider: ethers.providers.Provider,
  contractAddress: string
) {
  try {
    const contract = new ethers.Contract(
      contractAddress,
      SenderReceiver.abi,
      provider
    );

    // Define the filter for the MessageReceived event
    const filter = contract.filters.MessageReceived();

    // Query the logs using the filter
    const logs = await contract.queryFilter(filter);

    // Decode and return the messages
    const messages = logs.map((log) => {
      const parsedLog = contract.interface.parseLog(log);
      return {
        sourceChain: parsedLog.args.sourceChain,
        sourceAddress: parsedLog.args.sourceAddress,
        message: parsedLog.args.message,
        transactionHash: log.transactionHash,
      };
    });

    return messages;
  } catch (error) {
    console.log("🚀 ~ getAllReceivedMessages ~ error:", error);
    return [];
  }
}
