const Bank = artifacts.require('Bank');

module.exports = async function (deployer) {
    await deployer.deploy(Bank);
    const bankInstance = await Bank.deployed();
    console.log('Deployed Bank at ', bankInstance.address);
};
