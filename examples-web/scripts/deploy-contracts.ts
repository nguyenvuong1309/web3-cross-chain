import "dotenv/config";
import fs from "fs/promises";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import { Wallet } from "ethers";
import { configPath } from "../../config";
import { deploy as deployCallContract } from "./call-contract";
import { deploy as deployCallContractWithToken } from "./call-contract-with-token";
import { deploy as deployNftLinker } from "./nft-linker";
import { deploy as deploySendMessage } from "./sendMessage";
import { deploy as deployERC20TokenSameChain } from "./erc20-token-same-chain";
import { deploy as deployNFTSameChain } from "./NFT-samechain";
import { deploy as deployMarketplaceSameChain } from "./marketplace-samechain";
import { deploy as sendMessageSameChain } from "./sendMessageSameChain";
import { deploy as ERC20TokenInterchain } from "./interchain-token-service";
import { deploy_2_fantom } from "./erc20-token-crosschain";
import { deploy_2_moonbeam } from "./erc20-token-crosschain";
//import { deploy as deployInterChainToken } from "./erc20-token-crosschain";
import { deploy_2_fantom as deploySendMessageCrossChain2Fantom } from "./sendMessageCrossChain";
import { deploy_2_moonbeam as deploySendMessageCrossChain2Moonbeam } from "./sendMessageCrossChain";

// create wallet
const privateKey = process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY as string;
const wallet = new Wallet(privateKey);

const chains = require(configPath.localEvmChains);
const ethereumChain =
  chains.find((chain: any) => chain.name === "Fantom") || (chains[0] as any);
const avalancheChain =
  chains.find((chain: any) => chain.name === "Moonbeam") || (chains[1] as any);

function print(chain: any) {
  console.log(`Deployed example contracts on ${chain.name}`);
  console.log("callContract:", chain.callContract);
  console.log("callContractWithToken:", chain.callContractWithToken);
  console.log("nftLinker:", chain.nftLinker);
}

async function main() {
  console.log("🚀 ~ main ~ deploySendMessageCrossChain:");
  //await deploySendMessageCrossChain2Fantom();
  //await deploySendMessageCrossChain2Moonbeam();
  console.log("🚀 ~ main ~ deploySendMessageCrossChain: sucess");
  //await deploySendMessageCrossChain2Moonbeam();
  return;
  const [chainA, chainB] = await deployCallContract(
    wallet,
    ethereumChain,
    avalancheChain
  )
    .then(() =>
      deployCallContractWithToken(wallet, ethereumChain, avalancheChain)
    )
    // .then(() => deployNftLinker(wallet, ethereumChain, avalancheChain))
    .then(() => deploySendMessage(wallet, ethereumChain, avalancheChain));
  console.log("🚀 ~ main ~ deployERC20TokenSameChain:");
  await deployERC20TokenSameChain();
  console.log("🚀 ~ main ~ deployNFTSameChain:");
  await deployNFTSameChain();
  console.log("🚀 ~ main ~ deployMarketplaceSameChain:");
  await deployMarketplaceSameChain();
  console.log("🚀 ~ main ~ sendMessageSameChain:");
  await sendMessageSameChain();
  console.log("🚀 ~ main ~ ERC20TokenInterchain:", ERC20TokenInterchain);
  await ERC20TokenInterchain();

  print(chainA);
  console.log("");
  print(chainB);

  // update chains
  const updatedChains = [chainA, chainB];
  const _path = path.resolve(configPath.localEvmChains);
  const dirname = path.dirname(_path);
  if (!existsSync(dirname)) {
    await mkdirSync(dirname, { recursive: true });
  }
  const publicPath = path.resolve(__dirname, "../public/chains.json");
  await fs.writeFile(_path, JSON.stringify(updatedChains, null, 2));
  await fs.writeFile(publicPath, JSON.stringify(updatedChains, null, 2));
  await deploy_2_fantom();
  await deploy_2_moonbeam();
}


main();
