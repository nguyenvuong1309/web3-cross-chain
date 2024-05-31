// const { ethers } = require("ethers");
// const fs = require("fs");
// const path = require("path");

// const json = fs.readFileSync(
//   path.resolve(
//     __dirname,
//     "../../artifacts/contracts/NFT-samechain/NFT.sol/NFT.json"
//   ),
//   "utf8"
// );

// const artifact = JSON.parse(json);

// const abi = artifact.abi;
// const bytecode = artifact.bytecode;

// export async function deploy() {
//   // Set up the provider to connect to your local blockchain
//   const provider = new ethers.providers.JsonRpcProvider(
//     process.env.NEXT_PUBLIC_FANTOM_RPC || "http://localhost:8500/3"
//   );

//   // Your account to deploy the contract
//   const deployerPrivateKey =
//     process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY ||
//     "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4";
//   const deployerWallet = new ethers.Wallet(deployerPrivateKey, provider);

//   // Funding account with sufficient balance
//   const fundingAccountPrivateKey =
//     "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4"; // Replace with your funding account private key
//   const fundingWallet = new ethers.Wallet(fundingAccountPrivateKey, provider);

//   // Check deployer account balance
//   const minBalance = ethers.utils.parseEther("1.0"); // Minimum balance required for deployment
//   let balance = await deployerWallet.getBalance();

//   if (balance.lt(minBalance)) {
//     console.log(
//       `Insufficient balance. Current balance: ${ethers.utils.formatEther(
//         balance
//       )} ETH. Funding account...`
//     );
//     const tx = {
//       to: deployerWallet.address,
//       value: minBalance.sub(balance), // Transfer the difference to meet the minimum balance
//     };

//     const txResponse = await fundingWallet.sendTransaction(tx);
//     await txResponse.wait();

//     balance = await deployerWallet.getBalance();
//     console.log(`New balance: ${ethers.utils.formatEther(balance)} ETH`);
//   }

//   // Load and deploy the contract
//   const SendTransaction = new ethers.ContractFactory(
//     abi,
//     bytecode,
//     deployerWallet
//   );
//   const sendTransaction = await SendTransaction.deploy();
//   await sendTransaction.deployed();

//   console.log("NFT samechain deployed to:", sendTransaction.address);
//   saveAddressToEnv(sendTransaction.address);
//   return sendTransaction;
// }

// function saveAddressToEnv(address: any) {
//   const envPath = path.resolve(__dirname, "../../.env");
//   const key = "NEXT_PUBLIC_NFT_SAME_CHAIN_CONTRACT_ADDRESS";
//   let updated = false;

//   // Read the current .env file content
//   let envContent = fs.readFileSync(envPath, "utf8");

//   // Split the content into lines
//   let lines = envContent.split("\n");

//   // Map over the lines and update the key if it exists
//   lines = lines.map((line: any) => {
//     if (line.startsWith(key + "=")) {
//       updated = true; // Flag that we've updated the line
//       return `${key}=${address}`; // Return the updated line
//     }
//     return line; // Return the line unchanged
//   });

//   // If the key was not found and updated, add it to the end
//   if (!updated) {
//     lines.push(`${key}=${address}`);
//   }

//   // Join the lines back into a single string and write back to the file
//   fs.writeFileSync(envPath, lines.join("\n"), "utf8");
//   console.log(`NFT Samechain address saved to .env file: ${address}`);
// }
