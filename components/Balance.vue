<template>
  <v-card class="balance">
    <v-card-title
      v-if="!short"
      class="text-h3"
      v-text="$t(`balance.title.${type}`)"
    />
    <v-card-text class="white--text">
      <v-row>
        <!-- Balance -->
        <v-col>
          <span class="d-block font-weight-light mb-2">Your Balance</span>
          <amount class="d-block" :value="balance" />
          <div>{{ btc }} <span class="primary--text">BTC</span></div>
        </v-col>
        <!-- Last income -->
        <v-col>
          <span class="d-block font-weight-light mb-2">
            {{ lastIncomeTitle }}
          </span>
          <amount class="d-block" :value="lastIncome" />
          <div>{{ lastIncomeBtc }} <span class="primary--text">BTC</span></div>
        </v-col>
      </v-row>

      <slot v-if="!short" />
    </v-card-text>
  </v-card>
</template>

<script>
import Amount from './Amount.vue'
export default {
  name: 'Balance',
  components: { Amount },
  props: {
    user: {
      type: Object,
      default() {
        return this.$auth.user
      },
    },
    type: {
      type: String,
      validate: (value) => ['main', 'referral', 'demo'].includes(value),
      default: () => 'main',
    },
    short: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    balance() {
      if (this.type === 'main') {
        return this.$auth.user?.balance ?? 0
      } else if (this.type === 'referral') {
        return this.$auth.user?.referralBalance ?? 0
      } else {
        return 0
      }
    },
    btc() {
      const rate = this.$rate.currentRate || 0
      return Math.floor((this.balance / rate) * 100000) / 100000
    },
    lastIncome() {
      if (this.type === 'main') {
        return this.$auth.user?.balanceLastIncome ?? 0
      } else if (this.type === 'referral') {
        return this.$auth.user?.referralBalanceLastIncome ?? 0
      } else {
        return 0
      }
    },
    lastIncomeBtc() {
      const rate = this.$rate.currentRate || 0
      return Math.floor((this.lastIncome / rate) * 100000) / 100000
    },
    lastIncomeTitle() {
      if (this.type === 'referral') {
        return 'Last bonus'
      } else {
        return 'Last win'
      }
    },
  },
  methods: {
    formatValue(value) {
      return (Math.floor(value * 100) / 100).toLocaleString()
    },
  },
}
</script>

<style lang="scss">
.balance {
  background-color: rgba(194, 206, 247, 0.05) !important;
  margin: 0 16px;
}
</style>
