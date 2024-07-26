import hre from "hardhat";
const { ethers } = hre;

export async function deployTokenFixture(contractName: string, ...args: any[]) {
  const contract = await ethers.getContractFactory(contractName);
  const [owner, addr1, addr2] = await ethers.getSigners();
  const contractIns = await contract.deploy(...args);
  await contractIns.deployed();
  console.log(`Deployed ${contractName} to ${contractIns.address}`);

  return {
    contractIns,
    owner,
    otherAddress: [addr1, addr2],
  } as const;
}
