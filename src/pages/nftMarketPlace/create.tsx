"use client";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useState } from "react";
import { ethers } from "ethers";
import {
  mintNFT,
  approveNFTtoMarket,
  listNFT,
  getNFT,
  transferTokens,
} from "helpers";
import { Button, Image } from "@chakra-ui/react";
import { NFTGlobalContext } from "context/NFTcontext";

console.log("process.emv", process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY);

const Create = ({ marketplace, nft }: any) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState(10);
  const { NFTContract, MarketContract, connectWallet, provider } =
    NFTGlobalContext();

  const createNFT = async () => {
    await transferTokens();
    return;
    if (!NFTContract || !MarketContract || !connectWallet) {
      await connectWallet();
    }
    if (file.length > 0) {
      const nftId = await mintNFT(NFTContract, file, provider);

      await approveNFTtoMarket(
        NFTContract,
        process.env
          .NEXT_PUBLIC_NFT_MARKETPLACE_SAME_CHAIN_CONTRACT_ADDRESS as string,
        nftId
      );

      const res = await listNFT(
        MarketContract,
        process.env.NEXT_PUBLIC_NFT_SAME_CHAIN_CONTRACT_ADDRESS as string,
        nftId
      );
      console.log("🚀 ~ createNFT ~ res:", res);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <Image src={file} alt="" height={"400px"} width={"400px"} />
        <input
          value={file}
          onChange={(e) => {
            setFile(e.target.value);
          }}
        />
        {/* <input value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input value={des} onChange={(e) => {setDes(e.target.value)}}/>
                <input value={price} onChange={(e) => {setPrice(Number(e.target.value))}}/> */}
      </div>
      <Button
        onClick={createNFT}
        height={"50px"}
        width={"100px"}
        backgroundColor={"saddlebrown"}
      >
        Create NFT
      </Button>
    </div>
  );
};

export default Create;
