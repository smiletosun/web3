import hre, { artifacts } from "hardhat";
import path from "path";

const CONTRACT_NAMES = [
  ["HelloWorld", "hello-world"],
  ["OnlyOwner"],
  ["MyCoin", 1000000],
  ["MyNFT"],
  ["Ballout", ["alice", "bob", "charlie"]],
] as const;

async function deploySol(name: string, opt: any) {
  const contract = await hre.ethers.getContractFactory(name);
  const ins = await contract.deploy(opt ?? null);
  await ins.deployed();
  console.log(`contract ${name} deployed at address: ${ins.address}`);
  return ins;
}

async function main() {
  // This is just a convenience check
  if (hre.network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await hre.ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  for (const [name, opt] of CONTRACT_NAMES) {
    const ins = await deploySol(name, opt);
    await saveFrontendFiles(name, ins);
  }
}

function saveFrontendFiles(contractName: string, token: any) {
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

  let obj = { [contractName]: token.address };

  if (fs.existsSync(path.join(contractsDir, `contract-address.json`))) {
    const contractAddressJson = fs.readFileSync(
      path.join(contractsDir, `contract-address.json`)
    );
    if (contractAddressJson) {
      obj = {
        ...JSON.parse(contractAddressJson),
        ...obj,
      };
    }
  }

  fs.writeFileSync(
    path.join(contractsDir, `contract-address.json`),
    JSON.stringify(obj, undefined, 2)
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
