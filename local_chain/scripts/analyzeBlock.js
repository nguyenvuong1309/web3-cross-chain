// const { ethers } = require('ethers');

// async function fetchAddresses(provider, startBlock, endBlock) {
//     let addresses = new Set();  // Use a Set to avoid duplicates

//     for (let blockNumber = startBlock; blockNumber <= endBlock; blockNumber++) {
//         const block = await provider.getBlockWithTransactions(blockNumber);

//         for (const transaction of block.transactions) {
//             addresses.add(transaction.from);  // Add sender address
//             if (transaction.to) {
//                 addresses.add(transaction.to);  // Add receiver address, if it exists (not a contract creation)
//             }
//         }
//     }

//     return addresses;
// }

// async function main() {
//     const provider = new ethers.providers.JsonRpcProvider('http://localhost:8500/1');
//     const startBlock = 1; // Define the starting block number
//     const endBlock = 3; // Define the ending block number

//     const addresses = await fetchAddresses(provider, startBlock, endBlock);
//     console.log("Addresses found in the block range:");
//     addresses.forEach(address => console.log(address));
//     console.log(`Total unique addresses: ${addresses.size}`);
// }

// main().catch(console.error);



const { ethers } = require('ethers');

async function fetchTransactionDetails(provider, startBlock, endBlock) {
    let transactions = [];

    for (let blockNumber = startBlock; blockNumber <= endBlock; blockNumber++) {
        const block = await provider.getBlockWithTransactions(blockNumber);
        console.log(`Block #${blockNumber} has ${block.transactions.length} transactions`);

        for (const transaction of block.transactions) {
            transactions.push({
                from: transaction.from,
                to: transaction.to,
                value: ethers.utils.formatEther(transaction.value),
                data: transaction.data,
                gasPrice: transaction.gasPrice.toString(),
                nonce: transaction.nonce,
                hash: transaction.hash,
                gasLimit: transaction.gasLimit.toString()
            });
        }
    }

    return transactions;
}

async function main() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8500/1');
    const latestBlock = await provider.getBlockNumber();
    console.log(`Latest block number: ${latestBlock}`);

    // Define the range of blocks you want to analyze
    const startBlock = 1;
    const endBlock = latestBlock;  // You can adjust this to latestBlock for all blocks up to the most recent

    const transactions = await fetchTransactionDetails(provider, startBlock, endBlock);
    console.log("Transaction details in the block range:");
    transactions.forEach(tx => {
        console.log(`Transaction Hash: ${tx.hash}`);
        console.log(`  From: ${tx.from}`);
        console.log(`  To: ${tx.to}`);
        console.log(`  Value: ${tx.value} ETH`);
        console.log(`  Data: ${tx.data}`);
        console.log(`  Gas Price: ${tx.gasPrice}`);
        console.log(`  Nonce: ${tx.nonce}`);
        console.log(`  Gas Limit: ${tx.gasLimit}`);
        console.log('-----------------------------------');
    });
    console.log(`Total transactions processed: ${transactions.length}`);
}

main().catch(console.error);

