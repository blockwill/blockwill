pragma solidity ^0.4.18;

import './Ownable.sol';

contract Will is Ownable {
    
    uint private minValidators;
    mapping(address => uint) private recipients;
    mapping(address => bool) private validators;
    
    event Validated(address);
    event Executed();
    event Revoked();
    event Funded();
    
    function Will(address[] _recipients, uint[] _recipientPercentages, address[] _validators, uint _minValidators) public {
        
        require(_recipients.length == _recipientPercentages.length);
        for (uint i = 0; i < _recipients.length; i++) {
            recipients[_recipients[i]] = _recipientPercentages[i];
            validators[_validators[i]] = false;
            minValidators = _minValidators;
        }
        
    }
    
    function validate() {}
    function distributeFunds() {}
    function revoke() onlyOwner {}
    
    function() payable public {}

}
