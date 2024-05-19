require('hardhat-gas-reporter');
require('solidity-coverage');
require("@nomicfoundation/hardhat-chai-matchers")


const PRIVATE_KEY = '6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        version: '0.8.9',
        settings: {
            evmVersion: process.env.EVM_VERSION || 'london',
            optimizer: {
                enabled: true,
                runs: 1000,
                details: {
                    peephole: true,
                    inliner: true,
                    jumpdestRemover: true,
                    orderLiterals: true,
                    deduplicate: true,
                    cse: true,
                    constantOptimizer: true,
                    yul: true,
                    yulDetails: {
                        stackAllocation: true,
                    },
                },
            },
        },
    },
    paths: {
        sources: './examples',
        artifacts: './artifacts',
    },
    networks: {
        Ethereum: {
            url: `http://localhost:8500/3`,
            accounts: [`0x` + PRIVATE_KEY],
            gas: 2100000,
        },
    },
};
