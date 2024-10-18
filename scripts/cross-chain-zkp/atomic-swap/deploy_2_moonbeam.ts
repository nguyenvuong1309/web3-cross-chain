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

export async function fund_htlc_2_moonbeam() {
    try {
        const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_MOONBEAM_RPC);

        const deployerWallet = new ethers.Wallet(
            // process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
            "0x6d367b56b547946e71291fca8656371b1be6d53a474d4d19934bf8748c6ad164",
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

        const tokenB = await tokenContract.deploy("Token B", "TKB");
        await tokenB.deployed();
        saveAddressToEnv(tokenB.address,"NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS_MOONBEAM");

        const htlc_deployed = await htlcContract.deploy(
            "0x25bE1016Cd01747E8ED5e22ddA4aD0449653f66F",
            tokenB.address,
            1000000000000000000n
        );
        const htlc = await htlc_deployed.deployed();
        saveAddressToEnv(htlc.address,"NEXT_PUBLIC_HTCL_CONTRACT_ADDRESS_MOONBEAM");

        console.log("flag1");
        await tokenB.approve(htlc_deployed.address,1000000000000000000n);
        console.log("flag2");
        await htlc.fund({
            gasLimit: ethers.utils.hexlify(1000000)
        });

        console.log("Token B deployed to:", tokenB.address);
    } catch (error) {
        console.error("Error deploying Token B:", error);
        throw error;
    }
}

fund_htlc_2_moonbeam();
