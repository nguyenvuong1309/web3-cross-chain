import { ethers } from "ethers";
import { TokenA__factory as TokenAfactory } from "../../../src/types/factories/contracts/cross-chain-zkp";

export async function MintToken( numberToken: string) {
    try{
        const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_FANTOM_RPC);
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY || "", provider);
    
        const tokenAAddress = process.env.NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS || "";
        const amountToMint = ethers.utils.parseUnits(numberToken, 18);
    
        const tokenA = new ethers.Contract(tokenAAddress, TokenAfactory.abi, wallet);
        const recipient = "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53";
    
        const mintTx = await tokenA.mint(recipient, amountToMint);
        console.log("Minting TokenA, transaction hash:", mintTx.hash);
        await mintTx.wait();
        console.log(`Minted ${ethers.utils.formatUnits(amountToMint, 18)} TokenA to ${recipient}`);
    }catch(error){
        console.log(error);
    }
}

export async function BurnToken( numberToken: string) {
    try{
        const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_FANTOM_RPC);
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY || "", provider);
    
        const tokenAAddress = process.env.NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS || "";
        const amountToBurn = ethers.utils.parseUnits(numberToken, 18);
    
        const tokenA = new ethers.Contract(tokenAAddress, TokenAfactory.abi, wallet);
        const balance = await tokenA.balanceOf(await wallet.getAddress());
        console.log(balance);
        return;
        const burnTx = await tokenA.burn(amountToBurn);
        console.log("Burning TokenA, transaction hash:", burnTx.hash);
        await burnTx.wait();
        console.log(`Burned ${ethers.utils.formatUnits(amountToBurn, 18)} TokenA from ${wallet.getAddress()}`);
    }
    catch(error){
        console.log(error);
    }
}
