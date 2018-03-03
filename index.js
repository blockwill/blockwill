var account = '0xa48F36b396eB4608EE61130AFB3279D3A4fbab6c';
var contractAddress = '0xBdA270BbeD7544AB1D377066F22BB3b4fa71ec78';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


var balanceWei = web3.eth.getBalance(account).toNumber();
var balance = web3.fromWei(balanceWei, 'ether');

web3.eth.defaultAccount = account;