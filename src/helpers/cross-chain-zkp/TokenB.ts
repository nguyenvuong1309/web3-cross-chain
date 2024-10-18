import { ethers } from "ethers";
import { TokenB__factory as TokenBfactory } from "../../../src/types/factories/contracts/cross-chain-zkp";

export async function MintToken( numberToken: string) {
    try{
        const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_MOONBEAM_RPC || "");
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY || "", provider);
        const tokenBAddress = process.env.NEXT_PUBLIC_TOKEN_B_CONTRACT_ADDRESS || "";
        const amountToMint = ethers.utils.parseUnits(numberToken, 18);

        const tokenB = new ethers.Contract(tokenBAddress, TokenBfactory.abi, wallet);
        const recipient = "0x90fc89d21C853Fb5278e0E022143160DB3e315Dd";

        const mintTx = await tokenB.mint(recipient, amountToMint);
        await mintTx.wait();
        console.log(`Minted ${ethers.utils.formatUnits(amountToMint, 18)} TokenB to ${recipient}`);
    }catch(error){
        console.log(error);
    }
}

export async function BurnToken( numberToken: string) {
    try{
        console.log("flag");
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_FANTOM_RPC);
    const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY || "", provider);

    const tokenAAddress = process.env.NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS || "";
                    const amountToBurn = ethers.utils.parseUnits(numberToken, 18);

        const tokenA = new ethers.Contract(tokenAAddress, TokenBfactory.abi, wallet);
            const burnTx = await tokenA.burn(amountToBurn);
        console.log("Burning TokenA, transaction hash:", burnTx.hash);
        await burnTx.wait();
        console.log(`Burned ${ethers.utils.formatUnits(amountToBurn, 18)} TokenA from ${wallet.getAddress()}`);
    }catch(error){
        console.log(error);
    }
}