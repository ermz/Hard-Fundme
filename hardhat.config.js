require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

//  * @type import('hardhat/config').HardhatUserConfig
//  */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    solidity: {
      compilers: [
        {version: "0.8.9"},
        {version: "0.6.6"}
      ]
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        rinkeby: {
          url: RINKEBY_RPC_URL,
          accounts: [PRIVATE_KEY],
          chainId: 4,
          blockConfirmations: 6
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
    namedAccounts: {
        deployer: {
          default: 0,
        },
        user: {
          default: 1
        }
    },
}