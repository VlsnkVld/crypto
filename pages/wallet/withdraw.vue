<template>
  <div class="wallet-withdraw">
    <!-- Header -->
    <heading back @back="paymethod ? (paymethod = null) : $emit('back')">
      Withdraw {{ paymethod ? paymethod.title : '' }}
    </heading>

    <withdraw-list v-if="!paymethod" @change="(item) => (paymethod = item)" />
    <component
      :is="paymethod.component"
      v-else
      class="wallet-withdraw__content"
    />
  </div>
</template>

<script>
import layoutMixin from '~/mixins/layout'
import WithdrawList from '~/components/Wallet/WithdrawList.vue'

export default {
  name: 'WalletWithdrawPage',
  components: { WithdrawList },
  mixins: [layoutMixin],
  middleware: 'authenticated',
  data() {
    return {
      paymethod: null,
    }
  },
  head() {
    return {
      title: this.$t('wallet.title'),
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.wallet-withdraw {
  &__content {
    padding: 0 16px 0 16px;
  }
}
</style>
