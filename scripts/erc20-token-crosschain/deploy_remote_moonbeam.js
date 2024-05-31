const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(
  path.resolve(__dirname, "../../utils/interchainTokenServiceABI.json"),
  "utf8"
);
const {
  AxelarQueryAPI,
  Environment,
  EvmChain,
  GasToken,
} = require("@axelar-network/axelarjs-sdk");
const api = new AxelarQueryAPI({ environment: Environment.TESTNET });

const artifact = JSON.parse(json);

const interchainTokenServiceContractABI = artifact.abi;

const MINT_BURN = 4;
//...

const interchainTokenServiceContractAddress =
  process.env.NEXT_PUBLIC_INTER_CHAIN_TOKEN_SERVICE ||
  "0xB5FB4BE02232B1bBA4dC8f81dc24C26980dE9e3C";

// Deploy remote token manager : Polygon
async function deployRemoteTokenManager() {
  try {
    // Set up the provider to connect to your local blockchain
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_FANTOM_RPC || "https://rpc.testnet.fantom.network"
    );

    // Your account to deploy the contract
    const deployerPrivateKey =
      process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY ||
      "0x677f56f8da933302d5f78506784d7e81c2f197e15d0db96527b66ca212553908";

    const fantomSigner = new ethers.Wallet(deployerPrivateKey, provider);
    console.log("🚀🚀🚀🚀🚀🚀");
    // Get the InterchainTokenService contract instance
    const interchainTokenServiceContract = await getContractInstance(
      interchainTokenServiceContractAddress,
      interchainTokenServiceContractABI,
      fantomSigner
    );

    // Create params
    const param = ethers.utils.defaultAbiCoder.encode(
      ["bytes", "address"],
      [
        fantomSigner.address,
        process.env
          .NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_MOONBEAM ||
          "0xa75868A530C5A3E717E25a092fd00339F83D64b7",
      ]
    );

    const gasAmount = await gasEstimator();
    // console.log("🚀 ~ deployRemoteTokenManager ~ gasAmount:", gasAmount);

    // Deploy the token manager
    const deployTxData =
      await interchainTokenServiceContract.deployTokenManager(
        "0xe9852c8c9c334768494d47fc538485fa7fcb1c0778e2bc0845c73cf33ff42986", // change salt
        "Moonbeam",
        MINT_BURN,
        param,
        ethers.utils.parseEther("0.01"),
        { value: gasAmount }
      );

    // Get the tokenId
    const tokenId = await interchainTokenServiceContract.interchainTokenId(
      fantomSigner.address,
      "0xe9852c8c9c334768494d47fc538485fa7fcb1c0778e2bc0845c73cf33ff42986" // change salt
    );

    // Get the token manager address
    const expectedTokenManagerAddress =
      await interchainTokenServiceContract.tokenManagerAddress(tokenId);

    console.log(
      `
      Transaction Hash: ${deployTxData.hash},
      Token ID: ${tokenId},
      Expected token manager address: ${expectedTokenManagerAddress},
      `
    );
  } catch (error) {
    console.log("🚀 ~ deployRemoteTokenManager ~ error:", error);
  }
}

async function getContractInstance(contractAddress, contractABI, signer) {
  return new ethers.Contract(contractAddress, contractABI, signer);
}

// Estimate gas costs
async function gasEstimator() {
  try {
    const gas = await api.estimateGasFee(
      EvmChain.FANTOM,
      EvmChain.POLYGON,
      GasToken.FTM,
      700000,
      1.1
    );

    return gas;
  } catch (error) {
    console.log("🚀 ~ gasEstimator ~ error:", error);
  }
}


deployRemoteTokenManager();

// Transaction Hash: 0x3caaa2b45bf0cf80af16cfecc4a246a4a05611e4a39d7d0a718f0b4f56df1a9c,
// Token ID: 0x9f7ab2a537719f8a1941000847238d9edb36458dc25c8b039e713c3365283d4a,
// Expected token manager address: 0x034B131668b380A4a33689dA6dCA65524ec964D3,
