<template>
  <div class="referral py-8">
    <referral-empty v-if="false" class="px-3"> </referral-empty>

    <div v-else>
      <v-row>
        <v-col>
          <!-- Header -->
          <div class="d-flex justify-space-between align-center mb-4">
            <h5 class="text-h5 font-weight-bold mr-2">
              {{ $t('referral.title') }}
            </h5>
            <v-chip class="py-6 px-4" color="#30A3D8" label>
              All Bets, Bonuses, Deposits & Withdraw showed in Bitcy. 1 Bitcy =
              1$
              <v-icon right class="ml-2 mr-0"> $info </v-icon>
            </v-chip>
          </div>
          <partner-list />
        </v-col>
        <v-col cols="auto">
          <div class="referral__right-col">
            <!-- Invite friends -->
            <v-btn
              rounded
              large
              class="d-block v-btn--brand mb-9 ml-auto"
              width="250"
              @click="showInviteModal = true"
            >
              Invite friends
            </v-btn>
            <!-- Balance -->
            <!-- <balance type="referral"> -->
            <!-- Action button -->
            <!-- <v-btn block rounded large class="v-btn--brand mt-5">
                Withdraw to My wallet
              </v-btn>
            </balance> -->
            <referral-total-bonus class="mb-3" />

            <!-- Banner -->
            <!-- <referral-banner /> -->
            <referral-new-banner @open-modal="showInviteModal = true" />
          </div>
        </v-col>
      </v-row>
      <base-modal v-model="showInviteModal" title="Invite friends" :width="495">
        <h5 class="text-subtitle-1 font-weight-medium mb-3">Send invitation</h5>
        <socials class="mb-6" />
        <referral-share-link margin-title="mb-1" />
      </base-modal>
    </div>
  </div>
</template>

<script>
import ReferralEmpty from '../components/Referral/ReferralEmpty.vue'
// import ReferralBanner from '../components/ReferralBanner.vue'
import PartnerList from '../components/PartnerList.vue'
import BaseModal from '~/components/Modals/BaseModal.vue'
import ReferralNewBanner from '~/components/ReferralNewBanner.vue'
import ReferralTotalBonus from '~/components/Referral/ReferralTotalBonus.vue'
import Socials from '~/components/Socials.vue'
import ReferralShareLink from '~/components/Referral/ReferralShareLink.vue'
// import Balance from '~/components/Balance.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ReferralPage',
  components: {
    // Balance,
    BaseModal,
    ReferralEmpty,
    ReferralTotalBonus,
    // ReferralBanner,
    ReferralNewBanner,
    PartnerList,
    Socials,
    ReferralShareLink,
  },
  mixins: [layoutMixin],
  data() {
    return {
      showInviteModal: false,
    }
  },
  head() {
    return {
      title: this.$t('referral.title'),
    }
  },
}
</script>

<style lang="scss" scoped>
.referral__right-col {
  min-width: 275px;
  max-width: 275px;
}
</style>
