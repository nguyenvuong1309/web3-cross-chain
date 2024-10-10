const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { saveAddressToEnv } from "../../src/lib/uitls";


const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/cross-chain-zkp/TokenB.sol/TokenB.json"
  ),
  "utf8"
);

const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

export async function deploy_tokenB_2_moonbeam() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_MOONBEAM_RPC 
      );
  
      const deployerWallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
        provider
      );
  
      const tokenB_smart_contract = new ethers.ContractFactory(
        abi,
        bytecode,
        deployerWallet
      );

    
      const tokenB_smart_contract_deployed = await tokenB_smart_contract.deploy();
      await tokenB_smart_contract_deployed.deployed();
  
      console.log(
        "Source token deployed to:",
        tokenB_smart_contract_deployed.address
      );
      saveAddressToEnv(tokenB_smart_contract_deployed.address,"NEXT_PUBLIC_TOKEN_B_CONTRACT_ADDRESS");
      return tokenB_smart_contract_deployed;
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
}