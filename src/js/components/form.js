import { applyValidations } from '../../modules/validations';
import { getCookie } from '../custom/cookies';
import * as jsonData from '../../_data/theme/site.json';
import * as countries from '../custom/iso-3166-countries.json';
// import axios from 'axios';

export default () => ({
    fields: {},
    formError: '',
    noAccept: false,
    intlTelInputInstance: undefined,
    errorMap: ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"],
    isInternational: null,
    dialCode: '1',
    country: 'USA',

    submit(uniqueID, formPlainData) {
        // Validate all fields
        let isFormValid = true;
        formPlainData.form.fields.forEach(field => {
            this.validate(field.name, this.computeFieldId(uniqueID, field.name), field.validations);
            isFormValid = isFormValid && this.isValid;
        });
        // Send data if valid
        if (isFormValid) {
            this.formError = '';

            // set noAccept if found
            for (const datafield in this.fields) {
                formPlainData.form.fields.forEach(field => {
                    if (datafield === field.name && field.hasOwnProperty('options')) {
                        for (var opt in field['options']){
                            if (field.options[opt].value === this.fields[datafield] && field.options[opt].notAccept === true) {
                                this.noAccept = true;
                            } 
                        }
                    }
                });
            }

            let fixedData = this.addFixedData(formPlainData);
            this.submitForm(this.fields, fixedData, formPlainData.endpoint, formPlainData.redirect);
            
        } else {
            this.formError = "Please complete all form fields";
        }
    },

    initPhone() {
        this.intlTelInputInstance = window.intlTelInput(this.$refs.phone, {
            separateDialCode: true,
            formatOnDisplay: true,
            utilsScript: "/js/custom/intlTelInput.utilities.js"
        });
    },

    checkPhone() {
        if (this.intlTelInputInstance.isValidNumber()) {
            this.isValid = true;
            this.errorMsg = '';
            const countryData = this.intlTelInputInstance.getSelectedCountryData();
            
            countryData.dialCode === '1' ? this.isInternational = false : this.isInternational = true;
            this.dialCode = countryData.dialCode;

            for (var country in countries.default){
                if (countries.default[country]['alpha-2'].toLowerCase() === countryData.iso2) {
                    this.country = countries.default[country]['alpha-3']
                } 
            }

        } else {
            this.isValid = false;
            this.isInternational = null;
            this.dialCode = '1';
            this.country = 'USA';
            var errorCode = this.intlTelInputInstance.getValidationError();
            this.errorMsg = this.errorMap[errorCode];
        }
    },

    addUtmData(data) {
        if (getCookie(jsonData.siteCookie + '-utm_content'))
            data['utm_content'] = getCookie(jsonData.siteCookie + '-utm_content')
        if (getCookie(jsonData.siteCookie + '-utm_campaign'))
            data['utm_campaign'] = getCookie(jsonData.siteCookie + '-utm_campaign')
        if (getCookie(jsonData.siteCookie + '-utm_term'))
            data['utm_term'] = getCookie(jsonData.siteCookie + '-utm_term')
        if (getCookie(jsonData.siteCookie + '-utm_medium'))
            data['utm_medium'] = getCookie(jsonData.siteCookie + '-utm_medium')
        if (getCookie(jsonData.siteCookie + '-utm_source'))
            data['utm_source'] = getCookie(jsonData.siteCookie + '-utm_source')
        return data;
    },

    addFixedData(data) {
        let newData = {};
        if (this.noAccept === true) {
            newData = data.fixedNotAcceptData;
        } 
        if (this.isInternational === true) {
            newData = {
                ...newData,
                "is_international": true,
                "country": this.country
            }
        }
        if (data.hasOwnProperty("fixedData")) {
            newData = {
                ...newData,
                ...data.fixedData
            }
        }
        return newData;
    },

    async submitForm(data, fixed, endpoint, redirect) {
        //console.log("SUBMITTING TO ", endpoint, data);
        const fullFormData = this.addUtmData(data);
        const fullFormWithFixed = {
            ...fullFormData,
            ...fixed
        }
        const fullFormDataNoEmpty = this.removeEmptyOrNull(fullFormWithFixed);

        const response = await fetch(endpoint, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(fullFormDataNoEmpty)
        });

        if (response.ok) {
            // const responseData = await response.json();
            // type: object expects different thank you page based on program selection
            if (typeof redirect === 'object') {
                if (this.noAccept === true) {
                    window.location.href = redirect.notAccept;
                } else if (this.noAccept === false) {
                    if (redirect.hasOwnProperty('accept')) {
                        window.location.href = redirect.accept;
                    } else {
                        window.location.href = redirect[fullFormData.program];
                    }
                } 
            } else {
                window.location.href = redirect;
            }
        } else {
            console.error("ERROR");
            this.formError = "There was an error submitting the form."
        }
    },

    validate(name, id, rules) {
        const el = id;
        const field = document.getElementById(el);
        const fieldValue = field.value;

        // if field not visible, skip validation
        const fieldVisible = field.closest('.form-item-wrapper').style.display;
        if (fieldVisible !== "none") {
            let results = applyValidations(fieldValue, rules)
            .filter(result => result !== true);

            // If no error just set back to ok
            if (results.length > 0) {
                results.forEach(result => {
                    this.isValid = false;
                    this.errorMsg = result.message;
                });
            } else {
                this.fields[name] = fieldValue;
                this.isValid = true;
                this.errorMsg = '';
            }
        }

        
    },

    removeEmptyOrNull(obj) {
        Object.keys(obj).forEach(k =>
          (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
          (!obj[k] && obj[k] !== undefined) && delete obj[k]
        );
        return obj;
    },

    computeFieldId(uniqueID, fieldName) {
        return `field_${fieldName}-${uniqueID}`
    },

    controlledFields(field) {
        const fieldControl = field;
        if (fieldControl !== '' && fieldControl !== undefined) {
            if (typeof fieldControl === 'object') {
                fieldControl.forEach( f => {
                    this.showControlledFields(f);
                });
            } else {
                this.showControlledFields(fieldControl);
            }
        }
    },

    showControlledFields(field) {
        let controlledField = document.getElementById(field);
        if (this.$el.selectedOptions !== undefined && this.$el.selectedOptions[0].value !== '') {
            if (controlledField && this.$el.selectedOptions[0].value == controlledField.closest('.form-item-wrapper').dataset.requirements) {
                controlledField.closest('.form-item-wrapper').style.display = 'block';
            } else if (controlledField && this.$el.selectedOptions[0].value !== controlledField.closest('.form-item-wrapper').dataset.requirements) {
                controlledField.closest('.form-item-wrapper').style.display = 'none';
            }
        }
    },

    input: {
        [':class']() {
            if (this.isValid == null) {
                return false;
            } else {
                if (this.isValid == false) {
                    return 'error'
                } else if (this.isValid == true) {
                    return 'valid'
                }
            }
        },
        ['x-init']() {
            return this.$nextTick( () => {
                this.controlledFields(this.fieldControls);
            });                      
        },
        ['@change']() {
            this.controlledFields(this.fieldControls);
        }
    },

    message: {
        ['x-text']() {
            return this.errorMsg;
        }
    },

    formErrorMessage: {
        ['x-text']() {
            return this.formError;
        }
    }

});
