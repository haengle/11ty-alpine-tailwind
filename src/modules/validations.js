import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import isPostalCode from 'validator/es/lib/isPostalCode';

export const allValidations = {
    "isRequired": {
        label: "Field is required",
        func: (input) => (!isEmpty(input)) || "Field is required"
    },
    "isRequiredIfVisible": {
        label: "Field is required",
        func: (input) => (!isEmpty(input)) || "Field is required"
    },
    "isEmail": {
        label: "Field must be valid email address",
        func: (input) => (isEmail(input)) || "Invalid email address"
    },
    "isPhone": {
        label: "Field must be valid phone number",
        func: (input) => (isMobilePhone(input, "any")) || "Invalid phone"
    },
    "isPostalCode": {
        label: "Field must be valid postal/zip code",
        func: (input) => (isPostalCode(input, "any")) || "Invalid postal/zip code"
    }
};

export const applyValidations = (input, validations) => {
    if (!(validations)) return undefined;
    let result
    return validations.map(validation => {
        result = allValidations[validation].func(input);
        if (result !== true) {
            result = {
                error: validation,
                message: result
            };
        }
        return result;
    })
};