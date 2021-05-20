<template>
  <div class="balance-picker">
    <v-btn
      rounded
      small
      text
      :class="{ 'v-btn--brand': value === 'demo' }"
      @click="$emit('input', 'demo')"
    >
      Demo wallet
    </v-btn>
    <v-btn
      rounded
      small
      text
      :class="{ 'v-btn--brand': value === 'main' }"
      @click="$emit('input', 'main')"
    >
      My wallet
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'BalancePicker',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {},
}
</script>

<style lang="scss">
.balance-picker {
  display: flex;
  background: rgba(194, 206, 247, 0.17);
  border-radius: 92px;
  margin: 27px 16px;
  padding: 4px;
  justify-content: space-between;

  .v-btn {
    width: calc(50% - 4px);
  }
}
</style>
