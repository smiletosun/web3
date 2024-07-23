import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/faucet";
import { config as envConfig } from "dotenv";
import "@nomiclabs/hardhat-ethers";

envConfig();

const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.20",
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
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
      chainId: 31337,
    },
  },
} as HardhatUserConfig;
