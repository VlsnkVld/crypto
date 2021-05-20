<template>
  <div>
    <!-- Header -->
    <heading>Transactions</heading>

    <!-- Transactions -->
    <v-list flat color="transparent">
      <template v-for="transaction of transactions">
        <v-list-item :key="transaction.id">
          <v-list-item-avatar>
            <v-icon class="green--text">$plus</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span class="mr-3">#{{ transaction.id }}</span>
              {{ transaction.amount }} <span class="primary--text">Bitcy</span>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <timeago :datetime="transaction.createdAt" />
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="transaction.id + '-d'" inset />
      </template>
    </v-list>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import layoutMixin from '~/mixins/layout'
import Timeago from '~/components/Timeago.vue'

export default {
  name: 'WalletTransactionsPage',
  components: {
    Timeago,
  },
  mixins: [layoutMixin],
  middleware: 'authenticated',
  data() {
    return {
      transactions: [],
    }
  },
  async created() {
    const { data } = await this.$apollo.query({
      query: TRANSACTIONS_QUERY,
    })
    this.transactions = data.data
  },
}

const TRANSACTIONS_QUERY = gql`
  query userTransactions {
    data: userTransactions {
      id
      amount: ammount
      createdAt
    }
  }
`
</script>
