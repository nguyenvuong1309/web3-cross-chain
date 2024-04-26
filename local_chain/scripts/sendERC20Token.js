

const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');
const json = fs.readFileSync(path.resolve(__dirname, '../artifacts/contracts/ERC20Token.sol/TokenTransfer.json'), 'utf8');
const artifact = JSON.parse(json);

const abi = artifact.abi;


async function checkBalance(tokenAddress, accountAddress) {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    //const tokenABI = ["function balanceOf(address owner) view returns (uint256)"];
    const tokenContract = new ethers.Contract(tokenAddress, abi, provider);
    console.log("🚀 ~ checkBalance ~ tokenContract:", tokenContract)

    try {
        const balance = await tokenContract.checkBalance(tokenAddress,accountAddress);
        console.log(`Balance is: ${balance.toString()}`);
    } catch (error) {
        console.error("Failed to fetch balance:", error);
    }
}


checkBalance("0x65DC90aad628601fF844b86C2F36FD73479acEe2","0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32")