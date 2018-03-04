App = {
  web3Provider: null,
  accounts: [],
  bytecode: "0x606060405260405162000f3b38038062000f3b833981016040528080518201919060200180518201919060200180518201919060200180519060200190919050506000806000806000806000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555089518b511415156200009957fe5b8a51600681620000aa91906200032c565b50600095505b8a51861015620001f1578a86815181101515620000c957fe5b9060200190602002015194508986815181101515620000e457fe5b906020019060200201519350600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141515156200012a57fe5b838701965060408051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018560ff168152506006878154811015156200016d57fe5b906000526020600020900160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908360ff1602179055509050508580600101965050620000b0565b60648760ff161415156200020157fe5b8760ff166001819055508851600154111515156200021b57fe5b88516007816200022c91906200035b565b50600092505b88518310156200031b5788838151811015156200024b57fe5b9060200190602002015191506000905060408051908101604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018215158152506007848154811015156200029857fe5b906000526020600020900160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908315150217905550905050828060010193505062000232565b505050505050505050505062000444565b81548183558181151162000356578183600052602060002091820191016200035591906200038a565b5b505050565b8154818355818115116200038557818360005260206000209182019101620003849190620003e7565b5b505050565b620003e491905b80821115620003e057600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a81549060ff02191690555060010162000391565b5090565b90565b6200044191905b808211156200043d57600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a81549060ff021916905550600101620003ee565b5090565b90565b610ae780620004546000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308935b61146100bc57806335aa2e44146100e55780633f221aee146101535780636901f6681461018057806383197ef0146101955780638c4dca73146101aa5780638da5cb5b146101e1578063ab5e28c514610236578063c5ab22411461025f578063d1bc76a114610288578063f2fde38b146102f8578063f5074f4114610331575b005b34156100c757600080fd5b6100cf61036a565b6040518082815260200191505060405180910390f35b34156100f057600080fd5b6101066004808035906020019091905050610370565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b341561015e57600080fd5b6101666103cd565b604051808215151515815260200191505060405180910390f35b341561018b57600080fd5b6101936103e0565b005b34156101a057600080fd5b6101a8610405565b005b34156101b557600080fd5b6101cb600480803590602001909190505061049a565b6040518082815260200191505060405180910390f35b34156101ec57600080fd5b6101f46104be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561024157600080fd5b6102496104e3565b6040518082815260200191505060405180910390f35b341561026a57600080fd5b6102726104e9565b6040518082815260200191505060405180910390f35b341561029357600080fd5b6102a960048080359060200190919050506104ef565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260ff1660ff1681526020019250505060405180910390f35b341561030357600080fd5b61032f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061054c565b005b341561033c57600080fd5b610368600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106a1565b005b60035481565b60078181548110151561037f57fe5b90600052602060002090016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b600260009054906101000a900460ff1681565b6103e8610715565b6001546103f3610847565b101515610403576104026108b9565b5b565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6005818154811015156104a957fe5b90600052602060002090016000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60015481565b6006818154811015156104fe57fe5b90600052602060002090016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105a757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156105e357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106fc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b60008090505b6007805490508110156108445760078181548110151561073757fe5b906000526020600020900160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156108375760016007828154811015156107aa57fe5b906000526020600020900160000160146101000a81548160ff0219169083151502179055507f420856e5b86811fb9b2766ddb52829c35dab615821cf3d9b219267c691645bb633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1610844565b808060010191505061071b565b50565b60008060008090505b6007805490508110156108aa576001151560078281548110151561087057fe5b906000526020600020900160000160149054906101000a900460ff161515141561089d5781806001019250505b8080600101915050610850565b81600381905550819250505090565b6108c1610aa7565b60006108cb6109d9565b9150600090505b815181101561098e576006818154811015156108ea57fe5b906000526020600020900160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc838381518110151561094057fe5b906020019060200201519081150290604051600060405180830381858888f19350505050151561096f57600080fd5b60046000815480929190600101919050555080806001019150506108d2565b6001600260006101000a81548160ff0219169083151502179055507fb8b570f14eb44ed11fb6b2ac2ff61ceb5b29da5ae60d33184ae20b08f3a47c8960405160405180910390a15050565b6109e1610aa7565b6109e9610aa7565b60006006805490506040518059106109fe5750595b90808252806020026020018201604052509150600090505b600680549050811015610a9f576064600682815481101515610a3457fe5b906000526020600020900160000160149054906101000a900460ff1660ff163073ffffffffffffffffffffffffffffffffffffffff163102811515610a7557fe5b048282815181101515610a8457fe5b90602001906020020181815250508080600101915050610a16565b819250505090565b6020604051908101604052806000815250905600a165627a7a723058200d30ecad033beaf406691651897a9a1ea95cab83d21359492ee77473511d1cbe0029",
  abi: [
    {
      "constant": true,
      "inputs": [],
      "name": "validatedCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
      "constant": true,
      "inputs": [],
      "name": "isWillExecuted",
      "outputs": [
        {
          "name": "",
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
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "amountsTransfered",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
      "name": "transfers",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "type": "uint256"
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
          "indexed": false,
          "name": "",
          "type": "address"
        }
      ],
      "name": "Validated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Distributed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Revoked",
      "type": "event"
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
    if ($('#deployButton').length) {
        $('#deployButton').click(App.handleDeploy);
    }
    if ($('#validateButton').length) {
        $('#validateButton').click(App.handleValidate);
    }
  },

  handleDeploy: function(event) {
    event.preventDefault();

    const accounts = App.getAccounts();

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
        const contract = web3.eth.contract(App.abi);

        recipients = recipients.filter(
            function(value) {
                return value.length > 0;
            }
        );

        percentages = percentages.filter(
            function(value) {
                return value > 0;
            }
        );

        validators = validators.filter(
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
                gas: 4500000,
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

    contractInstance.validate(
        (err, res) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(res);
        }
    );
  },

  isAddress: function(address) {
    return web3.utils.isAddress(address);
  },

  getAccounts: function() {
    return App.accounts;
  }
};
