export async function deployTokenFixture(contractName, ...args) {
  const contract = await ethers.getContractFactory(contractName);
  const [owner, addr1, addr2] = await ethers.getSigners();
  const contractIns = await contract.deploy(...args);
  await contractIns.deployed();
  console.log(`Deployed ${contractName} to ${contractIns.address}`);
  return { contract, contractIns, owner, addr1, addr2 };
}
