
const { Wallet,ethers } = require('ethers');
const { createAndExport, EvmRelayer, RelayerType } = require('@axelar-network/axelar-local-dev');
const path = require('path');

const evmRelayer = new EvmRelayer();

const relayers = { evm: evmRelayer };

function getWallet() {
    const privateKey = "0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32"
    return new Wallet(privateKey) 
}

async function deployAndFundUsdc(chain, toFund) {
    await chain.deployToken('Axelar Wrapped aUSDC', 'aUSDC', 6, 10000);

    for (const address of toFund) {
        await chain.giveToken(address, 'aUSDC', 1);
    }
}

async function start(fundAddresses = [], chains = [], options = {}) {
    await createAndExport({
        chainOutputPath:  path.resolve(__dirname, '..', 'chain-config', 'local-evm.json'),
        accountsToFund: fundAddresses,
        callback: (chain, _info) => deployAndFundUsdc(chain, fundAddresses),
        chains: chains.length !== 0 ? chains : null,
        relayers,
        relayInterval: options.relayInterval,
    });
}


// Get the wallet from the environment variables.
const wallet = getWallet();

// Fund the given addresses with aUSDC.
const fundAddresses = [wallet.address];

// Add additional addresses to fund here.
for (let j = 2; j < process.argv.length; j++) {
    fundAddresses.push(process.argv[j]);
}

// Insert the chains you want to start here. Available values are:
// 'Avalanche', 'Moonbeam', 'Polygon', 'Fantom', 'Ethereum'
const chains = ['Avalanche','Ethereum'];
start(fundAddresses, chains);
