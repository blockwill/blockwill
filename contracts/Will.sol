pragma solidity ^0.4.18;

import './Destructible.sol';

contract Will is Destructible {

    uint8 public minValidators;

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

    function Will(address[] _recipients, uint8[] _percentages, address[] _validators, uint8 _minValidators) payable public {

        uint8 totalPercentage;
        assert(_recipients.length == _percentages.length);
        recipients.length = _recipients.length;

        for (uint i = 0; i < _recipients.length; i++) {
            address recipientAddress = _recipients[i];
            uint8 percent = _percentages[i];

            assert(recipientAddress != address(0));
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

    function updateValidationState() private {
        for (uint i = 0; i < validators.length; i++) {
            if (msg.sender == validators[i].validator) {
                validators[i].hasValidated = true;
                break;
            }
        }
    }

    function countValidated() private view returns (uint) {
        uint validated;
        for (uint i = 0; i < validators.length; i++) {
            if (validators[i].hasValidated == true) {
                validated++;
            }
        }
        return validated;
    }

    function distributeFunds() private {
        uint[] memory amounts = calculateAmounts();

        for (uint i = 0; i < amounts.length; i++) {
            recipients[i].recipient.transfer(amounts[i]);
        }
    }

    function calculateAmounts() private view returns (uint[]) {
        uint[] memory amounts = new uint[](recipients.length);

        for (uint i = 0; i < recipients.length; i++) {
            amounts[i] = (this.balance * recipients[i].percent) / 100;
        }

        return amounts;
    }

    function() payable public {}

}
