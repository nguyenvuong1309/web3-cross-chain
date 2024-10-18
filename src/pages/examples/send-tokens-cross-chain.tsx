import { Button, Input } from "@chakra-ui/react";
import { transferMintAccessToTokenManagerOnFantom } from "helpers/erc20-token-crosschain/mint_token";
import { mintAndBridge } from "helpers/zkp-samechain/SendToken";
import { MintToken as MintTokenA,BurnToken as BurnTokenA } from "helpers/cross-chain-zkp/TokenA";
import { MintToken as MintTokenB,BurnToken as BurnTokenB } from "helpers/cross-chain-zkp/TokenB";
import { sendData as sendData_fantom_2_kava } from "helpers/cross-chain-zkp/BridgeA";
import { sendData as sendData_kava_2_moonbeam } from "helpers/cross-chain-zkp/BridgeB";
import { StoreSwapData } from "helpers/cross-chain-zkp/Storage";
import type { NextPage } from "next";
const SendToken: NextPage = () => {
  const SendTokenCrossChain = async () => {
    await MintTokenA("100");
    await BurnTokenA("1");

    await sendData_fantom_2_kava("1");
    await StoreSwapData(1);
    await sendData_kava_2_moonbeam("1");
    await MintTokenB("2");
        
  };
  return (
    <div>
      <Button
        style={{ width: "200px", height: "70px", backgroundColor: "green" }}
        onClick={() => {
          SendTokenCrossChain();
        }}>
        Send token from fantom to moonbeam
      </Button>
    </div>
  );
};

export default SendToken;
