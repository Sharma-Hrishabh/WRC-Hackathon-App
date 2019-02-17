const contract = require('truffle-contract');

const WRC_artifact = require('../build/contracts/WRC.json');
var WRC = contract(WRC_artifact);

module.exports = {

  start: function() {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);
    // Get the initial account balance so it can be displayed.

    // var self = this;
    // web3Provider = null;
    // // Bootstrap the MetaCoin abstraction for Use.
    // dEmergency.setProvider(self.web3.currentProvider);
    //
    // if(typeof web3 !== undefined) {
    //     web3Provider = web3.currentProvider;
    //     web3.eth.defaultAccount = web3.eth.accounts[0];
    // }
    // else {
    //     alert("MetaMask not found! Working on localhost:7545.");
    //     web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
    // }
    //
    // web3 = new Web3(web3Provider);
    // // Get the initial account balance so it can be displayed.
    // self.web3.eth.getAccounts(function(err, accs) {
    //   if (err != null) {
    //     alert("There was an error fetching your accounts.");
    //     return;
    //   }
    //
    //   if (accs.length == 0) {
    //     alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
    //     return;
    //   }
    //   self.accounts = accs;
    //   self.account = self.accounts[0];
    //
    //   return (self.accounts);
    // });
    return 1;
  },


  addIOTDevice: function(meterID,orgID,meterType,reportedAt) {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);
    // Bootstrap the MetaCoin abstraction for Use.
    WRC.setProvider(web3.currentProvider);
    var meta;
    WRC.deployed().then(function(instance) {
      meta = instance;
      return meta.addIOTDevice(meterID,orgID,meterType,reportedAt, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        console.log(e);
    });
  },

  changeWRCPercentage: function(minPercentage) {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);
    // Bootstrap the MetaCoin abstraction for Use.
    WRC.setProvider(web3.currentProvider);
    var meta;
    WRC.deployed().then(function(instance) {
      meta = instance;
      return meta.changeWRCPercentage(minPercentage, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        console.log(e);
    });
  },

  minPercentage: function(minPercentage) {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);
    // Bootstrap the MetaCoin abstraction for Use.
    WRC.setProvider(web3.currentProvider);
    var meta;
    WRC.deployed().then(function(instance) {
      meta = instance;
      return meta.minPercentage();
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(parseInt(value));
        alert(parseInt(value))
        return parseInt(value)
    }).catch(function(e) {
        console.log(e);
    });
  },

  
}
