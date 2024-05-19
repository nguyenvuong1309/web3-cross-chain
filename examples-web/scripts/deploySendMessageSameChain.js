const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../artifacts/contracts/sendMessageSameChain.sol/SingleChainMessage.json"
  ),
  "utf8"
);
const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

async function main() {
  // Set up the provider to connect to your local blockchain
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8500/3"
  );

  // Your account to deploy the contract
  const deployerPrivateKey =
    "0x6ba91baa35401e9b5a28e9453d7d287791d658281a0f8c463934d2d4ed36bc32";
  const deployerWallet = new ethers.Wallet(deployerPrivateKey, provider);

  // Funding account with sufficient balance
  const fundingAccountPrivateKey =
    "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4"; // Replace with your funding account private key
  const fundingWallet = new ethers.Wallet(fundingAccountPrivateKey, provider);

  // Check deployer account balance
  const minBalance = ethers.utils.parseEther("1.0"); // Minimum balance required for deployment
  let balance = await deployerWallet.getBalance();

  if (balance.lt(minBalance)) {
    console.log(
      `Insufficient balance. Current balance: ${ethers.utils.formatEther(
        balance
      )} ETH. Funding account...`
    );
    const tx = {
      to: deployerWallet.address,
      value: minBalance.sub(balance), // Transfer the difference to meet the minimum balance
    };

    const txResponse = await fundingWallet.sendTransaction(tx);
    await txResponse.wait();

    balance = await deployerWallet.getBalance();
    console.log(`New balance: ${ethers.utils.formatEther(balance)} ETH`);
  }

  // Load and deploy the contract
  const SendTransaction = new ethers.ContractFactory(
    abi,
    bytecode,
    deployerWallet
  );
  const sendTransaction = await SendTransaction.deploy();
  await sendTransaction.deployed();

  console.log("SendTransaction deployed to:", sendTransaction.address);
  saveAddressToEnv(sendTransaction.address);
  return sendTransaction;
}

function saveAddressToEnv(address) {
  const envPath = path.resolve(__dirname, "../.env");
  const envFileContent = `SEND_MESSAGE_SAME_CHAIN_CONTRACT_ADDRESS=${address}\n`;

  fs.writeFileSync(envPath, envFileContent, { flag: "a" }); // 'a' flag to append to the file
  console.log(`Contract address saved to .env file: ${address}`);
}

main().catch(console.error);
