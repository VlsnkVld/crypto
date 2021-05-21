<template>
  <div>
    <input-label :for-input="idText" :text="label"></input-label>
    <v-text-field
      :id="idText"
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
    errorMessages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rawValue: '',
    }
  },
  methods: {
    input(rawValue) {
      this.rawValue = rawValue
      this.$emit('input', rawValue)
    },
  },
}
</script>
