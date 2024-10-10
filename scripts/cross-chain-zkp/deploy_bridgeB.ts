const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { BridgeB__factory as BridgeBfactory } from "../../src/types/factories/contracts/cross-chain-zkp";
import { saveAddressToEnv } from "../../src/lib/uitls";

const abi = BridgeBfactory.abi;
const bytecode = BridgeBfactory.bytecode;

export async function deploy_bridgeB_2_kava() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_KAVA_RPC);

  const deployerPrivateKey = process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY;
  const deployerWallet = new ethers.Wallet(deployerPrivateKey, provider);

  const source_token_smart_contract = new ethers.ContractFactory(
    abi,
    bytecode,
    deployerWallet
  );
  const source_token_smart_contract_deployed = await source_token_smart_contract.deploy(
    process.env.NEXT_PUBLIC_KAVA_GATEWAY_CONTRACT_ADDRESS,
    process.env.NEXT_PUBLIC_KAVA_GAS_SERVICE_CONTRACT_ADDRESS
  );
  await source_token_smart_contract_deployed.deployed();

  saveAddressToEnv(source_token_smart_contract_deployed.address,"NEXT_PUBLIC_BRIDGE_B_KAVA_CONTRACT_ADDRESS");
  return source_token_smart_contract_deployed;
}

export async function deploy_bridgeB_2_moonbeam() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_KAVA_RPC );
  
    const deployerPrivateKey = process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY;
    const deployerWallet = new ethers.Wallet(deployerPrivateKey, provider);
  
    const source_token_smart_contract = new ethers.ContractFactory(
      abi,
      bytecode,
      deployerWallet
    );
    const source_token_smart_contract_deployed = await source_token_smart_contract.deploy(
      process.env.NEXT_PUBLIC_MOONBEAM_GATEWAY_CONTRACT_ADDRESS ,
      process.env.NEXT_PUBLIC_MOONBEAM_GAS_SERVICE_CONTRACT_ADDRESS
    );
    await source_token_smart_contract_deployed.deployed();
  
    saveAddressToEnv(source_token_smart_contract_deployed.address,"NEXT_PUBLIC_BRIDGE_B_MOONBEAM_CONTRACT_ADDRESS");
    return source_token_smart_contract_deployed;
  }