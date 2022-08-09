const {networkConfig} = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const ethUsedPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    // when going for localhost or hardhat network we want to usev a mock
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [],
        log: true
    })
}