import Vue from 'vue'
import parsePhoneNumber from 'libphonenumber-js'
import { ValidationProvider, ValidationObserver, Validator } from 'vee-validate'

Validator.extend('phone', {
  message: 'Phone number is invalid.', // TODO: Перевод
  validate: (value) => {
    return !!parsePhoneNumber(String(value))?.number
  },
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
