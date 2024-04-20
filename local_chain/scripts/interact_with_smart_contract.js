require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
var fs = require('fs');
const util = require('util');
var ethers = require('ethers')
const fsPromises = fs.promises;

// The path to the contract ABI
const ABI_FILE_PATH = 'artifacts/contracts/Greeter.sol/Greeter.json';
// The address from the deployed smart contract
const DEPLOYED_CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// load ABI from build artifacts
async function getAbi(){
  const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
  const abi = JSON.parse(data)['abi'];
  console.log("🚀 ~ getAbi ~ abi:", abi)
  return abi;
}

async function main() {
    let provider = ethers.getDefaultProvider(`http://localhost:8500/1`);
    const abi = await getAbi()

    /* 
    // READ-only operations require only a provider.
    // Providers allow only for read operations.
    let contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
    const greeting = await contract.greet();
    console.log(greeting);
    */

    // WRITE operations require a signer
    const PRIVATE_KEY  = "0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32"
    let signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const new_contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, signer);
    let tx = await new_contract.setGreeting('Updated greeting');
    await tx.wait();
    const updated_greeting = await new_contract.greet();
    console.log("🚀 ~ main ~ updated_greeting:", updated_greeting)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });