<template>
  <div class="wallet-deposit">
    <!-- Header -->
    <heading back @back="paymethod ? (paymethod = null) : $emit('back')">
      Deposit {{ paymethod ? paymethod.title : '' }}
    </heading>

    <deposit-list v-if="!paymethod" @change="(item) => (paymethod = item)" />
    <component
      :is="paymethod.component"
      v-else
      class="wallet-deposit__content"
      :paymethod="paymethod"
    />
  </div>
</template>

<script>
// import gql from 'graphql-tag'
import layoutMixin from '~/mixins/layout'
import DepositList from '~/components/Wallet/DepositList.vue'

export default {
  name: 'WalletDepositPage',
  components: { DepositList },
  mixins: [layoutMixin],
  middleware: 'authenticated',
  data() {
    return {
      // type: 'btc',
      paymethod: null,
    }
  },
  head() {
    return {
      title: this.$t('wallet.title'),
    }
  },
  methods: {
    // async submitBtc() {
    //   try {
    //     const { data } = await this.$apollo.mutate({
    //       mutation: CREATE_TRANSACTION_MUTATION,
    //       variables: {
    //         userId: this.$user?.id,
    //         type: 1,
    //         amount: 1000,
    //         code: '123456',
    //         status: 1,
    //       },
    //     })
    //     console.log(data)
    //     this.$notify.toast('Transaction created', { color: 'green' })
    //     // this.$router.replace({ name: 'wallet-transactions' })
    //     this.$emit('back')
    //   } catch (error) {
    //     this.$notify.toast(error.message, { color: 'red' })
    //   }
    // },
  },
}

// const CREATE_TRANSACTION_MUTATION = gql`
//   mutation createTransaction(
//     $userId: Int
//     $type: Int
//     $amount: Float
//     $code: String
//     $status: Int
//   ) {
//     data: createTransaction(
//       userId: $userId
//       type: $type
//       ammount: $amount
//       code: $code
//       status: $status
//     ) {
//       id
//     }
//   }
// `
</script>

<style lang="scss">
.wallet-deposit {
  //   display: block;

  //   &__picker {
  //     display: flex;
  //     background: rgba(194, 206, 247, 0.17);
  //     border-radius: 92px;
  //     margin: 27px 16px;
  //     padding: 4px;
  //     justify-content: space-between;

  //     .v-btn {
  //       width: calc(50% - 4px);
  //     }
  //   }

  &__content {
    padding: 0 16px 0 16px;
  }
}
</style>
