<template>
  <div :class="{ 'wallet-page--desktop': desktop }">
    <template v-if="subpage === 'index'">
      <!-- Header -->
      <balance-picker v-if="!short" v-model="type" />

      <!-- Balance -->
      <balance :type="type" :short="short">
        <!-- Action button :: Demo -->
        <v-btn
          v-if="type === 'demo'"
          block
          rounded
          large
          class="v-btn--brand mt-5"
          @click="type = 'main'"
        >
          Bet real bitcoin
        </v-btn>

        <!-- Action buttons :: Main -->
        <v-row v-else no-gutters class="mt-5">
          <v-col class="pr-2">
            <v-btn
              block
              rounded
              large
              color="green"
              class="wallet-page--green"
              @click="subpage = 'deposit'"
            >
              <!-- :to="{ name: 'wallet-deposit' }" nuxt -->
              Deposit
            </v-btn>
          </v-col>
          <v-col class="pl-2">
            <v-btn
              block
              rounded
              large
              color="red"
              class="wallet-page--red"
              @click="subpage = 'withdraw'"
            >
              Withdraw
            </v-btn>
          </v-col>
        </v-row>
      </balance>

      <!-- Transactions -->
      <div v-if="!short" style="margin-bottom: -12px" class="mt-2 pl-2 pr-2">
        <v-list-item @click="subpage = 'history'">
          <!-- Icon -->
          <v-list-item-icon>
            <v-icon>$history</v-icon>
          </v-list-item-icon>
          <!-- Content -->
          <v-list-item-content>
            <v-list-item-title>Payment history</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>$next</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider inset />
      </div>

      <!-- Banner -->
      <referral-banner v-if="!desktop" colored="desktop" />
    </template>
    <deposit-page v-else-if="subpage === 'deposit'" @back="subpage = 'index'" />
    <withdraw-page
      v-else-if="subpage === 'withdraw'"
      @back="subpage = 'index'"
    />
    <history-page v-else-if="subpage === 'history'" @back="subpage = 'index'" />
  </div>
</template>

<script>
// import BalancePicker from '~/components/BalancePicker.vue'
import DepositPage from './deposit.vue'
import WithdrawPage from './withdraw.vue'
import HistoryPage from './history.vue'
import Balance from '~/components/Balance.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'WalletPage',
  components: {
    // BalancePicker,
    Balance,
    DepositPage,
    WithdrawPage,
    HistoryPage,
  },
  mixins: [layoutMixin],
  middleware: 'authenticated',
  props: {
    desktop: {
      type: Boolean,
      default: () => false,
    },
    short: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      type: 'main',
      subpage: 'index',
    }
  },
  head() {
    return {
      title: this.$t('wallet.title'),
    }
  },
}
</script>

<style lang="scss">
.wallet-page {
  &--desktop {
    background: #1a1f34;
    border-radius: 8px;
    // padding-top: 16px;

    .balance-picker {
      margin: 0 16px 0 16px !important;
    }

    .v-card {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      box-shadow: none !important;
    }
  }
  &--green {
    background: linear-gradient(95.38deg, #56ab2f 6.29%, #a8e063 107.73%);
  }
  &--red {
    background: linear-gradient(95.38deg, #ab3349 6.29%, #f45c43 107.73%);
  }
}
</style>
