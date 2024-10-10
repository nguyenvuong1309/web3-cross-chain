import { Card } from "components/Card";
import { NFTContractInstanceProvider } from "context/NFTcontext";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <NFTContractInstanceProvider>
      <div>
        {/* <h1 className="text-4xl font-medium text-center">
          Axelar Web Examples
        </h1> */}
        <div className="flex flex-wrap justify-center mt-8">
          <Card
            classname="mx-2 my-2"
            title="Send message to another chain"
            description="Transfer messages from the source chain to the destination chain using the Axelar Gateway's callContract function."
            url="/examples/call-contract"
          />
          <Card
            classname="mx-2 my-2"
            title="Send token to another chain"
            description="Simply sending a token from source chain to the destination chain and have zkp"
            url="/examples/send-tokens-cross-chain"
          />
          {/* <Card
            classname="mx-2 my-2"
            title="Send token with custom logic to another chain"
            description="Transfer tokens and execute custom logic to the destination chain using the callContractWithToken function of the Axelar Gateway contract."
            url="/examples/call-contract-with-token"
          />
          <Card
            classname="mx-2 my-2"
            title="Create NFT in the same chain"
            description="blabala"
            url="/nftMarketPlace/create"
          />
          <Card
            classname="mx-2 my-2"
            title="NFT Market place in the same chain"
            description="blabala"
            url="/nftMarketPlace/sell"
          /> */}
        </div>
      </div>
    </NFTContractInstanceProvider>
  );
};

export default Home;
