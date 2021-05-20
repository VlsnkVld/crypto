<template>
  <div>
    <!-- Header -->
    <heading>{{ $t('referral.title') }}</heading>

    <!-- Balance -->
    <balance type="referral">
      <!-- Action button -->
      <v-btn block rounded large class="v-btn--brand mt-5">
        Withdraw to My wallet
      </v-btn>
    </balance>

    <!-- Banner -->
    <referral-banner />

    <partner-list />
  </div>
</template>

<script>
import ReferralBanner from '../components/ReferralBanner.vue'
import PartnerList from '../components/PartnerList.vue'
import Heading from '~/components/Heading.vue'
import Balance from '~/components/Balance.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ReferralPage',
  components: {
    Heading,
    Balance,
    ReferralBanner,
    PartnerList,
  },
  mixins: [layoutMixin],
  head() {
    return {
      title: this.$t('referral.title'),
    }
  },
}
</script>
