import { expect } from "chai";
import { deployTokenFixture } from "./utils";
import { describe } from "mocha";

const CONTRACT_NAME = "MyNFT";

describe("MyNFT contract", function () {
  const init = () => deployTokenFixture(CONTRACT_NAME);

  it("部署", async () => {
    const { contractIns, owner } = await init();
    expect(await contractIns.balanceOf(owner.address)).to.equal(0);
  });

  it("mint 是否成功", async () => {
    const { contractIns, owner } = await init();
    expect(await contractIns.balanceOf(owner.address)).to.equal(0);
    const minter = contractIns.connect(owner);
    await minter.mint();
    expect(await contractIns.balanceOf(owner.address)).to.equal(1);
    await minter.mint();
    expect(await contractIns.balanceOf(owner.address)).to.equal(2);
    await minter.mint();
    expect(await contractIns.balanceOf(owner.address)).to.equal(3);
  });
});
