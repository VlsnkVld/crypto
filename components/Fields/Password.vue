<template>
  <div>
    <input-label :for-input="idText" :text="label"></input-label>
    <v-text-field
      :id="idText"
      class="auth-input"
      :value="value"
      :append-icon="show ? '$eyeOff' : '$eyeOn'"
      :rules="rules"
      :type="show ? 'text' : 'password'"
      :name="name"
      :placeholder="placeholder"
      :hint="hint"
      :error-messages="errorMessages"
      outlined
      solo
      height="48px"
      background-color="transparent"
      @click:append="toggleShow"
      @input="(value) => $emit('input', value)"
    />
  </div>
</template>

<script>
import InputLabel from '~/components/Fields/InputLabel.vue'

export default {
  name: 'PasswordField',
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
      default: () => 'password',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default() {
        return this.$t('fields.password.title.default')
      },
    },
    placeholder: {
      type: String,
      default: () => null,
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
      show: false,
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
  },
}
</script>
