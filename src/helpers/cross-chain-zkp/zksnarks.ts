import { ethers } from "ethers";
import { SumsToFifteen__factory as SumsToFifteenfactory } from "../../../src/types/factories/contracts/cross-chain-zkp/zkSNARKs";
import { config } from 'dotenv';
config();




async function zksnarks() {
    const kavaProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_KAVA_RPC);
    const kavaWallet = new ethers.Wallet(process.env.NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY || "", kavaProvider);

    const zksnarksContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_ZKSNARKS_CONTRACT_ADDRESS_FANTOM || "",
      SumsToFifteenfactory.abi,
      kavaWallet
    );
    // # Proof generated from Zokrates
    const A = [0x1628f3170cc16d40aad2e8fa1ab084f542fcb12e75ce1add62891dd75ba1ffd7n, 0x11b20d11a0da724e41f7e2dc4d217b3f068b4e767f521a9ea371e77e496cc54n]
    const A_p = [0x1a4406c4ab38715a6f7624ece480aa0e8ca0413514d70506856af0595a853bc3n, 0x2553e174040723a6bf5ea2188d2a1429bb01b13084c4af5b51701e6077716980n]
    const B = [[0x27c9878700f09edc60cf23d3fb486fe50726f136ff46ad48653a3e7254ae3020n, 0xe35b33188dc2f47618248e4f12a97026c3acdef9b4d021bf94e7b6d9e8ffbb6n], [0x64cf25d53d57e2931d58d22fe34122fa12def64579c02d0227a496f31678cf8n, 0x26212d004463c9ff80fc65f1f32321333b90de63b6b35805ef24be8b692afb28n]]
    const B_p = [0x175e0abe73317b738fd5e9fd1d2e3cb48124be9f7ae8080b8dbe419b224e96a6n, 0x85444b7ef6feafa8754bdd3ca0be17d245f13e8cc89c37e7451b55555f6ce9dn]
    const C = [0x297a60f02d72bacf12a58bae75d4f330bed184854c3171adc6a65bb708466a76n, 0x16b72260e7854535b0a821dd41683a28c89b0d9fcd77d36a157ba709996b490n]
    const C_p = [0x29ea33c3da75cd937e86aaf6503ec67d18bde775440da90a492966b2eb9081fen, 0x13fcc4b019b05bc82cd95a6c8dc880d4da92c53abd2ed449bd393e5561d21583n]
    const H = [0x2693e070bade67fb06a55fe834313f97e3562aa42c46d33c73fccb8f9fd9c2den, 0x26415689c4f4681680201c1975239c8f454ac4b2217486bc26d92e9dcacb58d7n]
    const K = [0x11afe3c25ff3821b8b42fde5a85b734cf6000c4b77ec57e08ff5d4386c60c72an, 0x24174487b1d642e4db86689542b8d6d9e97ec56fcd654051e96e36a8b74ea9efn]
    const I1 = [5, 1];

    // const txhash1 = await zksnarksContract.verifyFifteen(A, A_p, B, B_p, C, C_p, H, K, I1);
    // const success1 = await zksnarksContract.success();
    // console.log("success: ", success1);

    const I2 = [6, 1];
    const txhash2 = await zksnarksContract.verifyFifteen(A, A_p, B, B_p, C, C_p, H, K, I2);
    const success2 = await zksnarksContract.success();
    console.log("success: ", success2);
    
}

zksnarks();
