var WRC = artifacts.require("./WRC.sol");

module.exports = function(deployer) {
  deployer.deploy(WRC);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};
