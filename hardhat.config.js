require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = "Ejr074I0mLTl1wvMiGapxwJ9t9lLXsIS"
const SEPOLIA_PRIVATE_KEY = "5196e3f59ac0f7d7ffa9655a78c369fdea2b14e55a21744a3654fccf450dcf91";


module.exports = {
  solidity: "0.8.17",

  networks:{
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  }

};
