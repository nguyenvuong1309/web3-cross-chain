const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { saveAddressToEnv } from "../../src/lib/uitls";


const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/zkp-samechain/TokenBridge.sol/TokenBridge.json"
  ),
  "utf8"
);

const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

export async function deploy_tokenBridge_2_fantom() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_FANTOM_RPC 
      );
  
      const deployerWallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
        provider
      );
  
      const source_token_smart_contract = new ethers.ContractFactory(
        abi,
        bytecode,
        deployerWallet
      );

    
      const source_token_smart_contract_deployed = await source_token_smart_contract.deploy(process.env.NEXT_PUBLIC_TOKEN_B_CONTRACT_ADDRESS);
      await source_token_smart_contract_deployed.deployed();
      saveAddressToEnv(source_token_smart_contract_deployed.address,"NEXT_PUBLIC_TOKEN_BRIDGE_CONTRACT_ADDRESS");
      return source_token_smart_contract_deployed;
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
  }
  
deploy_tokenBridge_2_fantom();