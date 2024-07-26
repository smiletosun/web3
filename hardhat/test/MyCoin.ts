import { expect } from "chai";
import { deployTokenFixture } from "./utils";
import { describe } from "mocha";

const CONTRACT_NAME = "MyCoin";

describe("MyCoin contract", function () {
  const init = () => deployTokenFixture(CONTRACT_NAME, 1_000_000);

  describe("deploy", function () {
    it("Should set the right initial supply", async function () {
      const { contractIns, owner } = await init();
      expect(await contractIns.totalSupply()).to.equal(1_000_000);
    });
  });

  it("Verify transaction", async () => {
    const {
      contractIns,
      owner,
      otherAddress: [account1],
    } = await init();

    const initialOwnerBalance = await contractIns.balanceOf(owner.address);
    expect(await contractIns.balanceOf(account1.address)).to.equal(0);

    const amount = 99;
    await contractIns.transfer(account1.address, amount);
    expect(await contractIns.balanceOf(account1.address)).to.equal(amount);
    expect(await contractIns.balanceOf(owner.address)).to.equal(
      initialOwnerBalance - amount
    );
  });
});
