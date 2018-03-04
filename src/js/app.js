App = {
  web3Provider: null,
  bytecode: "0x606060405260405162000d9738038062000d97833981016040528080518201919060200180518201919060200180518201919060200180519060200190919050506000806000806000806000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555089518b511415156200009957fe5b8a51600181620000aa91906200034d565b50600095505b8a51861015620001f1578a86815181101515620000c957fe5b9060200190602002015194508986815181101515620000e457fe5b906020019060200201519350600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141515156200012a57fe5b838701965060408051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018560ff168152506001878154811015156200016d57fe5b906000526020600020900160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908360ff1602179055509050508580600101965050620000b0565b60648760ff161415156200020157fe5b87600060146101000a81548160ff021916908360ff1602179055508851600060149054906101000a900460ff1660ff16111515156200023c57fe5b88516002816200024d91906200037c565b50600092505b88518310156200033c5788838151811015156200026c57fe5b9060200190602002015191506000905060408051908101604052808373ffffffffffffffffffffffffffffffffffffffff168152602001821515815250600284815481101515620002b957fe5b906000526020600020900160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908315150217905550905050828060010193505062000253565b505050505050505050505062000465565b8154818355818115116200037757818360005260206000209182019101620003769190620003ab565b5b505050565b815481835581811511620003a657818360005260206000209182019101620003a5919062000408565b5b505050565b6200040591905b808211156200040157600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a81549060ff021916905550600101620003b2565b5090565b90565b6200046291905b808211156200045e57600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a81549060ff0219169055506001016200040f565b5090565b90565b61092280620004756000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806335aa2e44146100905780636901f668146100fe57806383197ef0146101135780638da5cb5b14610128578063c5ab22411461017d578063d1bc76a1146101ac578063f2fde38b1461021c578063f5074f4114610255575b005b341561009b57600080fd5b6100b1600480803590602001909190505061028e565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b341561010957600080fd5b6101116102eb565b005b341561011e57600080fd5b610126610320565b005b341561013357600080fd5b61013b6103b5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561018857600080fd5b6101906103da565b604051808260ff1660ff16815260200191505060405180910390f35b34156101b757600080fd5b6101cd60048080359060200190919050506103ed565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff1660ff1681526020019250505060405180910390f35b341561022757600080fd5b610253600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061044a565b005b341561026057600080fd5b61028c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061059f565b005b60028181548110151561029d57fe5b90600052602060002090016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b6102f3610613565b600060149054906101000a900460ff1660ff1661030e6106e2565b10151561031e5761031d61074d565b5b565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561037b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060149054906101000a900460ff1681565b6001818154811015156103fc57fe5b90600052602060002090016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104a557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104e157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105fa57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b60008090505b6002805490508110156106df5760028181548110151561063557fe5b906000526020600020900160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156106d25760016002828154811015156106a857fe5b906000526020600020900160000160146101000a81548160ff0219169083151502179055506106df565b8080600101915050610619565b50565b60008060008090505b600280549050811015610745576001151560028281548110151561070b57fe5b906000526020600020900160000160149054906101000a900460ff16151514156107385781806001019250505b80806001019150506106eb565b819250505090565b6107556108e2565b600061075f610814565b9150600090505b81518110156108105760018181548110151561077e57fe5b906000526020600020900160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc83838151811015156107d457fe5b906020019060200201519081150290604051600060405180830381858888f19350505050151561080357600080fd5b8080600101915050610766565b5050565b61081c6108e2565b6108246108e2565b60006001805490506040518059106108395750595b90808252806020026020018201604052509150600090505b6001805490508110156108da57606460018281548110151561086f57fe5b906000526020600020900160000160149054906101000a900460ff1660ff163073ffffffffffffffffffffffffffffffffffffffff1631028115156108b057fe5b0482828151811015156108bf57fe5b90602001906020020181815250508080600101915050610851565b819250505090565b6020604051908101604052806000815250905600a165627a7a72305820acfb95389eb5167ba36d792f056976f0ca736ffb4876334cdd2ccba37e1c61870029",
  abi: [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "validators",
      "outputs": [
        {
          "name": "validator",
          "type": "address"
        },
        {
          "name": "hasValidated",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minValidators",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "recipients",
      "outputs": [
        {
          "name": "recipient",
          "type": "address"
        },
        {
          "name": "percent",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "destroyAndSend",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_recipients",
          "type": "address[]"
        },
        {
          "name": "_percentages",
          "type": "uint8[]"
        },
        {
          "name": "_validators",
          "type": "address[]"
        },
        {
          "name": "_minValidators",
          "type": "uint8"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "validate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],

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

    web3.eth.getAccounts( (err, res) => {
        App.accounts = res;
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    if ($("#deployButton").length) {
      $("#deployButton").click(App.handleDeploy);
    }
    if ($("#validateButton").length) {
      $("#validateButton").click(App.handleValidate);
    }
  },

  handleDeploy: function(event) {
    event.preventDefault();

    const accounts = App.getAccounts();

    const recipients = accounts;

    var percentages = [];
    var left = 100;

    for (index in accounts) {
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

    App.createContract(recipients, percentages, validators, minValidators);
  },

  handleValidate: function(event) {
    event.preventDefault();
    var contractAddress = $("#contractAddress").val();

    App.validateContract(contractAddress);
  },

  createContract: function(recipients, percentages, validators, minValidators) {
        const contract = web3.eth.contract(App.abi);

        recipients = recipients.filter(
            function(value) {
                return value.length > 0;
            }
        );

        validators = validators.filter(
            function(value) {
                return value.length > 0;
            }
        );

        percentages = percentages.filter(
            function(value) {
                return value > 0;
            }
        );

        contract.new(
            recipients,
            percentages,
            validators,
            minValidators,
            {
                from: web3.eth.accounts[0],
                data: App.bytecode,
                gas: 4400000,
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
  },

  validateContract: function(contractAddress) {
    if (!contractAddress.length) {
      return;
    }

    const contract = web3.eth.contract(App.abi);

    const contractInstance = contract.at(contractAddress);

    contractInstance.validate((err, res) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(res);
    });
  },

  isAddress: function(address) {
    return web3.utils.isAddress(address);
  },

  getAccounts: function() {
    return App.accounts;
  }
};
