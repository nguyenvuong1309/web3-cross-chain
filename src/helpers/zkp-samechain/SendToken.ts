import { ethers } from "ethers";
import { TokenA__factory as TokenAfactory } from "../../../src/types/factories/contracts/zkp-samechain";
// import dotenv from 'dotenv';
// dotenv.config();

export async function mintAndBridge() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_FANTOM_RPC);
    const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY!, provider);

    const tokenAAddress = process.env.NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS || "";
    const recipient = "0x25bE1016Cd01747E8ED5e22ddA4aD0449653f66F";
    const amountToMint = ethers.utils.parseUnits("100", 18); // Mint 100 TokenA
    const amountToSend = ethers.utils.parseUnits("50", 18); // Send 50 TokenA

    const tokenA = new ethers.Contract(tokenAAddress, TokenAfactory.abi, wallet);

    // Mint TokenA cho người nhận (chỉ owner có thể gọi)
    const mintTx = await tokenA.mint(recipient, amountToMint);
    console.log("Minting TokenA, transaction hash:", mintTx.hash);
    await mintTx.wait();
    console.log(`Minted ${ethers.utils.formatUnits(amountToMint, 18)} TokenA to ${recipient}`);

    // Gửi dữ liệu đến TokenBridge và burn TokenA
    const sendDataTx = await tokenA.sendData(recipient, 
        amountToSend,
        {
            // value: ethers.utils.parseEther("0.001"),
            gasLimit: 5000000
        }
    );
    console.log("Sending data to TokenBridge, transaction hash:", sendDataTx.hash);
    await sendDataTx.wait();
    console.log(`Sent ${ethers.utils.formatUnits(amountToSend, 18)} TokenA from ${recipient}`);
}

mintAndBridge().catch(console.error);