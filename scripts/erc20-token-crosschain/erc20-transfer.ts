// const { ethers } = require("ethers");
// const fs = require("fs");
// const path = require("path");
// const crypto = require("crypto");
// const json = fs.readFileSync(
//   path.resolve(
//     __dirname,
//     "../../artifacts/contracts/InterchainTokenService.sol/InterchainTokenService.json"
//   ),
//   "utf8"
// );
// const {
//   AxelarQueryAPI,
//   Environment,
//   EvmChain,
//   GasToken,
// } = require("@axelar-network/axelarjs-sdk");

// const artifact = JSON.parse(json);

// const interchainTokenServiceContractABI = artifact.abi;

// const interchainTokenServiceContractAddress =
//   process.env.NEXT_PUBLIC_INTER_CHAIN_TOKEN_SERVICE;

// const api = new AxelarQueryAPI({ environment: Environment.TESTNET });
// //...

// // Transfer tokens : Fantom -> Polygon
// export async function transferTokens() {
//   // Get a signer to sign the transaction
//   const fantomProvider = new ethers.providers.JsonRpcProvider(
//     process.env.NEXT_PUBLIC_FANTOM_RPC
//   );
//   const fantomSigner = new ethers.Wallet(
//     process.env.NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY,
//     fantomProvider
//   );

//   const interchainTokenServiceContract = await getContractInstance(
//     interchainTokenServiceContractAddress,
//     interchainTokenServiceContractABI,
//     fantomSigner
//   );
//   const gasAmount = await gasEstimator();
//   const transfer = await interchainTokenServiceContract.interchainTransfer(
//     "0x850ede64a2d8084e4ced76f4e439409b52ce6ee8073d476affe027b1978a1703", // tokenId, the one you store in the earlier step
//     "Moonbeam",
//     "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53", // receiver address
//     ethers.utils.parseEther("500"), // amount of token to transfer
//     "0x",
//     ethers.utils.parseEther("0.01"), // gasValue
//     {
//       // Transaction options should be passed here as an object
//       value: gasAmount,
//     }
//   );

//   console.log("Transfer Transaction Hash:", transfer.hash);
//   // 0x65258117e8133397b047a6192cf69a1b48f59b0cb806be1c0fa5a7c1efd747ef
// }

// async function getContractInstance(
//   contractAddress: any,
//   contractABI: any,
//   signer: any
// ) {
//   return new ethers.Contract(contractAddress, contractABI, signer);
// }

// async function gasEstimator() {
//   const gas = await api.estimateGasFee(
//     EvmChain.FANTOM,
//     EvmChain.POLYGON,
//     GasToken.FTM,
//     700000,
//     1.1
//   );

//   return gas;
// }
