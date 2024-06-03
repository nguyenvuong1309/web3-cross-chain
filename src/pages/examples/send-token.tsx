import { Button, Input } from "@chakra-ui/react";
import { transferMintAccessToTokenManagerOnFantom } from "helpers/erc20-token-crosschain/mint_token";
import type { NextPage } from "next";
const SendToken: NextPage = () => {
  const MinInFantom = async () => {
    await transferMintAccessToTokenManagerOnFantom();
  };
  return (
    <div>
      <Button
        width={"200px"}
        height={"70px"}
        backgroundColor={"green"}
        onClick={() => {
          MinInFantom();
        }}
      >
        min in fantom
      </Button>
    </div>
  );
};

export default SendToken;
