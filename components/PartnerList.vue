<template>
  <v-list flat color="transparent">
    <template v-for="user of referrals">
      <v-list-item :key="user.id">
        <v-list-item-avatar>
          <avatar :user="user" />
        </v-list-item-avatar>
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
      <v-divider :key="user.id + '-d'" inset />
    </template>
  </v-list>
</template>

<script>
import gql from 'graphql-tag'
import Avatar from './Avatar.vue'

export default {
  name: 'PartnerList',
  components: { Avatar },
  props: {},
  data() {
    return {
      referrals: [],
    }
  },
  async created() {
    try {
      const { data } = await this.$apollo.query({
        query: REFERRALS_QUERY,
      })

      this.referrals = data.data
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
  &--bounty,
  &--bounty .v-icon {
    color: #fdd65b;
  }
}
</style>
