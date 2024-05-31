"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ethers, Contract } from "ethers";
import { NFT__factory as NFTfactory } from "../../src/types/factories/contracts/NFT-samechain";
import { Marketplace__factory as Marketplacefactory } from "../../src/types/factories/contracts/marketplace-samechain";
import { ERC20Token__factory as ERC20Tokenfactory } from "../../src/types/factories/contracts/ERC20-Token-samechain";

export interface ContractContextType {
  NFTContract: Contract | null;
  MarketContract: any;
  ERC20TokenSameChain: any;
  setNFTContract: any;
  connectWallet: any;
  signer: any;
  provider: any;
}

export const NFTContractInstanceContext = createContext<ContractContextType>({
  NFTContract: null,
  MarketContract: null,
  ERC20TokenSameChain: null,
  setNFTContract: null,
  connectWallet: null,
  signer: null,
  provider: null,
});

export function NFTContractInstanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [NFTContract, setNFTContract] = useState<any>(null);
  const [MarketContract, setMarketContract] = useState<any>(null);
  const [ERC20TokenSameChain, setERC20TokenSameChain] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined" &&
      window?.ethereum
    ) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setSigner(signer);

        // NFT
        if (process.env.NEXT_PUBLIC_NFT_SAME_CHAIN_CONTRACT_ADDRESS) {
          const NFTcontract = new ethers.Contract(
            process.env.NEXT_PUBLIC_NFT_SAME_CHAIN_CONTRACT_ADDRESS as string,
            NFTfactory.abi,
            signer
          );
          setNFTContract(NFTcontract);
        }

        // MARKETPLACE
        if (
          process.env.NEXT_PUBLIC_NFT_MARKETPLACE_SAME_CHAIN_CONTRACT_ADDRESS
        ) {
          const Marketcontract = new ethers.Contract(
            process.env
              .NEXT_PUBLIC_NFT_MARKETPLACE_SAME_CHAIN_CONTRACT_ADDRESS as string,
            Marketplacefactory.abi,
            signer
          );
          setMarketContract(Marketcontract);
        }

        // SEND TOKEN SAME CHAIN
        if (process.env.NEXT_PUBLIC_ERC20_TOKEN_SAME_CHAIN_CONTRACT_ADDRESS) {
          const ERC20TokenSameChainContract = new ethers.Contract(
            process.env
              .NEXT_PUBLIC_ERC20_TOKEN_SAME_CHAIN_CONTRACT_ADDRESS as string,
            ERC20Tokenfactory.abi,
            signer
          );
          setERC20TokenSameChain(ERC20TokenSameChainContract);
        }
      } catch (error) {
        console.log("Error connecting to MetaMask", error);
      }
    } else {
      console.log(
        "MetaMask is not installed. Please install MetaMask and try again."
      );
    }
  };
  useEffect(() => {
    connectWallet();
  }, []);
  return (
    <NFTContractInstanceContext.Provider
      value={{
        NFTContract,
        MarketContract,
        ERC20TokenSameChain,
        setNFTContract,
        connectWallet,
        signer,
        provider,
      }}
    >
      {children}
    </NFTContractInstanceContext.Provider>
  );
}

export const NFTGlobalContext = () => useContext(NFTContractInstanceContext);
