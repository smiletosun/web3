import { expect } from "chai";
import { deployTokenFixture } from "./utils";
import { describe } from "mocha";
import { ethers } from "hardhat";

const CONTRACT_NAME = "Test";

describe("Test contract", function () {
  const init = () => deployTokenFixture(CONTRACT_NAME);
  const initHello = () => deployTokenFixture("HelloWorld", "hello world");
  it("test require", async () => {
    const { contractIns } = await init();
    const response = await contractIns.testRequire(`90071992547409911`);
    expect(response).to.equal(`90071992547409911`);
    await contractIns.testRequire(1).catch((error: any) => {
      expect(error.reason).to.equal("Input must be greater than 10");
    });
  });

  it("test revert", async () => {
    const { contractIns } = await init();
    const response = await contractIns.testRevert(`90071992547409911`);
    await contractIns.testRevert(1).catch((error: any) => {
      expect(error.reason).to.equal("Input must be greater than 10");
    });
  });

  it("test assert", async () => {
    const { contractIns } = await init();

    await contractIns.testAssert().catch((error: any) => {
      expect(error.errorName).to.equal("Panic");
    });
  });

  it("test function modifier", async () => {
    const { createContract, otherAddress } = await init();

    const newContract = await createContract(otherAddress[1]);

    await newContract
      .testModifier(otherAddress[1].address)
      .catch((error: any) => {});
  });

  it("test sendEnth", async () => {
    const { contractIns, createContract, otherAddress } = await init();
    const newContract = await createContract(otherAddress[1]);
    const txResponse = await newContract.sendEnth(contractIns.address);
    const receipt = await txResponse.wait();
    console.log(await receipt.events[0].args);
    expect(receipt.status).to.equal(1);
  });

  it("test Abi", async () => {
    const { contractIns } = await init();
    const { contractIns: helloContract } = await initHello();

    const result = await contractIns.enCode(10);
    expect(result).to.be.equal(
      `0x000000000000000000000000000000000000000000000000000000000000000a`
    );

    const val = Date.now().toString();
    const res = await contractIns.callTest(
      helloContract.address,
      "update(string)",
      val
    );
    await res.wait();
    expect(await helloContract.get()).to.be.equal(val);

    const res1 = await contractIns.delegateCallTest(
      helloContract.address,
      "update(string)",
      val
    );
    await res1.wait();
    expect(await contractIns.getMessage()).to.be.equal(val);
  });
});
