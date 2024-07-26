import { expect } from "chai";
import { deployTokenFixture } from "./utils";
import { describe } from "mocha";
import hardhat from "hardhat";

const CONTRACT_NAME = "Ballout";

describe("Ballout contract", function () {
  // const init = () => deployTokenFixture(CONTRACT_NAME, names);

  describe("set vote", function () {
    it("Should set the right owner", async function () {
      const names = ["alice", "bob", "charlie", "dave", "eve"];

      const contract = await hardhat.ethers.getContractFactory(CONTRACT_NAME);
      const [owner, addr1, addr2] = await hardhat.ethers.getSigners();
      const contractIns = await contract.deploy(names);
      await contractIns.deployed();

      // const { contractIns, owner, otherAddress } = await init();
    });
  });
});
