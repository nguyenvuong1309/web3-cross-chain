
const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');


const json = fs.readFileSync(path.resolve(__dirname, '../artifacts/contracts/SendTransaction.sol/SendTransaction.json'), 'utf8');
const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

async function main() {
    // Configuration: setup provider, wallet, and contract information
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8500/1');
    const privateKey = '0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32'; // Replace with your wallet's private key
    const signer = new ethers.Wallet(privateKey, provider);
    const contractAddress = '0xcAa4e3a9d769C4070Da8707b639c50D01a385cE1'; // Replace with your contract's address
    const recipientAddress = '0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53'; // Address to send Ether to

    // ABI for the SendTransaction contract

    const contract = new ethers.Contract(contractAddress, abi, signer);

    // Function to check the balance of the contract
    async function checkAndFundContract() {
        const balance = await provider.getBalance(contract.address);
        console.log(`Current contract balance: ${ethers.utils.formatEther(balance)} ETH`);

        if (balance.lt(ethers.utils.parseEther("1.0"))) {
            console.log("Funding contract...");
            const tx = {
                to: contract.address,
                value: ethers.utils.parseEther("2.0") // Sends 2 Ether to the contract
            };
            const sendResult = await signer.sendTransaction(tx);
            await sendResult.wait();
            console.log("Funds added to the contract.");
        } else {
            console.log("Sufficient funds already present in the contract.");
        }
    }

    // Function to send Ether from the contract
    async function sendEtherFromContract() {
        await checkAndFundContract();

        console.log(`Sending 1 ETH to ${recipientAddress} from the contract...`);
        try {
            const transactionResponse = await contract.sendEther(recipientAddress, ethers.utils.parseEther("1.0"), {
                gasLimit: 100000 // Manually setting the gas limit
            });
            await transactionResponse.wait();
            console.log("1 ETH sent successfully.");
        } catch (error) {
            console.error("Failed to send Ether:", error.message);
        }
    }

    await sendEtherFromContract();
}

main().catch(console.error);



