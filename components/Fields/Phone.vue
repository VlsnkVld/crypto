<template>
  <div>
    <input-label for-input="login-phone-input" :text="label"></input-label>
    <v-text-field
      id="login-phone-input"
      class="auth-input"
      :value="rawValue"
      :rules="rules"
      type="text"
      inputmode="tel"
      :name="name"
      :placeholder="placeholder"
      :hint="hint"
      :error-messages="errorMessages"
      outlined
      solo
      height="48"
      background-color="transparent"
      @click:append="toggleShow"
      @input="input"
    >
      <template v-if="rawValue.length > 1" #append>
        <img
          v-if="countryFlag !== '🏳' && countryFlag.length"
          :src="`https://www.countryflags.io/${countryFlag}/flat/24.png`"
        />
        <span v-if="countryFlag === '🏳'">{{ countryFlag }}</span>
      </template>
    </v-text-field>
  </div>
</template>

<script>
import parsePhoneNumber from 'libphonenumber-js'
import InputLabel from '~/components/Fields/InputLabel.vue'

export default {
  name: 'PhoneField',
  components: {
    InputLabel,
  },
  props: {
    value: {
      type: String,
      default: () => '',
    },
    name: {
      type: String,
      default: () => 'phone',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default() {
        return this.$t('fields.phone.title.default')
      },
    },
    placeholder: {
      type: String,
      default: () => '+x (xxx) xxx-xx-xx',
    },
    hint: {
      type: String,
      default: () => null,
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rawValue: '',
      defaultCountryFlag: '🏳',
      countryFlag: '',
    }
  },
  methods: {
    input(rawValue) {
      const phone = parsePhoneNumber(rawValue)

      this.rawValue = rawValue
      this.countryFlag = phone?.country
        ? phone?.country
        : this.defaultCountryFlag

      this.$emit('input', phone?.number)
    },
    toggleShow() {
      this.show = !this.show
    },
  },
}
</script>
