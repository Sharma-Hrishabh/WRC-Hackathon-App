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
        // console.log(e);
    });
  },

  defineWaterSpecsIndus: function(pH,solids,hardness,oil,BOD,minPercentageIndus) {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        // console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        // console.log("Hii");
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
        // console.log(e);
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
    // Bootstrap the MetaCoin abstraction for Use.
    WRCTokenSale.setProvider(web3.currentProvider);
    var meta;
    WRCTokenSale.deployed().then(function(instance) {
      meta = instance;
      var price = meta.tokenPrice()
      // console.log("1",price);

      return price;
    }).then(function(value) {
      // var x = web3.utils.fromWei(value.toString(),'ether');
        // console.log("2",x)
            var x= parseInt(value)/1000000000000000000;
            document.querySelector('h3').innerHTML='<h3>1 WRC = '+x+' ETH</h3>';
        // document.cookie = "key:" + parseInt(value);

        // alert(parseInt(value)/1000000000000000000)
        return parseInt(value);
    }).catch(function(e) {
        // console.log(e);
    });
  },

  // getauthorisedIOTs: function() {
  //   if(typeof web3 !== undefined) {
  //       web3Provider = web3.currentProvider;
  //       web3.eth.defaultAccount = web3.eth.accounts[0];
  //   }
  //   else {
  //       alert("MetaMask not found! Working on localhost:7545.");
  //       web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
  //   }
  //   web3 = new Web3(web3Provider);
  //   var meta;
  //   WRC.deployed().then(function(instance) {
  //     meta = instance;
  //     console.log('hello');
  //     var IOTs =  meta.getauthorisedIOTs()
  //     console.log(IOTs);
  //     return IOTs;
  //   }).then(function(value) {
  //     console.log(value);
  //       return value;
  //   }).catch(function(e) {
  //       // console.log(e);
  //   });
  // },
  //

  transferToSale: function(saleaddress,numberOfTokens) {
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
    WRCToken.setProvider(web3.currentProvider);
    var meta;
    WRCToken.deployed().then(function(instance) {
      meta = instance;
      console.log(saleaddress,'asc',numberOfTokens)
      return meta.transferADMIN(saleaddress,numberOfTokens, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        // console.log(e);
    });
  },

  transferToIndustry: function(saleaddress,numberOfTokens) {
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
    WRCToken.setProvider(web3.currentProvider);
    var meta;
    WRCToken.deployed().then(function(instance) {
      meta = instance;
      console.log(saleaddress,'csa',numberOfTokens)
      return meta.transfers(saleaddress,numberOfTokens, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        // console.log(e);
    });
  },
  tokensInSale: function() {
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
    // Bootstrap the MetaCoin abstraction for Use.
    var saleInstance;
    WRCTokenSale.setProvider(web3.currentProvider);
    var meta;
    WRCTokenSale.deployed().then(function(instance) {
      meta = instance;
      var price = meta.address
      // console.log("1",price);
      return price;
    }).then(function(value) {
        saleInstance = value;
        return value;
    })
    console.log(saleInstance);

    WRCToken.setProvider(web3.currentProvider);
    var meta;
    return WRCToken.deployed().then(function(instance) {
      meta = instance;
      var price = meta.returnBalance(saleInstance)
      // console.log("1",price);

      return price;
    }).then(function(value) {
            var x= parseInt(value);
            console.log(x);
            // document.querySelector('h3').innerHTML='<h3>1 WRC = '+x+' ETH</h3>';

        return value;
    }).catch(function(e) {
        console.log(e);
    });
  },

  tokensTotal: function() {
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
    WRCToken.setProvider(web3.currentProvider);
    var meta;
    return WRCToken.deployed().then(function(instance) {
      meta = instance;
      var price = meta.totalSupply();
      // console.log("1",price);

      return price;
    }).then(function(value) {
            var x= parseInt(value);
            console.log(x,'totalSupply');
            // document.querySelector('h3').innerHTML='<h3>1 WRC = '+x+' ETH</h3>';

        return value;
    }).catch(function(e) {
        // console.log(e);
    });
  },

  burnTokens: function(amount) {
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
      return meta.destroyUsed(amount, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        // console.log(e);
    });
  },
  //for iots
  getauthorisedIOTs: function() {
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
    WRC.setProvider(web3.currentProvider);
    var meta;
    return WRC.deployed().then(function(instance) {
      meta = instance;
      var price = meta.getauthorisedIOTs();
      // console.log("1",price);

      return price;
    }).then(function(value) {
            console.log(value,'IOTs');
            // document.querySelector('h3').innerHTML='<h3>1 WRC = '+x+' ETH</h3>';
        return value;
    }).catch(function(e) {
        // console.log(e);
    });
  },



}
