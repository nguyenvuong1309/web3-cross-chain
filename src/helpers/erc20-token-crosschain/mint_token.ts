const { ethers } = require("ethers");
import { SimpleCustomToken__factory as SimpleCustomTokenfactory } from "../../../src/types/factories/contracts/ERC20-Token-crosschain/ERC20Token.sol/SimpleCustomToken__factory";

// Transfer mint access on all chains to the Expected Token Manager : Fantom
export async function transferMintAccessToTokenManagerOnFantom() {
  try {
    // Get a signer to sign the transaction
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_MOONBEAM_RPC
    );
    const fantomWallet = new ethers.Wallet(
      process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY,
      provider
    );

    const tokenContract = await getContractInstance(
      //process.env.NEXT_PUBLIC_ERC20_TOKEN_CROSS_CHAIN_CONTRACT_ADDRESS_FANTOM ||
      "0xD39D032c11f4Aa810D50dc70EEb67862783Ff4b8",
      SimpleCustomTokenfactory.abi,
      fantomWallet
    );
    console.log(
      "🚀 ~ transferMintAccessToTokenManagerOnFantom ~ tokenContract:",
      tokenContract
    );

    // Get the minter role
    const getMinterRole = await tokenContract.MINTER_ROLE();
    console.log(
      "🚀 ~ transferMintAccessToTokenManagerOnFantom ~ getMinterRole:",
      getMinterRole
    );
    return;

    const grantRoleTxn = await tokenContract.grantRole(
      getMinterRole,
      "0xD39D032c11f4Aa810D50dc70EEb67862783Ff4b8"
    );
    console.log(
      "🚀 ~ transferMintAccessToTokenManagerOnFantom ~ grantRoleTxn:",
      grantRoleTxn
    );

    console.log("grantRoleTxn: ", grantRoleTxn.hash);
  } catch (error) {
    console.log(
      "🚀 ~ transferMintAccessToTokenManagerOnFantom ~ error:",
      error
    );
  }
}

async function getContractInstance(
  contractAddress: any,
  contractABI: any,
  signer: any
) {
  return new ethers.Contract(contractAddress, contractABI, signer);
}
