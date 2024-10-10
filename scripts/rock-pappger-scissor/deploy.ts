const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
require('dotenv').config();


const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/rock-pappger-scissor/Rock_Paper_Scissors.sol/RPSGame.json"
  ),
  "utf8"
);

const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

export async function deploy_RPS_GAME_2_fantom() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_FANTOM_RPC 
      );
  
      const deployerWallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
        provider
      );
  
      const RPC_smart_contract = new ethers.ContractFactory(
        abi,
        bytecode,
        deployerWallet
      );

      // Define constructor arguments
      const _initiator = deployerWallet.address;
      const _responder = "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53"; // Replace with the actual responder's address
      const choice = "Rock"; // The initiator's choice: 'Rock', 'Paper', or 'Scissors'
      const randomStr = "some-random-string"; // A random string for hashing
  
      // Compute the initiator's hashed choice
      const _initiator_hash = ethers.utils.sha256(
        ethers.utils.toUtf8Bytes(`${choice}-${randomStr}`)
      );
  
      // Deploy the contract with the correct constructor arguments
      const RPC_smart_contract_deployed = await RPC_smart_contract.deploy(
        _initiator,
        _responder,
        _initiator_hash
      );
      await RPC_smart_contract_deployed.deployed();
  
      console.log(
        "RPC game deployed to:",
        RPC_smart_contract_deployed.address
      );
      saveAddressToEnv(RPC_smart_contract_deployed.address);
      return RPC_smart_contract_deployed;
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
  }
  

function saveAddressToEnv(address: any) {
  const envPath = path.resolve(__dirname, "../../.env");
  const key = "NEXT_PUBLIC_RPC_GAME_FANTOM_CONTRACT_ADDRESS";
  let updated = false;

  // Read the current .env file content
  let envContent = fs.readFileSync(envPath, "utf8");

  // Split the content into lines
  let lines = envContent.split("\n");

  // Map over the lines and update the key if it exists
  lines = lines.map((line: any) => {
    if (line.startsWith(key + "=")) {
      updated = true; // Flag that we've updated the line
      return `${key}=${address}`; // Return the updated line
    }
    return line; // Return the line unchanged
  });

  // If the key was not found and updated, add it to the end
  if (!updated) {
    lines.push(`${key}=${address}`);
  }

  // Join the lines back into a single string and write back to the file
  fs.writeFileSync(envPath, lines.join("\n"), "utf8");
  console.log(`NFT marketplace address saved to .env file: ${address}`);
}
deploy_RPS_GAME_2_fantom();