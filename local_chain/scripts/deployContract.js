const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');


const json = fs.readFileSync(path.resolve(__dirname, '../artifacts/contracts/Greeter.sol/Greeter.json'), 'utf8');
const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

async function main() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8500/1');
    const wallet = new ethers.Wallet('0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32', provider);

    // Greeter compiled contract ABI and Bytecode
    // const abi = [/* ABI from your compiled contract */];
    // const bytecode = '/* Bytecode from your compiled contract */';
    // const abi = [/* ABI from your compiled contract */];
    // const bytecode = '/* Bytecode from your compiled contract */';

    const GreeterFactory = new ethers.ContractFactory(abi, bytecode, wallet);
    const greeter = await GreeterFactory.deploy('Hello, world!');

    await greeter.deployed();

    console.log('Greeter deployed to:', greeter.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
