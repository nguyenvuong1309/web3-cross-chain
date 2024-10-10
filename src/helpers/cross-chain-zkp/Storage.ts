import { ethers } from "ethers";
import { Storage__factory as Storagefactory } from "../../../src/types/factories/contracts/cross-chain-zkp";

export async function StoreSwapData( data: number) {
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_KAVA_RPC);
    const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY || "", provider);
    const storageContractAddress = process.env.NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS || "";

    const storageContract = new ethers.Contract(storageContractAddress, Storagefactory.abi, wallet);

    const mintTx = await storageContract.set(data);
    console.log("Store data success, transaction hash:", mintTx.hash);
    await mintTx.wait();

}
