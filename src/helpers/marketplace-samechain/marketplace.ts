"use client";
import { ethers } from "ethers";
import { Marketplace__factory as Marketplacefactory } from "../../../src/types/factories/contracts/marketplace-samechain";
import { NFT__factory as NFTfactory } from "../../../src/types/factories/contracts/NFT-samechain";
//import {contract as NFTContract} from '../NFT-samechain'

// Connection to a local Ganache blockchain
// const provider = new ethers.providers.JsonRpcProvider(
//   "http://localhost:8500/3"
// );

// The private key should correspond to one of the accounts in Ganache
// const privateKey = process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY as string;
// const wallet = new ethers.Wallet(privateKey, provider);

// const fundingAccountPrivateKey =
//   "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4"; // Replace with your funding account private key
//const fundingWallet = new ethers.Wallet(fundingAccountPrivateKey, provider);

// The Contract ABI and Address
// const contractABI = Marketplacefactory.abi;
// const contractAddress =
//   process.env.NFT_MARKETPLACE_SAME_CHAIN_CONTRACT_ADDRESS ||
//   "0x0Aa420284A367D7acaD94f9C1fa47D2844841740";

// Creating a new contract instance
//const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export async function listNFT(
  contract: any,
  NFTContractAddress: any,
  tokenId: any
) {
  console.log("contract listNFT", contract);
  if (contract) {
    try {
      // const tx = {
      //   to: wallet.address,
      //   value: 1000000000000,
      // };

      // const txResponse = await fundingWallet.sendTransaction(tx);
      // await txResponse.wait();
      // console.log("🚀 ~ funding success");

      const price = ethers.utils.parseEther("1");
      console.log("🚀 ~ price:", price);
      const res = await contract.makeItem(NFTContractAddress, tokenId, price, {
        gasLimit: 10000000,
      });
      console.log("🚀 ~ listNFT ~ listNFT: success", res);
      return res;
    } catch (error) {
      console.log("🚀 ~ listNFT ~ error:", error);
    }
  } else {
    console.log("contract null");
  }
}

export async function getNFT(contract: any) {
  console.log("contract", contract);
  if (contract) {
    try {
      const items = await contract.getAllItems();
      console.log("🚀 ~ getNFT ~ items:", items);
      return items;
    } catch (error) {
      console.log("🚀 ~ getNFT ~ error:", error);
    }
  } else {
    console.log("contract null");
  }
}

export async function getNFTUrl(contract: any, id: string) {
  if (contract) {
    try {
      const url = await contract.tokenURI(id);
      return url;
    } catch (error) {
      console.log("🚀 ~ getNFTUrl ~ error:", error);
    }
  } else {
    console.log("error get url nft");
  }
}
