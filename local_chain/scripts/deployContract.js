const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

const json = fs.readFileSync(path.resolve(__dirname, '../artifacts/contracts/SendTransaction.sol/SendTransaction.json'), 'utf8');
const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

async function main() {
    // Set up the provider to connect to your local blockchain
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8500/1');
    const signer = new ethers.Wallet('0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32', provider);

    // Load the contract
    const contractSource = fs.readFileSync(path.resolve(__dirname, '../contracts/SendTransaction.sol'), 'utf8');
    //const compiledContract = compileContract(contractSource);
    
    const SendTransaction = new ethers.ContractFactory(
        abi,
        bytecode,
        signer
    );

    // Deploy the contract
    const sendTransaction = await SendTransaction.deploy();
    await sendTransaction.deployed();

    console.log('SendTransaction deployed to:', sendTransaction.address);
    return sendTransaction;
}

// function compileContract(source) {
//     const solc = require('solc');
//     const input = {
//         language: 'Solidity',
//         sources: {
//             'SendTransaction.sol': {
//                 content: source,
//             },
//         },
//         settings: {
//             outputSelection: {
//                 '*': {
//                     '*': ['abi', 'evm.bytecode'],
//                 },
//             },
//         },
//     };

//     const output = JSON.parse(solc.compile(JSON.stringify(input)));
//     return {
//         abi: output.contracts['SendTransaction.sol']['SendTransaction'].abi,
//         bytecode: output.contracts['SendTransaction.sol']['SendTransaction'].evm.bytecode.object,
//     };
// }

main().catch(console.error);
