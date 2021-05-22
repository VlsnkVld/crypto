<template>
  <v-dialog
    :value="value"
    content-class="pink-linear-bg rounded-lg"
    :width="width"
    @click:outside="closeDialog"
  >
    <v-row class="base-modal flex-nowrap ma-0 pa-3 px-12">
      <v-col>
        <h5 class="text-h5 text-center text-capitalize font-weight-bold mb-5">
          {{ title }}
        </h5>
        <div>
          <slot></slot>
        </div>
      </v-col>
      <v-btn class="base-modal__close" icon small fab @click="closeDialog">
        <v-icon>$close</v-icon>
      </v-btn>
    </v-row>
  </v-dialog>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    width: {
      type: Number,
      default: () => 450,
    },
  },
  methods: {
    closeDialog() {
      this.$emit('input', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.base-modal {
  position: relative;
  &__close {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
