const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { saveAddressToEnv } from "../../src/lib/uitls";


const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/zkp-samechain/TokenA.sol/TokenA.json"
  ),
  "utf8"
);

const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

export async function deploy_bridge() {
    try {
        const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_FANTOM_RPC);
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY!, provider);
    
        const tokenAAddress = process.env.NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS;
        const tokenBridgeAddress = process.env.NEXT_PUBLIC_TOKEN_BRIDGE_CONTRACT_ADDRESS;
    
        const tokenA = new ethers.Contract(tokenAAddress, abi, wallet);
    
        const tx = await tokenA.setTokenBridge(tokenBridgeAddress);
        console.log("Setting TokenBridge address, transaction hash:", tx.hash);
        await tx.wait();
        console.log("TokenBridge address set successfully!");
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
  }
  


  deploy_bridge();