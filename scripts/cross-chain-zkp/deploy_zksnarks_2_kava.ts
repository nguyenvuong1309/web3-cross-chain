const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { saveAddressToEnv } from "../../src/lib/uitls";


const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/cross-chain-zkp/zkSNARKs/SumsToFifteen.sol/SumsToFifteen.json"
    // /home/vuong1309/web3-cross-chain/artifacts/contracts/cross-chain-zkp/zkSNARKs/SumsToFifteen.sol/SumsToFifteen.json
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
  
      const zksnarks_smart_contract = new ethers.ContractFactory(
        abi,
        bytecode,
        deployerWallet
      );

      const zksnarks_smart_contract_deployed = await zksnarks_smart_contract.deploy();
      await zksnarks_smart_contract_deployed.deployed();
  
      saveAddressToEnv(zksnarks_smart_contract_deployed.address,"NEXT_PUBLIC_ZKSNARKS_CONTRACT_ADDRESS_FANTOM");
      return zksnarks_smart_contract_deployed;
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
  }
  deploy_stc_2_kava();
