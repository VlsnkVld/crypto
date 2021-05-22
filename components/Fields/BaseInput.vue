<template>
  <div>
    <input-label
      :for-input="idText"
      :text="label"
      :confirm-status="confirmStatus"
    />
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
      :hide-details="hideDetails"
      :error-messages="errorMessages"
      outlined
      solo
      height="48"
      background-color="transparent"
      @input="input"
    >
    </v-text-field>
  </div>
</template>

<script>
import InputLabel from '~/components/Fields/InputLabel.vue'

export default {
  name: 'BaseInput',
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
      default: () => 'base-input',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default() {
        return this.$t('fields.phone-or-email.title')
      },
    },
    placeholder: {
      type: String,
      default() {
        return this.$t('fields.phone-or-email.placeholder.your')
      },
    },
    hint: {
      type: String,
      default: () => null,
    },
    hideDetails: {
      type: Boolean,
      default: () => false,
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
      rawValue: '',
    }
  },
  methods: {
    input(value) {
      this.$emit('input', value)
    },
  },
}
</script>
