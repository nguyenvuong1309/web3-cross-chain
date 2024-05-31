const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

const json = fs.readFileSync(
  path.resolve(
    __dirname,
    "../../artifacts/contracts/sendMessageCrossChain/Message.sol/SenderReceiver.json"
  ),
  "utf8"
);

const artifact = JSON.parse(json);

const abi = artifact.abi;
const bytecode = artifact.bytecode;

export async function deploy_2_moonbeam() {
  console.log("🚀 ~ deploy ~ deploy: sendMessage");
  // Set up the provider to connect to your local blockchain
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_MOONBEAM_RPC
  );

  // Your account to deploy the contract
  const deployerPrivateKey = process.env.NEXT_PUBLIC_EVM_MOONBEAM_PRIVATE_KEY;
  const deployerWallet = new ethers.Wallet(deployerPrivateKey, provider);

  // Load and deploy the contract
  const SendTransaction = new ethers.ContractFactory(
    abi,
    bytecode,
    deployerWallet
  );
  const sendTransaction = await SendTransaction.deploy(
    process.env.NEXT_PUBLIC_MOONBEAM_GATEWAY_CONTRACT_ADDRESS,
    process.env.NEXT_PUBLIC_MOONBEAM_GAS_SERVICE_CONTRACT_ADDRESS
  );
  await sendTransaction.deployed();

  console.log(
    "Send message crosschain deployed to moonbeam:",
    sendTransaction.address
  );
  saveAddressToEnv(sendTransaction.address);
  return sendTransaction;
}

function saveAddressToEnv(address: any) {
  const envPath = path.resolve(__dirname, "../../.env");
  const key = "NEXT_PUBLIC_SEND_MESSAGE_CROSS_CHAIN_CONTRACT_ADDRESS_MOONBEAM";
  let updated = false;

  // Read the current .env file content
  let envContent = fs.readFileSync(envPath, "utf8");

  // Split the content into lines
  let lines = envContent.split("\n");

  // Map over the lines and update the key if it exists
  lines = lines.map((line: any) => {
    if (line.startsWith(key + "=")) {
      updated = true; // Flag that we've updated the line
      return `${key}=${address}`; // Return the updated line
    }
    return line; // Return the line unchanged
  });

  // If the key was not found and updated, add it to the end
  if (!updated) {
    lines.push(`${key}=${address}`);
  }

  // Join the lines back into a single string and write back to the file
  fs.writeFileSync(envPath, lines.join("\n"), "utf8");
  console.log(
    `Send message crosschain address saved to moonbeam .env file: ${address}`
  );
}
