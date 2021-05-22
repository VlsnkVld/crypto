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
  <div>
    <v-data-table
      :headers="headers"
      :items="referrals"
      class="partner-list__table transparent"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :disable-sort="true"
      @page-count="pageCount = $event"
    >
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
    <v-pagination v-model="page" :length="pageCount" :total-visible="5" />
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'PartnerList',
  props: {},
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 2,
      headers: [
        { text: 'Player', value: 'user' },
        { text: 'Total Bets', value: 'bets' },
        { text: 'Deposited', value: 'deposited' },
        { text: 'Withdraw', value: 'withdraw' },
        { text: 'Total Time', value: 'total_time' },
        { text: 'Total Bonus', value: 'total_bonus' },
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
          id: 1,
          user: 'Афанасий',
          bets: '15.900',
          deposited: '1.500',
          withdraw: '1.500',
          total_time: '40 hours',
          total_bonus: '15.900',
        },
        {
          id: 2,
          user: 'Жорж',
          bets: '15.900',
          deposited: '1.500',
          withdraw: '1.500',
          total_time: '40 hours',
          total_bonus: '15.900',
        },
        {
          id: 3,
          user: 'Игорь',
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
  &__table {
    background-color: transparent !important;
    tr:hover {
      background-color: transparent !important;
    }
  }
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

.v-pagination {
  &__item.v-pagination__item--active.primary {
    background-color: transparent !important;
  }

  &__item {
    background: none !important;
    box-shadow: none !important;
    font-weight: 500 !important;
    font-size: 14px !important;

    &--active {
      color: var(--primary-color) !important;
    }
  }

  &__navigation {
    display: none !important;
  }
}
</style>
