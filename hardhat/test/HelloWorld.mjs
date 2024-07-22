import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { deployTokenFixture } from "./utils.mjs";

const CONTRACT_NAME = "HelloWorld";

const init = () => deployTokenFixture(CONTRACT_NAME, "hello world");

describe("Hello world contract", function () {
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { contractIns, owner } = await loadFixture(init);
      expect(await contractIns.getOwner()).to.equal(owner.address);
      expect(await contractIns.get()).to.equal("hello world");
    });
  });

  describe("update message", function () {
    it("Should update the message", async function () {
      const { contractIns, owner } = await loadFixture(init);
      expect(await contractIns.get()).to.equal("hello world");
      await contractIns.update("hello world2");
      expect(await contractIns.get()).to.equal("hello world2");
    });
  });
});
