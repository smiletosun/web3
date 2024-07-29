import { expect } from "chai";
import { deployTokenFixture } from "./utils";
import { describe } from "mocha";
import hardhat from "hardhat";

const CONTRACT_NAME = "Ballout";

describe("Ballout contract", function () {
  const names = ["alice", "bob", "charlie", "dave", "eve"];
  const init = () => deployTokenFixture(CONTRACT_NAME, names);

  describe("set vote", function () {
    it("can vote", async function () {
      hardhat.artifacts.readArtifact(CONTRACT_NAME);
      const { contractIns, otherAddress, createContract } = await init();

      for await (let item of otherAddress) {
        await contractIns.giveRightToVote(item.address);
        const ins = await createContract(item);
        const tx = await ins.vote(4);
        await tx.wait();
      }

      expect(await contractIns.winnerName()).to.equal(names[4]);
    });
  });
});
``;
