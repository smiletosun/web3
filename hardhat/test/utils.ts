import hre from "hardhat";
const { ethers } = hre;

export async function deployTokenFixture(contractName: string, ...args: any[]) {
  console.log(`start Deployed ${contractName}`, ...args);
  const contract = await ethers.getContractFactory(contractName);
  const [owner, addr1, addr2] = await ethers.getSigners();
  const contractIns = await contract.deploy(...args);
  await contractIns.deployed();
  console.log(`Deployed ${contractName} to ${contractIns.address}`);

  const createContract = async (singer: any) => {
    const { abi } = await hre.artifacts.readArtifact(contractName);
    console.log("【address】-15-「utils」", contractIns.address);
    return new ethers.Contract(contractIns.address, abi, singer);
  };

  return {
    owner,
    contractIns,
    otherAddress: [addr1, addr2],
    createContract,
  } as const;
}
