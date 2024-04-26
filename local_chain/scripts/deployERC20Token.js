async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const MyToken = await ethers.getContractFactory("ERC20Token");
    const myToken = await MyToken.deploy();
  
    console.log("Waiting for MyToken deployment...");
    await myToken.deployed();
    console.log("MyToken deployed to:", myToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
