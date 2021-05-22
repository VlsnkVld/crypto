<template>
  <div>
    <v-card class="bg--brand mx-auto mt-10 mb-5" max-width="344" @click="open">
      <v-card-text>
        <v-row>
          <v-col>
            <h6 class="text-h6 text-left">Bets with friends!</h6>
            <p class="white--text mt-2">
              Start playing with your friends now 🤑!
            </p>
            <div class="mt-2">
              <span
                class="text-decoration-underline text-uppercase white--text"
              >
                Invite friends
              </span>
              <v-icon small>$linkArrow</v-icon>
            </div>
          </v-col>
          <v-col cols="auto">
            <img
              height="110"
              width="75"
              src="~/static/images/robot-developer.svg"
              alt="Robot developer"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <base-modal v-model="showModal" title="Invite friends" :width="495">
      <h5 class="text-subtitle-1 font-weight-medium mb-3">Send invitation</h5>
      <socials class="mb-6" />
      <referral-share-link margin-title="mb-1" />
    </base-modal>
  </div>
</template>

<script>
import BaseModal from '~/components/BaseModal.vue'
import Socials from '~/components/Socials.vue'
import ReferralShareLink from '~/components/Referral/ReferralShareLink.vue'

export default {
  name: 'ReferralNewBanner',
  components: { BaseModal, Socials, ReferralShareLink },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    open() {
      this.showModal = true
    },
  },
}
</script>
