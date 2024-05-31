import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
//import { NFTGlobalContext } from "context/NFTcontext";

export default function Buy() {
  // const { provider,NFTContract, MarketContract, connectWallet } = NFTGlobalContext();
  // const buyNFT = async () => {
  //     const totalPrice = await MarketContract.getTotalPrice(1);
  //     const provider.
  // }
  return (
    <Container maxW={"1200px"} p={5}>
      <Heading>Buy NFTs</Heading>
      <Text>Browse and buy NFTs from this collection.</Text>
    </Container>
  );
}
