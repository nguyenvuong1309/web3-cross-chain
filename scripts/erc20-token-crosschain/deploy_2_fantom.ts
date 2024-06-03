const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

// const json = fs.readFileSync(
//   path.resolve(
//     __dirname,
//     "../../artifacts/contracts/ERC20-Token-crosschain/ERC20Token.sol/SimpleCustomToken.json"
//   ),
//   "utf8"
// );

// const artifact = JSON.parse(json);

// const abi = artifact.abi;
// const bytecode = artifact.bytecode;

const hre = require("hardhat");
const crypto = require("crypto");
// const ethers = hre.ethers;
const {
  AxelarQueryAPI,
  Environment,
  EvmChain,
  GasToken,
} = require("@axelar-network/axelarjs-sdk");
import { SimpleCustomToken__factory as SimpleCustomTokenfactory } from "../../src/types/factories/contracts/ERC20-Token-crosschain/ERC20Token.sol/SimpleCustomToken__factory";

const interchainTokenServiceContractABI = require("./../../utils/interchainTokenServiceABI");

const MINT_BURN = 4;

const interchainTokenServiceContractAddress =
  "0xB5FB4BE02232B1bBA4dC8f81dc24C26980dE9e3C";

const fantomCustomTokenAddress =
  process.env.NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_FANTOM ||
  "0x8D4a6B2A784749BBc412A41C1440C5A67EAB57EE"; // Replace with your token address on fantom
const moonbeamCustomTokenAddress =
  process.env.NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_MOONBEAM ||
  "0x7884ac325fa7aedB8A4d7bBD92671e8699f49108"; // Replace with your token address on Polygon

export async function deploy_ECR20_crosschain_2_fantom() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_FANTOM_RPC
  );
  const deployerWallet = new ethers.Wallet(
    process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
    provider
  );
  const interchainTokenServiceContract = await getContractInstance(
    interchainTokenServiceContractAddress,
    interchainTokenServiceContractABI.abi,
    deployerWallet
  );
  // Generate a random salt
  const salt = "0x" + crypto.randomBytes(32).toString("hex");

  // Create params
  const params = ethers.utils.defaultAbiCoder.encode(
    ["bytes", "address"],
    [deployerWallet.address, fantomCustomTokenAddress]
  );

  // Deploy the token manager
  const deployTxData = await interchainTokenServiceContract.deployTokenManager(
    salt,
    "",
    MINT_BURN,
    params,
    ethers.utils.parseEther("0.01")
  );

  // Get the tokenId
  const tokenId = await interchainTokenServiceContract.interchainTokenId(
    deployerWallet.address,
    salt
  );

  // Get the token manager address
  const expectedTokenManagerAddress =
    await interchainTokenServiceContract.tokenManagerAddress(tokenId);

  console.log(
    `
     Salt: ${salt},
     Transaction Hash: ${deployTxData.hash},
     Token ID: ${tokenId},
     Expected token manager address: ${expectedTokenManagerAddress},
     `
  );

  saveAddressToEnv(expectedTokenManagerAddress);
  return { tokenId, expectedTokenManagerAddress, salt };
}

export async function getContractInstance(
  contractAddress: any,
  contractABI: any,
  signer: any
) {
  return new ethers.Contract(contractAddress, contractABI, signer);
}

function saveAddressToEnv(address: any) {
  const envPath = path.resolve(__dirname, "../../.env");
  const key = "NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_FANTOM";
  let updated = false;
  let envContent = fs.readFileSync(envPath, "utf8");
  let lines = envContent.split("\n");

  lines = lines.map((line: any) => {
    if (line.startsWith(key + "=")) {
      updated = true;
      return `${key}=${address}`;
    }
    return line;
  });

  if (!updated) {
    lines.push(`${key}=${address}`);
  }

  fs.writeFileSync(envPath, lines.join("\n"), "utf8");
  console.log(`ERC20Token corss chain address saved to .env file: ${address}`);
}
