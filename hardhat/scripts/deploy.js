// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function deploySol(name, opt) {
  const contract = await ethers.getContractFactory(name);
  const ins = await contract.deploy(opt ?? null);
  await ins.deployed();
  console.log(`contract ${name} deployed at address: ${ins.address}`);
  return ins;
}

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  const tokenNames = [["HelloWorld", "hello-world"], ["OnlyOwner"]];

  for (const [name, opt] of tokenNames) {
    const ins = await deploySol(name, opt);
    await saveFrontendFiles(name, ins);
  }
}

function saveFrontendFiles(contractName, token) {
  const fs = require("fs");
  const contractsDir = path.join(
    __dirname,
    "..",
    "frontend",
    "src",
    "contracts"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, `contract-${contractName}-address.json`),
    JSON.stringify({ [contractName]: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync(contractName);

  fs.writeFileSync(
    path.join(contractsDir, `${contractName}.json`),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
