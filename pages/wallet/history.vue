<template>
  <div class="wallet-history">
    <!-- Header -->
    <heading back @back="$emit('back')">Payment history</heading>

    <!-- Type -->
    <div class="wallet-history__picker">
      <v-btn
        rounded
        small
        text
        :class="{ 'v-btn--brand': type === 'deposit' }"
        @click="type = 'deposit'"
      >
        Deposit history
      </v-btn>
      <v-btn
        rounded
        small
        text
        :class="{ 'v-btn--brand': type === 'withdraw' }"
        @click="type = 'withdraw'"
      >
        Withdraw history
      </v-btn>
    </div>

    <div class="wallet-history__content">
      <!-- Deposits -->
      <template v-if="type == 'deposit'">
        <div class="text-center mt-8 mb-8">
          <img
            src="~/static/images/robot-loser.svg"
            width="100"
            height="128"
            alt="robot"
          />
          <div class="text-h6 text-uppercase mt-4">No transactions</div>
        </div>
      </template>

      <!-- Withdraws -->
      <template v-else>
        <v-list flat color="transparent">
          <template v-for="transaction of items">
            <v-list-item :key="transaction.id">
              <v-list-item-content>
                <v-list-item-title>
                  <timeago
                    class="font-weight-bold"
                    :datetime="transaction.createdAt"
                  />
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ transaction.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="font-weight-bold primary--text">
                {{ transaction.amount.toLocaleString() }} $
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="transaction.id + '-d'" />
          </template>
        </v-list>
      </template>
    </div>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'WalletHistoryPage',
  mixins: [layoutMixin],
  middleware: 'authenticated',
  data() {
    return {
      type: 'withdraw',
    }
  },
  head() {
    return {
      title: this.$t('wallet.title'),
    }
  },
  computed: {
    items() {
      return [
        {
          id: 5,
          amount: 500,
          description: '535561******1794',
          createdAt: new Date(new Date().getTime() - 0.3 * 60 * 60 * 1000),
        },
        {
          id: 4,
          amount: 355,
          description: '535561******1794',
          createdAt: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
        },
        {
          id: 3,
          amount: 322,
          description: '535561******1794',
          createdAt: new Date(new Date().getTime() - 12 * 60 * 60 * 1000),
        },
        {
          id: 2,
          amount: 1337,
          description: '535561******1794',
          createdAt: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        },
        {
          id: 1,
          amount: 123.45,
          description: '535561******1794',
          createdAt: new Date(new Date().getTime() - 48 * 60 * 60 * 1000),
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.wallet-history {
  display: block;

  &__picker {
    display: flex;
    background: rgba(194, 206, 247, 0.17);
    border-radius: 92px;
    margin: 0 16px;
    padding: 4px;
    justify-content: space-between;

    .v-btn {
      width: calc(50% - 4px);
    }
  }

  &__content {
    padding: 16px;
  }
}
</style>
