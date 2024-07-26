import { expect } from "chai";
import { deployTokenFixture } from "./utils";
import { describe } from "mocha";

const CONTRACT_NAME = "HelloWorld";

describe("Hello world contract", function () {
  const init = () => deployTokenFixture(CONTRACT_NAME, "hello world");

  describe("deploy", function () {
    it("Should set the right owner", async function () {
      const { contractIns, owner } = await init();
      expect(await contractIns.getOwner()).to.equal(owner.address);
      expect(await contractIns.get()).to.equal("hello world");
    });
  });

  describe("update message", function () {
    it("Should update the message", async function () {
      const { contractIns, owner } = await init();
      expect(await contractIns.get()).to.equal("hello world");
      await contractIns.update("hello world2");
      expect(await contractIns.get()).to.equal("hello world2");
    });
  });
});
