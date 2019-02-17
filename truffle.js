const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();


// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777'
    },
    rinkeby:{
      provider: () => new HDWalletProvider(process.env.MNEMONIC,"https://rinkeby.infura.io/v3/"+process.env.INFURA_API_KEY),
      network_id: 4
    },
    kovan:{
      provider: () => new HDWalletProvider(process.env.MNEMONIC,"https://kovan.infura.io/v3/"+process.env.INFURA_API_KEY),
      network_id: 42
    }
  }
}
