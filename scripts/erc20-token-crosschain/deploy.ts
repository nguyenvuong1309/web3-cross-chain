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

// const artifact = JSON.parse(json);

// const interchainTokenServiceContractABI = artifact.abi;
// const bytecode = artifact.bytecode;

// const MINT_BURN = 4;

// const interchainTokenServiceContractAddress =
//   process.env.NEXT_PUBLIC_INTER_CHAIN_TOKEN_SERVICE;

// export async function deploy() {
//   // FANTOM DEPLOY ===================================================================================================
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
//   const fantomSalt = "0x" + crypto.randomBytes(32).toString("hex");

//   // Create params
//   const fantomparams = ethers.utils.defaultAbiCoder.encode(
//     ["bytes", "address"],
//     [
//       fantomSigner.address,
//       process.env.NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_FANTOM,
//     ]
//   );

//   // Deploy the token manager
//   const fantomdeployTxData =
//     await interchainTokenServiceContract.deployTokenManager(
//       fantomSalt,
//       "",
//       MINT_BURN,
//       fantomparams,
//       ethers.utils.parseEther("0.01")
//     );

//   // Get the tokenId
//   const fantomtokenId = await interchainTokenServiceContract.interchainTokenId(
//     fantomSigner.address,
//     fantomSalt
//   );

//   // Get the token manager address
//   const fantomexpectedTokenManagerAddress =
//     await interchainTokenServiceContract.tokenManagerAddress(fantomtokenId);

//   console.log(
//     `
// 	Salt: ${fantomSalt},
// 	Transaction Hash: ${fantomdeployTxData.hash},
// 	Token ID: ${fantomtokenId},
// 	Expected token manager address: ${fantomexpectedTokenManagerAddress},
// 	`
//   );

//   // MOONBEAM DEPLOY ===================================================================================================
//   const moonbeamProvider = new ethers.providers.JsonRpcProvider(
//     process.env.NEXT_PUBLIC_MOONBEAM_RPC
//   );
//   const moonbeamSigner = new ethers.Wallet(
//     process.env.NEXT_PUBLIC_MOONBEAM_ACCOUNT_PRIVATE_KEY,
//     moonbeamProvider
//   );
//   const moonbeamsalt = "0x" + crypto.randomBytes(32).toString("hex");

//   // Create params
//   const moonbeamparams = ethers.utils.defaultAbiCoder.encode(
//     ["bytes", "address"],
//     [
//       moonbeamSigner.address,
//       process.env.NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_MOONBEAM,
//     ]
//   );

//   // Deploy the token manager
//   const deployTxData = await interchainTokenServiceContract.deployTokenManager(
//     moonbeamsalt,
//     "",
//     MINT_BURN,
//     moonbeamparams,
//     ethers.utils.parseEther("0.01")
//   );

//   // Get the tokenId
//   const tokenId = await interchainTokenServiceContract.interchainTokenId(
//     moonbeamSigner.address,
//     moonbeamsalt
//   );

//   // Get the token manager address
//   const expectedTokenManagerAddress =
//     await interchainTokenServiceContract.tokenManagerAddress(tokenId);

//   console.log(
//     `
// 	Salt: ${moonbeamsalt},
// 	Transaction Hash: ${deployTxData.hash},
// 	Token ID: ${tokenId},
// 	Expected token manager address: ${expectedTokenManagerAddress},
// 	`
//   );
// }

// //...

// async function getContractInstance(
//   contractAddress: any,
//   contractABI: any,
//   signer: any
// ) {
//   return new ethers.Contract(contractAddress, contractABI, signer);
// }

// function saveAddressToEnv(address: any) {
//   const envPath = path.resolve(__dirname, "../../.env");
//   const key = "NEXT_PUBLIC_ERC20_INTER_CHAIN_TOKEN";
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
//   console.log(`Interchain token  address saved to .env file: ${address}`);
// }

// // Salt: 0x1d5d6dbfd0e8326bb33e410d7e63ce791def4e8f7a74656b8e1f1d51c561663d,
// // Transaction Hash: 0xb86992c705f27f3329348570be5de1fc39bd7cd262d7fb49904b57f308275f8a,
// // Token ID: 0x850ede64a2d8084e4ced76f4e439409b52ce6ee8073d476affe027b1978a1703,
// // Expected token manager address: 0x91469B01a5cc6EdE7d2e0fd030aE20Bc06F2b53a,

// // Salt: 0xe9852c8c9c334768494d47fc538485fa7fcb1c0778e2bc0845c73cf33ff42986,
// // Transaction Hash: 0x8658911d7453e81b2f2e958a275bfd712d8266b1e1715b3cb1356d2f9221f5c0,
// // Token ID: 0x9f7ab2a537719f8a1941000847238d9edb36458dc25c8b039e713c3365283d4a,
// // Expected token manager address: 0x034B131668b380A4a33689dA6dCA65524ec964D3,


import { deploy_ECR20_crosschain_2_fantom } from "./deploy_2_fantom";
import { deploy_remote_ERC20_token_2_moonbeam } from "./deploy_remote_2_moonbeam";

export const deploy = async () => {
  const { tokenId, expectedTokenManagerAddress, salt } =
    await deploy_ECR20_crosschain_2_fantom();
  console.log(
    "🚀 ~ main ~ tokenId, expectedTokenManagerAddress, salt:",
    tokenId,
    expectedTokenManagerAddress,
    salt
  );
  await deploy_remote_ERC20_token_2_moonbeam(salt);
};