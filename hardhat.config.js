require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    local: {
      url: process.env.RPC_HTTP_URL,
      chainId: Number(process.env.CHAIN_ID)
    },
  },
};
