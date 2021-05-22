<template>
  <!-- <v-list flat color="transparent">
    <template v-for="user of referrals">
      <v-list-item :key="user.id">
        <v-list-item-content>
          <v-list-item-title>
            <v-icon>$people</v-icon>
            <span v-if="!user.nickname">#{{ user.id }}</span>
            <span v-else>{{ user.nickname }}</span>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <div class="d-flex partner-list--bounty">
            <v-icon class="mr-2">$gift</v-icon>
            {{ format(user.totalReferalBounty) }}
            Bitcy
          </div>
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="user.id + '-d'" />
    </template>
  </v-list> -->
  <v-data-table :headers="headers" :items="referrals" class="transparent">
    <!-- eslint-disable-next-line -->
    <template v-slot:header.user="{ header }">
      <div class="d-flex align-center white--text">
        <v-icon class="mr-2">$people</v-icon>
        <span class="font-weight-medium">{{ header.text }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:header.bets="{ header }">
      <div class="d-flex align-center partner-list--bounty">
        <v-icon class="mr-2">$dollar</v-icon>
        <span class="font-weight-medium">{{ header.text }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:header.deposited="{ header }">
      <div class="d-flex align-center partner-list--green">
        <v-icon class="mr-2">$up</v-icon>
        <span class="font-weight-medium">{{ header.text }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:header.withdraw="{ header }">
      <div class="d-flex align-center red--text">
        <v-icon class="mr-2 red--text">$down</v-icon>
        <span class="font-weight-medium">{{ header.text }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:header.total_time="{ header }">
      <div class="d-flex align-center partner-list--opacity">
        <v-icon class="mr-2">$time</v-icon>
        <span class="font-weight-medium">{{ header.text }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:header.total_bonus="{ header }">
      <div class="d-flex align-center partner-list--bounty">
        <v-icon class="mr-2">$gift</v-icon>
        <span class="font-weight-medium">{{ header.text }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:item.user="{ item }">
      <div class="d-flex align-center white--text">
        <v-icon class="mr-2">$people</v-icon>
        <span class="font-weight-medium">{{ item.user }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:item.bets="{ item }">
      <div class="d-flex align-center partner-list--bounty">
        <v-icon class="mr-2">$dollar</v-icon>
        <span class="font-weight-medium">{{ item.bets }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:item.deposited="{ item }">
      <div class="d-flex align-center partner-list--green">
        <v-icon class="mr-2">$up</v-icon>
        <span class="font-weight-medium">{{ item.deposited }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:item.withdraw="{ item }">
      <div class="d-flex align-center red--text">
        <v-icon class="mr-2 red--text">$down</v-icon>
        <span class="font-weight-medium">{{ item.withdraw }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:item.total_time="{ item }">
      <div class="d-flex align-center partner-list--opacity">
        <v-icon class="mr-2">$time</v-icon>
        <span class="font-weight-medium">{{ item.total_time }}</span>
      </div>
    </template>
    <!-- eslint-disable-next-line -->
    <template v-slot:item.total_bonus="{ item }">
      <div class="d-flex align-center partner-list--bounty">
        <v-icon class="mr-2">$gift</v-icon>
        <span class="font-weight-medium">{{ item.total_bonus }}</span>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'PartnerList',
  props: {},
  data() {
    return {
      headers: [
        { text: 'Player', value: 'user', sortable: false },
        { text: 'Total Bets', value: 'bets', sortable: false },
        { text: 'Deposited', value: 'deposited', sortable: false },
        { text: 'Withdraw', value: 'withdraw', sortable: false },
        { text: 'Total Time', value: 'total_time', sortable: false },
        { text: 'Total Bonus', value: 'total_bonus', sortable: false },
      ],
      referrals: [],
    }
  },
  async created() {
    try {
      const { data } = await this.$apollo.query({
        query: REFERRALS_QUERY,
      })

      this.referrals = data.data
      this.referrals = [
        {
          id: 4,
          user: 'testuser',
          bets: '15.900',
          deposited: '1.500',
          withdraw: '1.500',
          total_time: '40 hours',
          total_bonus: '15.900',
        },
      ]
    } catch {}
  },
  methods: {
    format(value) {
      return Number(value ?? 0).toLocaleString()
    },
  },
}

const REFERRALS_QUERY = gql`
  query {
    data: referals {
      id
      nickname: nickName
      totalReferalBounty
    }
  }
`
</script>

<style lang="scss">
.partner-list {
  &--green,
  &--green .v-icon {
    color: #a8e063;
  }
  &--opacity,
  &--opacity .v-icon {
    color: #fff;
    opacity: 0.4;
  }
  &--bounty,
  &--bounty .v-icon {
    color: #fdd65b;
  }
}
</style>
