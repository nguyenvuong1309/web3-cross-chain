


const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');


const json = fs.readFileSync(path.resolve(__dirname, '../artifacts/contracts/Greeter.sol/Greeter.json'), 'utf8');
const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

async function interact() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8500/1');
    const wallet = new ethers.Wallet('0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32', provider);
    const greeterAddress = '0x0Aa420284A367D7acaD94f9C1fa47D2844841740';

    const greeter = new ethers.Contract(greeterAddress, abi, wallet);

    // Fetch the current greeting
    const currentGreeting = await greeter.greet();
    console.log('Current Greeting:', currentGreeting);

    // Update the greeting
    const tx = await greeter.setGreeting('Hello, ethers!');
    await tx.wait();

    // Fetch the updated greeting
    const updatedGreeting = await greeter.greet();
    console.log('Updated Greeting:', updatedGreeting);
}

interact().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
