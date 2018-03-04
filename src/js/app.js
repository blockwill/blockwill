App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== "undefined") {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:8545"
      );
      web3 = new Web3(App.web3Provider);
    }

    return App.bindEvents();
  },

  bindEvents: function() {
    $('#deployButton').click(App.handleDeploy);
    $('#validateButton').click(App.handleValidate);
  },

  handleDeploy: function(event) {
    event.preventDefault();

    const recipients = [
      "0x5A5Ab8550f1910cc4F787920878Ed3b28Ba87C0B"
    ];
    const percentages = [100];

    const validators = [
      "0x5A5Ab8550f1910cc4F787920878Ed3b28Ba87C0B"
    ];
    const minValidators = 1;

    jQuery.getJSON("./Will.json").then(data => {
      let contract = web3.eth.contract(data.abi);
      contract.new(
        recipients,
        percentages,
        validators,
        minValidators,
        {
            from: web3.eth.accounts[0],
            data: data.bytecode,
            gas: 4468057,
            value: web3.toWei(1, "ether")
        },
        (err, res) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(res.transactionHash);

            if (res.address) {
                $('#contractAddress').val(res.address);
                console.log('Contract address: ' + res.address);
            }
        }
      );
    });
  },

  handleValidate: function(event) {
    event.preventDefault();
    var contractAddress = $("#contractAddress").val();

    if (!contractAddress.length) {
        return;
    }

    console.log(contractAddress);
    console.log("VALIDATE");

    jQuery.getJSON("./Will.json").then(data => {
      // web3.eth.defaultAccount = web3.eth.accounts[0];
      let contract = web3.eth.contract(data.abi);
      const contractInstance = contract.at(contractAddress);
      contractInstance.validate(() => {});
    });
  },

  isAddress: function(address) {
    return web3.utils.isAddress(address);
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
