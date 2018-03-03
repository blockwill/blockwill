pragma solidity ^0.4.18;

import './Destructible.sol';

contract Will is Destructible {
    
    uint public minValidators;
    
    bool public isWillExecuted;
    uint public validatedCount;
    uint public transfers;
    uint[] public amountsTransfered;
    
    struct Recipient {
        address recipient;
        uint8 percent;
    }
    
    struct Validator {
        address validator;
        bool hasValidated;
    }
    
    Recipient[] public recipients;
    Validator[] public validators;
    
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
    
    function validate() public {
        updateValidationState();
        if (countValidated() >= minValidators) {
            distributeFunds();
        }
    }
    
    function updateValidationState() {
        for (uint i = 0; i < validators.length; i++) {
            if (msg.sender == validators[i].validator) {
                validators[i].hasValidated = true;
                Validated(msg.sender);
                break;
            }
        }
    }
    
    function countValidated() private returns (uint) {
        uint validated;
        for (uint i = 0; i < validators.length; i++) {
            if (validators[i].hasValidated == true) {
                validated++;
            }
        }
        validatedCount = validated;
        return validated;
    }
    
    function distributeFunds() private {
        amountsTransfered.length = validatedCount;
        
        for (uint j = 0; j < recipients.length; j++) {
            var value = (this.balance * recipients[j].percent) / 100;
            recipients[j].recipient.transfer(value);
            amountsTransfered[j] = value;
            transfers++;
        }   

        isWillExecuted = true;
        Distributed();
        
    }
    
    function() payable public {
    }

}
