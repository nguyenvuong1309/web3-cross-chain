const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
import { saveAddressToEnv } from "../../../src/lib/uitls";


const json_migration = fs.readFileSync(path.resolve(__dirname,"../../../artifacts/contracts/cross-chain-zkp/atomic-swap/Migrations.sol/Migrations.json"),"utf8");
const json_token = fs.readFileSync(path.resolve(__dirname,"../../../artifacts/contracts/cross-chain-zkp/atomic-swap/Token.sol/Token.json"),"utf8");
const json_htcl = fs.readFileSync(path.resolve(__dirname,"../../../artifacts/contracts/cross-chain-zkp/atomic-swap/HTLC.sol/HTLC.json"),"utf8");

const artifact_migration = JSON.parse(json_migration);
const artifact_token = JSON.parse(json_token);
const artifact_htcl = JSON.parse(json_htcl);

const abi_migration = artifact_migration.abi;
const bytecode_migration = artifact_migration.bytecode;

const abi_token = artifact_token.abi;
const bytecode_token = artifact_token.bytecode;

const abi_htcl = artifact_htcl.abi;
const bytecode_htcl = artifact_htcl.bytecode;



export async function fund_htlc_2_fantom() {
    try {
        const provider = new ethers.providers.JsonRpcProvider(
            process.env.NEXT_PUBLIC_FANTOM_RPC 
        );

        const deployerWallet = new ethers.Wallet(
            process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
            provider
        );

        const migrationContract = new ethers.ContractFactory(
            abi_migration,
            bytecode_migration,
            deployerWallet
        );

        const tokenContract = new ethers.ContractFactory(
            abi_token,
            bytecode_token,
            deployerWallet
        );

        const htlcContract = new ethers.ContractFactory(
            abi_htcl,
            bytecode_htcl,
            deployerWallet
        );  

        const migration = await migrationContract.deploy();
        await migration.deployed();

        const tokenA = await tokenContract.deploy("Token A", "TKA");
        await tokenA.deployed();
        saveAddressToEnv(tokenA.address,"NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS_FANTOM");

        const htlc_deployed = await htlcContract.deploy( 
            "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53",  
            tokenA.address,
            BigInt(1000000000000000000n)
        );
        const htlc = await htlc_deployed.deployed();
        saveAddressToEnv(htlc.address,"NEXT_PUBLIC_HTCL_CONTRACT_ADDRESS_FANTOM");

        await tokenA.approve(htlc_deployed.address,BigInt(1000000000000000000n));
        await htlc.fund(
            {
                gasLimit: ethers.utils.hexlify(1000000)
            }
        );

        console.log("Token A deployed to:", tokenA.address);
    } catch (error) {
        console.error("Error deploying Token A:", error);
        throw error;
    }
}

fund_htlc_2_fantom();
// ts-node scripts/cross-chain-zkp/atomic-swap/deploy_2_fantom.ts
// ts-node scripts/cross-chain-zkp/atomic-swap/deploy_2_moonbeam.ts 
// ts-node src/helpers/cross-chain-zkp/atomic-swap/withdraw.ts
