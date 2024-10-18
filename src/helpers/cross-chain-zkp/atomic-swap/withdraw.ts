import { ethers } from "ethers";
import { HTLC__factory as HTLCfactory } from "../../../../src/types/factories/contracts/cross-chain-zkp/atomic-swap";
import { Token__factory as Tokenfactory } from "../../../../src/types/factories/contracts/cross-chain-zkp/atomic-swap";
import { config } from 'dotenv';
config();

const fantomRpc = process.env.NEXT_PUBLIC_FANTOM_RPC || "https://rpc.testnet.fantom.network";
const deployerPrivateKey = process.env
  .NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY as string || "0x677f56f8da933302d5f78506784d7e81c2f197e15d0db96527b66ca212553908";
const fantomContractAddress = process.env
  .NEXT_PUBLIC_BRIDGE_A_FANTOM_CONTRACT_ADDRESS as string;
const kavaContractAddress = process.env
  .NEXT_PUBLIC_BRIDGE_A_KAVA_CONTRACT_ADDRESS as string;


async function withdraw_htlc_2_fantom() {
    const moonbeamProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_FANTOM_RPC);
    const moonbeamWallet = new ethers.Wallet(process.env.NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY || "", moonbeamProvider);

    const HTLCContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_HTCL_CONTRACT_ADDRESS_FANTOM || "",
      HTLCfactory.abi,
      moonbeamWallet
    );

    const tokenContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS_FANTOM || "",
      Tokenfactory.abi,
      moonbeamWallet
    );

    await HTLCContract.withdraw('remarkable',
      {
        gasLimit: ethers.utils.hexlify(1000000)
      }
    );
    const mySecret = await HTLCContract.secret();

    const balance  = await tokenContract.balanceOf("0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53",
      {
        gasLimit: ethers.utils.hexlify(1000000)
      }
    )

    const balance2  = await tokenContract.balanceOf("0x25bE1016Cd01747E8ED5e22ddA4aD0449653f66F",
      {
        gasLimit: ethers.utils.hexlify(1000000)
      })
  
    console.log("🚀 ~ balance :",balance.toNumber(), " - ", balance2.toNumber());


    console.log("🚀 ~ withdraw_htlc_2_moonbeam ~ mySecret:", mySecret);
}

async function withdraw_htlc_2_moonbeam() {
  const moonbeamProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_MOONBEAM_RPC);
  const moonbeamWallet = new ethers.Wallet(process.env.NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY || "", moonbeamProvider);

  const HTLCContract = new ethers.Contract(
    process.env.NEXT_PUBLIC_HTCL_CONTRACT_ADDRESS_MOONBEAM || "",
    HTLCfactory.abi,
    moonbeamWallet
  );

  const tokenContract = new ethers.Contract(
    process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS_MOONBEAM || "",
    Tokenfactory.abi,
    moonbeamWallet
  );

  await HTLCContract.withdraw('remarkable',
    {
      gasLimit: ethers.utils.hexlify(1000000)
    }
  );
  const mySecret = await HTLCContract.secret();

  const balance  = await tokenContract.balanceOf("0x25bE1016Cd01747E8ED5e22ddA4aD0449653f66F",
    {
      gasLimit: ethers.utils.hexlify(1000000)
    })

  const balance2  = await tokenContract.balanceOf("0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53",
    {
      gasLimit: ethers.utils.hexlify(1000000)
    })

  console.log("🚀 ~ balance :",balance.toNumber(), " - ", balance2.toNumber());


  console.log("🚀 ~ withdraw_htlc_2_moonbeam ~ mySecret:", mySecret);
}


withdraw_htlc_2_moonbeam();
withdraw_htlc_2_fantom();

// https://github.com/markvelous/atomicswap/tree/kovan