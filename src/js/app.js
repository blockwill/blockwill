App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== "undefined") {
        // Browser MetaMask
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
    } else {
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

    let accounts = App.getAccounts();

    const recipients = accounts;

    var percentages = [];
    var left = 100;

    for(index in accounts) {
        percentage = Math.ceil(Math.random() * (left - 1) + 1);
        if (index == accounts.length - 1) {
            percentage = left;
        } else {
            left -= percentages;
        }

        percentages.push(percentage);
    }

    console.log(percentages);

    const validators = accounts;
    const minValidators = accounts.length;

    App.createContract(
        recipients,
        percentages,
        validators,
        minValidators
    );
  },

  handleValidate: function(event) {
    event.preventDefault();
    var contractAddress = $("#contractAddress").val();

    App.validateContract(contractAddress);
  },

  createContract: function(recipients, percentages, validators, minValidators) {
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

  validateContract: function(contractAddress) {
    if (!contractAddress.length) {
        return;
    }

    jQuery.getJSON("./Will.json").then(data => {
      const contract = web3.eth.contract(data.abi);

      const contractInstance = contract.at(contractAddress);

      contractInstance.validate(
        (err, res) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(res);
        }
      );
    });
  },

  isAddress: function(address) {
    return web3.utils.isAddress(address);
  },

  getAccounts: function() {
    return web3.eth.accounts;
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
