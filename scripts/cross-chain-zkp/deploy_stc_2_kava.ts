const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { saveAddressToEnv } from "../../src/lib/uitls";


const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/cross-chain-zkp/sct.sol/LockReleaseProtocol.json"
  ),
  "utf8"
);

const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

export async function deploy_stc_2_kava() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_KAVA_RPC 
      );
  
      const deployerWallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
        provider
      );
  
      const stc_smart_contract = new ethers.ContractFactory(
        abi,
        bytecode,
        deployerWallet
      );

      const stc_smart_contract_deployed = await stc_smart_contract.deploy();
      await stc_smart_contract_deployed.deployed();
  
      saveAddressToEnv(stc_smart_contract_deployed.address,"NEXT_PUBLIC_STC_CONTRACT_ADDRESS_KAVA");
      return stc_smart_contract_deployed;
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
  }
  deploy_stc_2_kava();
