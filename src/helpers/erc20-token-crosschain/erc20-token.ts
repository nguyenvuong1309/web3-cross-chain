const {
  AxelarQueryAPI,
  Environment,
  EvmChain,
  GasToken,
} = require("@axelar-network/axelarjs-sdk");
const interchainTokenServiceContractABI = require("./interchainTokenServiceABI");
import { ethers } from "ethers";
import { ERC20Token__factory as ERC20Tokenfactory } from "../../../src/types/factories/contracts/ERC20-Token-samechain";

const interchainTokenServiceContractAddress =
  process.env.NEXT_PUBLIC_INTER_CHAIN_TOKEN_SERVICE;

const api = new AxelarQueryAPI({ environment: Environment.TESTNET });
//...

// Transfer tokens : Fantom -> Polygon
export async function transferTokens() {
  try {
    // Get a signer to sign the transaction
    const fantomProvider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_FANTOM_RPC
    );
    const fantomSigner = new ethers.Wallet(
      process.env.NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY as string,
      fantomProvider
    );

    const interchainTokenServiceContract = await getContractInstance(
      interchainTokenServiceContractAddress,
      interchainTokenServiceContractABI,
      fantomSigner
    );
    //const gasAmount = await gasEstimator();
    const transfer = await interchainTokenServiceContract.interchainTransfer(
      "0x850ede64a2d8084e4ced76f4e439409b52ce6ee8073d476affe027b1978a1703", // tokenId, the one you store in the earlier step
      "Moonbeam",
      "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53", // receiver address
      ethers.utils.parseEther("5"), // amount of token to transfer
      "0x",
      ethers.utils.parseEther("0.01"), // gasValue
      {
        // Transaction options should be passed here as an object
        value: ethers.utils.parseEther("0.02"),
      }
    );

    // 0x65258117e8133397b047a6192cf69a1b48f59b0cb806be1c0fa5a7c1efd747ef
  } catch (error) {
    console.log("🚀 ~ transferTokens ~ error:", error);
  }
}

async function getContractInstance(
  contractAddress: any,
  contractABI: any,
  signer: any
) {
  return new ethers.Contract(contractAddress, contractABI, signer);
}

async function gasEstimator() {
  try {
    console.log("🚀 ~ gasEstimator ~ gasEstimator:");
    const gas = await api.estimateGasFee(
      EvmChain.FANTOM,
      EvmChain.POLYGON,
      GasToken.FTM,
      ethers.BigNumber.from(700000),
      ethers.BigNumber.from("1100000000000000000")
    );
    console.log("🚀 ~ gasEstimator ~ gas:", gas);

    return gas;
  } catch (error) {
    console.log("🚀 ~ gasEstimator ~ error:", error);
  }
}
