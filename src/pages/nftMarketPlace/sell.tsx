"use client";
import { useEffect, useState } from "react";
import { getNFT, getNFTUrl, truncatedAddress } from "helpers";
import { ethers } from "ethers";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { NFTGlobalContext } from "context/NFTcontext";

const Sell = () => {
  const [listNFT, setListNFT] = useState<any>([]);
  const [listNFTUrl, setListNFTUrl] = useState<any>([]);
  const { NFTContract, MarketContract, connectWallet } = NFTGlobalContext();
  useEffect(() => {
    const getAllNFT = async () => {
      if (!NFTContract || !MarketContract) {
        await connectWallet();
      }

      const temp = [];
      const listNFT = await getNFT(MarketContract);
   
      for (let i = 0; i < listNFT?.length; i++) {
        temp.push(
          await getNFTUrl(
            NFTContract,
            convertBigNumberToString(listNFT[i][0]) + ""
          )
        );
      }
   
      setListNFTUrl(temp);
      setListNFT(listNFT);
    };
    getAllNFT();
  }, []);
  const convertBigNumberToString = (bigNumber: any) => {
    return bigNumber.toString();
  };
  return (
    <div className="flex flex-wrap gap-10">
      {listNFT &&
        listNFT.map((item: any, index: any) => (
          //     <div key={index} className="nft-item w-[300px] h-[400px]">
          //         <img src={listNFTUrl[index]} alt=""/>
          //   <p>Token ID: {convertBigNumberToString(item[0])}</p>
          //   <p>NFT: {item[1]}</p>
          //   <p>Price: {convertBigNumberToString(item[3])}</p>
          //   <p>Seller: {item[4]}</p>
          //   <p>Sold: {item[5].toString()}</p>
          // </div>
          <Flex
            direction={"column"}
            backgroundColor={"#EEE"}
            justifyContent={"center"}
            padding={"2.5"}
            borderRadius={"6px"}
            borderColor={"lightgray"}
            borderWidth={1}
            width={"300px"}
            height={"400px"}
          >
            <Box borderRadius={"4px"} overflow={"hidden"}>
              <Text>NFT</Text>
            </Box>
            <Image src={listNFTUrl[index]} />
            <Text fontSize={"small"} color={"darkgray"}>
              Token ID #{convertBigNumberToString(item[0])}
            </Text>
            <Text fontWeight={"bold"}>
              Price #{convertBigNumberToString(item[3])}
            </Text>
            <Text fontWeight={"bold"}>
              Seller # {truncatedAddress(item[4])}
            </Text>
          </Flex>
        ))}
    </div>
  );
};

export default Sell;
