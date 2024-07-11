require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-toolbox");


const PRIVATE_KEY = "0xd157979dd88ccf836c593c85105e17b8406a48537f09e529fec4b719b4bf83a8";
const words = 'member learn copper have vocal deal town square whisper click decade bargain';
const address = '0x01eF9CCF31a205A8a055957103A779B52CaB6200';
const Path = `m/44'/60'/0'/0/0`;



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/9a55fe1c381b48b38ab25684918f6e90",
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },

    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
    },
  }
};
