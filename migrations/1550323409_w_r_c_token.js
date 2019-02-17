var WRCToken = artifacts.require("./WRCToken.sol");
var WRCTokenSale = artifacts.require("./WRCTokenSale.sol");

module.exports = function(deployer) {
  // deployer.deploy(WRCToken,10000);
  deployer.deploy(WRCToken, 1000000).then(function() {
      // Token price is 0.001 Ether
      var tokenPrice = 1000000000000000;
      return deployer.deploy(WRCTokenSale, WRCToken.address, tokenPrice);
    });
};
