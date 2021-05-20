<template>
  <v-row class="game-balance">
    <v-col cols="auto" class="game-balance__left">
      <v-icon class="mr-2">$wallet</v-icon>
      <span class="game-balance__title">Your balance:</span>
    </v-col>
    <v-col cols="auto" class="game-balance__right">
      <amount :value="balance" />
      <div class="game-balance__btc">
        {{ btc }} <span class="primary--text">BTC</span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Amount from '~/components/Amount.vue'

export default {
  name: 'GameBalance',
  components: {
    Amount,
  },
  computed: {
    balance() {
      return this.$auth.user?.balance || 0
    },
    btc() {
      const rate = this.$rate.currentRate || 0
      return Math.floor((this.balance / rate) * 100000) / 100000
    },
  },
}
</script>

<style lang="scss">
.game-balance {
  margin: 0 16px !important;

  &__left {
    display: inline-flex;
    align-items: center;
    margin-bottom: auto;
    padding: 0 12px !important;
  }

  &__right {
    margin-left: auto;
    text-align: right;
    padding: 0 12px !important;
  }

  &__title {
    font-size: 1.1rem;
  }

  &__btc {
    font-size: 0.75rem;
    font-weight: 500;
  }
}
</style>
