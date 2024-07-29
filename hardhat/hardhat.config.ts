import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/faucet";
import { config as envConfig } from "dotenv";
import "@nomiclabs/hardhat-ethers";

envConfig();

const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.24",
  defaultNetwork: "localhost",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",
        "0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1",
      ],
      chainId: 31337,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: true,
    },
  },
} as HardhatUserConfig;
