import {
  srcChain,
  destChain,
  srcConnectedWallet,
  destConnectedWallet,
} from "config/constants";
import { SenderReceiver__factory as CallContractFactory } from "../../../src/types/factories/contracts/sendMessage/sendMessage.sol";

const sourceContract = CallContractFactory.connect(
  srcChain?.callContract,
  srcConnectedWallet
);
const destContract = CallContractFactory.connect(
  destChain.callContract,
  destConnectedWallet
);

export async function sendMessageToAvalancheDemo(message: string) {
  const tx = await sourceContract.sendMessage(
    destChain.name,
    destChain.callContract,
    message,
    {
      value: BigInt(3000000),
    }
  );
  const res = await tx.wait();
  console.log("🚀 ~ sendMessageToAvalancheDemo ~ res:", res);

  return new Promise((resolve, reject) => {
    destContract.on("Executed", (from, value) => {
      if (value === message) destContract.removeAllListeners("Executed");
      resolve(true);
    });
  });
}

export async function getAvalancheMessageDemo() {
  return destContract.message();
}

export async function getAvalancheSourceChainDemo() {
  return destContract.sourceChain();
}
export async function getAvalancheAddressChainDemo() {
  return destContract.sourceAddress();
}
