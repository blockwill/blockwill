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
    $(document).on("click", "#deployButton", App.handleDeploy);
    $(document).on("click", "#validateButton", App.handleValidate);
  },

  handleDeploy: function(event) {
    event.preventDefault();

    const recipients = [
      "0x009a9d9AA8Ab7eAC61b2456769c2EE898016B515",
      "0x65544c71FEf4317D7391ecc8778Ac699D11fF7F1"
    ];
    const percentages = [70, 30];

    const validators = [
      "0x1fD39587860caCd8b321d6453B9078d91820B40c",
      "0x37e6AfcB18cDcea7F534dbA0fbFc7fD4299A8971"
    ];
    const minValidators = 2;

    jQuery.getJSON("./Will.json").then(data => {
      const contract = web3.eth.contract(data.abi);
      contract.new(
        recipients,
        percentages,
        validators,
        minValidators,
        { from: web3.eth.accounts[0], gas: 1000000 },
        () => {}
      );
    });
  },

  handleValidate: function(event) {
    event.preventDefault();
    var contractAddress = $("#contractAddress").val();

    console.log(contractAddress);
    console.log("VALIDATE");

    jQuery.getJSON('./Will.json').then(data => {
      const contract = web3.eth.contract(data.abi);
      const contractInstance = contract.at(contractAddress);

      const transactionObject = {
        from: web3.eth.accounts[0],
        gas: 21000,
        gasPrice: 9
      };
      contractInstance.methods.validate();
      // contractInstance.createRandomAgency.sendTransaction('validate', transactionObject, (error, result) => { // do something with error checking/result here });
    // });
  })}
}

$(function() {
  $(window).load(function() {
    App.init();
  });
});
