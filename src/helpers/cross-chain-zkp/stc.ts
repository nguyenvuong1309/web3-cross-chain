import { ethers } from "ethers";
import { LockReleaseProtocol__factory as LockReleaseProtocolfactory } from "../../../src/types/factories/contracts/cross-chain-zkp/sct.sol";
import { PedersenContract__factory as PedersenCommitmentfactory } from "../../../src/types/factories/contracts/cross-chain-zkp/pedersen-commitments/ZKP";

import { config } from 'dotenv';
config();


// Connect to local Ethereum node
const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_KAVA_RPC);

// Signers (accounts)
let payerSigner: any = new ethers.Wallet(process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY || "", provider);
let intermediarySigner: any =  new ethers.Wallet("6d367b56b547946e71291fca8656371b1be6d53a474d4d19934bf8748c6ad164", provider);

// Contract ABI and address
const contractABI = LockReleaseProtocolfactory.abi;

const contractAddress = process.env.NEXT_PUBLIC_STC_CONTRACT_ADDRESS_KAVA || ""; // Replace with your deployed contract address

const nn = ethers.BigNumber.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");

let contract: any = null;
let pedersenCommitmentContract: any = null;

function getRandomBigNumberLessThan(n: ethers.BigNumber): ethers.BigNumber {
    let randomBN;
    do {
        const randomBytes = ethers.utils.hexlify(ethers.utils.randomBytes(32));
        randomBN = ethers.BigNumber.from(randomBytes);
    } while (randomBN.gte(n));
    return randomBN;
}

async function setup() {
    contract = new ethers.Contract(contractAddress, contractABI, payerSigner);
    pedersenCommitmentContract = new ethers.Contract(
        // process.env.NEXT_PUBLIC_PEDERSEN_COMMITMENT_CONTRACT_ADDRESS_FANTOM || 
        "0x9494261872Fa3d8cF50cabe0526951509eB33330", 
        PedersenCommitmentfactory.abi,
        payerSigner
    );
}

// async function initializeH() {
//     // Gọi hàm initializeH để thiết lập H
//     const tx = await pedersenCommitmentContract.initializeH();
//     await tx.wait();
//     console.log("H đã được thiết lập.");
// }


async function lockPhase() {
    // Payer requests a lock
    const intermediaryAddress = await intermediarySigner.getAddress();
    const fee = ethers.utils.parseEther("0.01");
    const value = ethers.utils.parseEther("1");

    const tx = await contract.requestLock(intermediaryAddress, fee, {
        value: value.add(fee),
    });
    const receipt = await tx.wait();


    // const pedersenCommitment = await pedersenCommitmentContract.initializeH();
    // await pedersenCommitment.wait();

    const r = getRandomBigNumberLessThan(nn);
    const v = getRandomBigNumberLessThan(nn);

    await pedersenCommitmentContract.commit("123","456");
    // const params = await pedersenCommitmentContract.params();
    // console.log('Contract parameters:', params);




    const txId = receipt.events[0].args.txId.toNumber();
    console.log(`Lock requested with txId: ${txId}`);

    // Intermediary completes the lock
    const collateral = ethers.utils.parseEther("0.2");
    const contractWithIntermediary = contract.connect(intermediarySigner);

    const lockTx = await contractWithIntermediary.completeLock(txId, {
        value: collateral,
    });
    await lockTx.wait();
    console.log(`Lock completed for txId: ${txId}`);
}

async function releasePhase() {
    // Payer requests release
    const txId = 1; // Use the txId from lockPhase
    const releaseTx = await contract.requestRelease(txId,
        {
            gasLimit: ethers.utils.hexlify(1000000)
        }
    );
    await releaseTx.wait();
    console.log(`Release requested and completed for txId: ${txId}`);
}

async function main() {
    await setup();
    // await initializeH();
    await lockPhase();
    // await releasePhase();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
