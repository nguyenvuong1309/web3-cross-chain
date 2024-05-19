const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8500/3"
  );

  // Use a pre-funded account from your local blockchain
  const senderPrivateKey =
    "0x4ffdc0494d84e044a8065e7aeb0476d7cde6aef2bcff6bbf2d0824877a7cefd4";
  const senderWallet = new ethers.Wallet(senderPrivateKey, provider);

  // The recipient account you want to fund
  const recipientAddress = "0x72fc2C9811abc21A534550f31C5bA62dcc56Ec53";

  // Amount to send (in ethers)
  const amountInEther = "10.0";

  const tx = {
    to: recipientAddress,
    value: ethers.utils.parseEther(amountInEther),
  };

  const txResponse = await senderWallet.sendTransaction(tx);
  await txResponse.wait();

  console.log(`Sent ${amountInEther} ether to ${recipientAddress}`);
}

main().catch(console.error);
