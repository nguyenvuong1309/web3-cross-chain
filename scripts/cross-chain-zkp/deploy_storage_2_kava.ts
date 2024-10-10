const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { saveAddressToEnv } from "../../src/lib/uitls";


const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/cross-chain-zkp/Storage.sol/Storage.json"
  ),
  "utf8"
);

const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

export async function deploy_storage_2_kava() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_FANTOM_RPC 
      );
  
      const deployerWallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
        provider
      );
  
      const tokenA_smart_contract = new ethers.ContractFactory(
        abi,
        bytecode,
        deployerWallet
      );

    
      const tokenA_smart_contract_deployed = await tokenA_smart_contract.deploy(
      );
      await tokenA_smart_contract_deployed.deployed();
  
      saveAddressToEnv(tokenA_smart_contract_deployed.address,"NEXT_PUBLIC_STORAGE_CONTRACT_ADDRESS");
      return tokenA_smart_contract_deployed;
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
  }
