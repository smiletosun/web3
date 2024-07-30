import { expect } from "chai";
import { deployTokenFixture } from "./utils";
import { describe } from "mocha";

const CONTRACT_NAME = "Test";

describe("Test contract", function () {
  it("test require", async () => {
    const init = () => deployTokenFixture(CONTRACT_NAME);
    const { contractIns } = await init();
    const response = await contractIns.testRequire(`90071992547409911`);
    expect(response).to.equal(`90071992547409911`);
    await contractIns.testRequire(1).catch((error: any) => {
      expect(error.reason).to.equal("Input must be greater than 10");
    });
  });

  it("test revert", async () => {
    const init = () => deployTokenFixture(CONTRACT_NAME);
    const { contractIns } = await init();
    const response = await contractIns.testRevert(`90071992547409911`);
    await contractIns.testRevert(1).catch((error: any) => {
      expect(error.reason).to.equal("Input must be greater than 10");
    });
  });

  it("test assert", async () => {
    const init = () => deployTokenFixture(CONTRACT_NAME);
    const { contractIns } = await init();

    await contractIns.testAssert().catch((error: any) => {
      expect(error.errorName).to.equal("Panic");
    });
  });

  it("test function modifier", async () => {
    const init = () => deployTokenFixture(CONTRACT_NAME);
    const { createContract, otherAddress } = await init();

    const newContract = await createContract(otherAddress[1]);

    await newContract
      .testModifier(otherAddress[1].address)
      .catch((error: any) => {
        // console.log("【error】-41-「Test」", error);
      });
  });

  it("test sendEnth", async () => {
    const init = () => deployTokenFixture(CONTRACT_NAME);
    const { contractIns, createContract, otherAddress } = await init();
    const newContract = await createContract(otherAddress[1]);
    const txResponse = await newContract.sendEnth(contractIns.address);
    const receipt = await txResponse.wait();
    console.log(await receipt.events[0].args);
    expect(receipt.status).to.equal(1);
  });
});
