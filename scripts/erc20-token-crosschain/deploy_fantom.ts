// const { ethers } = require("ethers");
// const fs = require("fs");
// const path = require("path");

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

// export async function deploy_2_fantom() {
//   // Set up the provider to connect to your local blockchain
//   const provider = new ethers.providers.JsonRpcProvider(
//     process.env.NEXT_PUBLIC_FANTOM_RPC
//   );

//   // Your account to deploy the contract
//   const deployerPrivateKey = process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY;
//   const deployerWallet = new ethers.Wallet(deployerPrivateKey, provider);

//   // Load and deploy the contract
//   const SendTransaction = new ethers.ContractFactory(
//     abi,
//     bytecode,
//     deployerWallet
//   );
//   const sendTransaction = await SendTransaction.deploy(
//     "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53",
//     "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53"
//   );
//   await sendTransaction.deployed();

//   console.log(
//     "ERC20Token cross chain deployed to fantom:",
//     sendTransaction.address
//   );
//   saveAddressToEnv(sendTransaction.address);
//   return sendTransaction;
// }

// function saveAddressToEnv(address: any) {
//   const envPath = path.resolve(__dirname, "../../.env");
//   const key = "NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_FANTOM";
//   let updated = false;
//   let envContent = fs.readFileSync(envPath, "utf8");
//   let lines = envContent.split("\n");

//   lines = lines.map((line: any) => {
//     if (line.startsWith(key + "=")) {
//       updated = true;
//       return `${key}=${address}`;
//     }
//     return line;
//   });

//   if (!updated) {
//     lines.push(`${key}=${address}`);
//   }

//   fs.writeFileSync(envPath, lines.join("\n"), "utf8");
//   console.log(`ERC20Token corss chain address saved to .env file: ${address}`);
// }
