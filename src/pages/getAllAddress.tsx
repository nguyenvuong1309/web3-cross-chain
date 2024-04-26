

import { ethers } from 'ethers';
import { useEffect, useState } from 'react';


const provider = new ethers.providers.JsonRpcProvider('http://localhost:8500/1');




const AllAddress = () =>{
    const [data,setData] = useState(null);

    const getAccounts = async () => {
        try {
            // Fetch all accounts from the node
            const accounts = await provider.listAccounts();
            //console.log("Wallet addresses on the local chain:", accounts);
            let temp = []
    
            // Check each account to determine if it's a contract, and if not, get its balance
            for (const account of accounts) {
                const code = await provider.getCode(account);
                if (code === '0x') { // No code, so it's a regular wallet address
                    const balance = await provider.getBalance(account);
                    //console.log(`Address: ${account}, Balance: ${ethers.utils.formatEther(balance)} ETH`);
                    temp.push({adress : account,balance : ethers.utils.formatEther(balance)})
                    
                } else { // Code exists, so it's a contract address
                    temp.push({adress : account,balance : "smart contract"})
                    console.log(`Address: ${account} is a smart contract.`);
                }
            }
            setData(temp)
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    useEffect(() => {
        getAccounts()
        console.log("🚀 ~ useEffect ~ useEffect:", data)
    },[])
    return(
        <div>
            <div>List address</div>
            <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Address</th>
                                <th>Balances</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => 
                                (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.adress}</td>
                                    <td>{item.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
    )
}

export default AllAddress;