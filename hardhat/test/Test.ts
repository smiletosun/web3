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
});
