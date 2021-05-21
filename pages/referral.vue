<template>
  <div class="referral py-8">
    <div v-if="true" class="px-3">
      <h1 class="text-h1 mb-10">
        {{ $t('referral.title') }}
      </h1>

      <div class="referral__info text-center">
        <h2 class="referral__empty-title text-h1 mb-4">
          {{ $t('referral.empty.title') }}
        </h2>
        <p class="text-subtitle-2 mb-10 font-weight-regular">
          Here you can invite friends to have more funand earn more bitcoin
        </p>
        <div>
          <h3 class="mb-3 text-lg-body-1 font-weight-bold">Send invitation</h3>

          <Socials></Socials>

          <span>or</span>
          <h3>Share link</h3>
          <div>
            <input type="text" />

            <button>Copy icon</button>
          </div>
        </div>
      </div>
    </div>

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
      <referral-banner />

      <partner-list />
    </div>
  </div>
</template>

<script>
import ReferralBanner from '../components/ReferralBanner.vue'
import PartnerList from '../components/PartnerList.vue'
import Heading from '~/components/Heading.vue'
import Balance from '~/components/Balance.vue'
import Socials from '~/components/Socials.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ReferralPage',
  components: {
    Heading,
    Balance,
    ReferralBanner,
    PartnerList,
    Socials,
  },
  mixins: [layoutMixin],
  head() {
    return {
      title: this.$t('referral.title'),
    }
  },
}
</script>

<style lang="scss">
.referral {
  &__empty-title {
    text-align: center;
    text-transform: capitalize;
    text-shadow: 0 0 18px rgba(49, 119, 255, 0.7),
      0 0 70px rgba(49, 119, 255, 0.5);
  }

  &__info {
    max-width: 570px !important;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
