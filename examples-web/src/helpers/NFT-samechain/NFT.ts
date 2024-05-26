import { ethers } from "ethers";
import { NFT__factory as NFTfactory } from "../../../src/types/factories/contracts/NFT-samechain";
import { useContext, useState } from "react";
import {
  NFTContractInstanceContext,
  NFTGlobalContext,
} from "../../context/NFTcontext";

// Connection to a local Ganache blockchain
const provider = new ethers.providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_FANTOM_RPC
);

// // The private key should correspond to one of the accounts in Ganache
// const privateKey =
//   "0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32";
// const wallet = new ethers.Wallet(privateKey, provider);

// const fundingAccountPrivateKey =
//   "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4"; // Replace with your funding account private key
// const fundingWallet = new ethers.Wallet(fundingAccountPrivateKey, provider);

// // The Contract ABI and Address
// const contractABI = NFTfactory.abi;
// const contractAddress = "0xeB8FFE106Cfe586C251108377f950eDBFB9C0EDC";

// // Creating a new contract instance
// export const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export async function mintNFT(contract: any, url: string, provider: any) {
  try {
    if (contract) {
      // Fetch the current gas price
      const currentGasPrice = await provider.getGasPrice();
      console.log("🚀 ~ mintNFT ~ currentGasPrice:", currentGasPrice);
      // Set a higher gas price (e.g., 1.5 times the current gas price)
      const higherGasPrice = currentGasPrice.mul(150).div(100);

      // Specify the gas price in the transaction
      const mintTx = await contract.mint(url, {
        gasPrice: higherGasPrice,
      });
      const mintReceipt = await mintTx.wait();
      const tokenId = mintReceipt.events[0].args.tokenId;
      console.log("Mint success");
      return tokenId;
    } else {
      console.log("contract null");
    }
  } catch (error) {
    console.log("🚀 ~ mintNFT ~ error:", error);
  }
  // try {
  //   if (contract) {
  //     const mintTx = await contract.mint(url);
  //     const mintReceipt = await mintTx.wait();
  //     const tokenId = mintReceipt.events[0].args.tokenId;
  //     console.log("Mint success");
  //     return tokenId;
  //   } else {
  //     console.log("contract null");
  //   }
  // } catch (error) {
  //   console.log("🚀 ~ mintNFT ~ error:", error);
  // }
}

export async function approveNFTtoMarket(
  contract: any,
  marketAddress: string,
  tokenId: string
) {
  try {
    if (contract) {
      await contract.approve(marketAddress, tokenId);
      console.log("approve sucess");
    } else {
      console.log("contract null");
    }
  } catch (error) {
    console.log("🚀 ~ approveNFTtoMarket ~ error:", error);
  }
}
