var kst = artifacts.require("./kst.sol");
var kstSale = artifacts.require("./kstSale.sol");

module.exports = function(deployer) {
  deployer.deploy(kst, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(kstSale, kst.address, tokenPrice);
  });
};