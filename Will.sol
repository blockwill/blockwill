pragma solidity ^0.4.18;

import './Ownable.sol';

contract Will is Ownable {
    
    uint private minValidators;
    
    struct Recipient {
        address recipient;
        uint8 percent;
    }
    
    struct Validator {
        address validator;
        bool hasValidated;
    }
    
    Recipient[] recipients;
    Validator[] validators;
    
    event Validated(address);
    event Distributed();
    event Revoked();
    
    function Will(address[] _recipients, uint8[] _percentages, address[] _validators, uint8 _minValidators) public {
        
        uint8 totalPercentage;
        assert(_recipients.length == _percentages.length);

        recipients.length = _recipients.length;

        for (uint i = 0; i < _recipients.length; i++) {
            address recipientAddress = _recipients[i];
            uint8 percent = _percentages[i];
            
            assert(recipientAddress != 0x0);
            totalPercentage += percent;
            
            recipients[i] = Recipient(recipientAddress, percent);
            // Recipient(recipientAddress, percent);
        }
        assert(totalPercentage == 100);
        
        minValidators = _minValidators;
        assert(minValidators <= _validators.length);
        
        validators.length = _validators.length;
        
        for (uint j = 0; j < _validators.length; j++) {
            address validatorAddress = _validators[j];
            bool hasValidated = false;
            
            validators[j] = Validator(validatorAddress, hasValidated);
        }
        
    }
    
    // function validate() {
    //     msg.sender;
    // }
    
    // function distributeFunds() {}
    // function revoke() onlyOwner {}
    
    function() payable public {
    }

}
