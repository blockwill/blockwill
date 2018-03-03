var Will = artifacts.require("./Will.sol");

module.exports = function(deployer) {
  deployer.deploy(Will, ["0x5a5ab8550f1910cc4f787920878ed3b28ba87c0b", "0xf28a39e7ba3e37d9814ba42edc0867c1a7d14332"], [70, 30], ["0xc377a0e129ce39ec711e04637202ec9eb217877f", "0xa037336eecb177bca6a77e9a74c99882f694e1a3"], 2);
};
