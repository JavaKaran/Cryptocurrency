var kst = artifacts.require("./kst.sol");
var kstSale = artifacts.require("./kstSale.sol");
module.exports = function(deployer) {
  deployer.deploy(kst, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(kstSale, kst.address, tokenPrice);
    }).then(function() {
      var tokensAvailable = 750000;
      kst.deployed().then(function(instance) { instance.transfer(kstSale.address, tokensAvailable, { from: "0x34892DC10c9dF4Efa352E2d4Fde9fA93548bC9Ea" }); })
  });
};