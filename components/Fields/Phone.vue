<template>
  <div>
    <input-label
      :for-input="idText"
      :text="label"
      :confirm-status="confirmStatus"
    ></input-label>
    <v-text-field
      :id="idText"
      class="auth-input"
      :value="value"
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
      @input="input"
    >
      <template v-if="value.length > 1" #append>
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
    idText: {
      type: String,
      required: true,
    },
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
    confirmStatus: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      defaultCountryFlag: '🏳',
      countryFlag: '',
    }
  },
  methods: {
    input(rawValue) {
      const phone = parsePhoneNumber(rawValue)

      this.countryFlag = phone?.country
        ? phone?.country
        : this.defaultCountryFlag

      this.$emit('input', rawValue)
    },
  },
}
</script>
