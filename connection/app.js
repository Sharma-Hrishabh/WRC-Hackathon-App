const contract = require('truffle-contract');

const WRC_artifact = require('../build/contracts/WRC.json');
const WRCToken_artifact = require('../build/contracts/WRCToken.json');
const WRCTokenSale_artifact = require('../build/contracts/WRCTokenSale.json');
var WRC = contract(WRC_artifact);
var WRCToken = contract(WRCToken_artifact);
var WRCTokenSale = contract(WRCTokenSale_artifact);
// const hello= () =>{
//   var val;
//   if(typeof web3 !== undefined) {
//       web3Provider = web3.currentProvider;
//       web3.eth.defaultAccount = web3.eth.accounts[0];
//       console.log("hii");
//   }
//   else {
//       alert("MetaMask not found! Working on localhost:7545.");
//       web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
//       console.log("Hii");
//   }
//
//   web3 = new Web3(web3Provider);
//   console.log(web3.eth.defaultAccount);
//   // Bootstrap the MetaCoin abstraction for Use.
//   WRCTokenSale.setProvider(web3.currentProvider);
//   var meta;
//   WRCTokenSale.deployed().then(function(instance) {
//     meta = instance;
//     var price = meta.tokenPrice()
//     // console.log(price);
//     // web3.utils.fromWei(price,'ether');
//     return price;
//   }).then(function(value) {
//       //callback(value.valueOf());
//       // console.log('sdc')
//       console.log('sdasxsa'+parseInt(value));
//       val = parseInt(value);
//       console.log('val',val);
//       // alert(parseInt(value)/1000000000000000000)
//       return parseInt(value);
//   }).catch(function(e) {
//       console.log(e);
//   });
//   console.log('val2'+val);
//   return val;
// }
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

  defineWaterSpecsIndus: function(pH,solids,hardness,oil,BOD,minPercentageIndus) {
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
      return meta.defineWaterSpecsIndus(pH,solids,hardness,oil,BOD,minPercentageIndus, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        console.log(e);
    });
  },

  defineWaterSpecsLocal: function(pH,solids,hardness,oil,BOD,minPercentageLocal) {
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
      return meta.defineWaterSpecsLocal(pH,solids,hardness,oil,BOD,minPercentageLocal, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        // console.log(e);
    });
  },


  // minPercentage: function(minPercentage) {
  //   if(typeof web3 !== undefined) {
  //       web3Provider = web3.currentProvider;
  //       web3.eth.defaultAccount = web3.eth.accounts[0];
  //       console.log("hii");
  //   }
  //   else {
  //       alert("MetaMask not found! Working on localhost:7545.");
  //       web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
  //       console.log("Hii");
  //   }
  //
  //   web3 = new Web3(web3Provider);
  //   console.log(web3.eth.defaultAccount);
  //   // Bootstrap the MetaCoin abstraction for Use.
  //   WRC.setProvider(web3.currentProvider);
  //   var meta;
  //   WRC.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.minPercentage();
  //   }).then(function(value) {
  //       //callback(value.valueOf());
  //       console.log(parseInt(value));
  //       alert(parseInt(value))
  //       return parseInt(value)
  //   }).catch(function(e) {
  //       console.log(e);
  //   });
  // },

  tokenPrice: function() {
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
    WRCTokenSale.setProvider(web3.currentProvider);
    var meta;
    WRCTokenSale.deployed().then(function(instance) {
      meta = instance;
      var price = meta.tokenPrice()
      // console.log(price);
      // web3.utils.fromWei(price,'ether');
      return price;
    }).then(function(value) {
        //callback(value.valueOf());
        console.log('sdc')
        console.log(parseInt(value));
        document.cookie = "key:" + parseInt(value);

        // alert(parseInt(value)/1000000000000000000)
        return parseInt(value);
    }).catch(function(e) {
        console.log(e);
    });
  },







}
