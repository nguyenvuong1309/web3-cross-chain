import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function truncateString(str : string) {
    if (str?.length > 15) {
        // Take the first 7 characters, add ellipsis, and then add the last 4 characters
        return `${str.slice(0, 7)}...${str.slice(-7)}`;
    }
    return str; // Return the original string if it's not long enough
}

export const BlockchainExplorer = ({ providerUrl}) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactionDetails = async () => {
            const provider = new ethers.providers.JsonRpcProvider(providerUrl);
            const latestBlock = await provider.getBlockNumber();
            let fetchedTransactions = [];

            for (let blockNumber = 1; blockNumber <= latestBlock; blockNumber++) {
                const block = await provider.getBlockWithTransactions(blockNumber);
                for (const transaction of block.transactions) {
                    fetchedTransactions.push({
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

            setTransactions(fetchedTransactions);
            setLoading(false);
        };

        fetchTransactionDetails();
    }, [providerUrl]);

    return (
        <div  style={{width: '100%', backgroundColor: 'GrayText'}}>
            {loading ? (
                <p>Loading transactions...</p>
            ) : (
                <div>
                    <h2>Transaction Details</h2>
                     <style>
        {`
            table {
                width: 100%;
                border-collapse: collapse; /* Ensures borders between rows are not doubled */
            }
            th, td {
                border: 1px solid #ddd; /* Light grey border for a subtle look */
                padding: 8px; /* Adds space around text in each cell */
                text-align: left; /* Aligns text to the left */
            }
            th {
                background-color: #785972; /* Light grey background for headers */
            }
            tr:nth-child(even) {
                background-color: #785972; /* Zebra striping for rows */
            }
            tr:hover {
                background-color: #788d72; /* Light grey background on row hover for better interactivity */
            }
        `}
    </style>
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Transaction Hash</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value (ETH)</th>
                                <th>Data</th>
                                <th>Gas Price</th>
                                <th>Nonce</th>
                                <th>Gas Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{truncateString(tx.hash)}</td>
                                    <td>{truncateString(tx.from)}</td>
                                    <td>{tx.to ? truncateString(tx.to) : 'Contract Creation'}</td>
                                    <td>{truncateString(tx.value)} ETH</td>
                                    <td>{truncateString(tx.data)}</td>
                                    <td>{truncateString(tx.gasPrice)}</td>
                                    <td>{truncateString(tx.nonce)}</td>
                                    <td>{truncateString(tx.gasLimit)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BlockchainExplorer;
