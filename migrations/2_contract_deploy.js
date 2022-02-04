const CryptoBatz = artifacts.require("CryptoBatz");

module.exports = function (deployer) {
  deployer.deploy(CryptoBatz, "https//:meutoken.com");
};
