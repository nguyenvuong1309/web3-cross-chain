require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const PRIVATE_KEY  = "6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ethereum: {
        url: `http://localhost:8500/1`,
        accounts: [`0x` + PRIVATE_KEY],
        gas: 2100000,
      },
  }
};