<template>
  <div class="referral py-8">
    <referral-empty v-if="false" class="px-3"> </referral-empty>

    <div v-else>
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
      <!-- <referral-banner /> -->
      <referral-new-banner />

      <partner-list />
    </div>
  </div>
</template>

<script>
import ReferralEmpty from '../components/Referral/ReferralEmpty.vue'
// import ReferralBanner from '../components/ReferralBanner.vue'
import ReferralNewBanner from '../components/ReferralNewBanner.vue'
import PartnerList from '../components/PartnerList.vue'
import Heading from '~/components/Heading.vue'
import Balance from '~/components/Balance.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ReferralPage',
  components: {
    Heading,
    Balance,
    ReferralEmpty,
    // ReferralBanner,
    ReferralNewBanner,
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
