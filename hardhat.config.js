require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

//  * @type import('hardhat/config').HardhatUserConfig
//  */

// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
// const KOVAN_RPC_URL =
//     process.env.KOVAN_RPC_URL ||
//     "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
// const RINKEBY_RPC_URL =
//     process.env.RINKEBY_RPC_URL ||
//     "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
// const PRIVATE_KEY =
//     process.env.PRIVATE_KEY ||
//     "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

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
        // kovan: {
        //     url: KOVAN_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 42,
        //     blockConfirmations: 6,
        //     gas: 6000000,
        // },
        // rinkeby: {
        //     url: RINKEBY_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 4,
        //     blockConfirmations: 6,
        // },
    },
    // etherscan: {
    //     apiKey: ETHERSCAN_API_KEY,
    // },
    // gasReporter: {
    //     enabled: true,
    //     currency: "USD",
    //     outputFile: "gas-report.txt",
    //     noColors: true,
    //     // coinmarketcap: COINMARKETCAP_API_KEY,
    // },
    namedAccounts: {
        deployer: {
          default: 0,
        },
        user: {
          default: 1
        }
    },
}