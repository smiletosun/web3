import pkg from 'hardhat';

const { ethers } = pkg;

async function main() {
  const counter = await ethers.getContractFactory('Token');
  await counter.deploy(20000);

  console.log('Counter deployed to:', counter.address);
}

async function payable() {
  const counter = await ethers.getContractFactory('testPayable');
  await counter.deploy();

  console.log('Counter deployed to:', counter.address);
}


main()
payable()
