<template>
  <div>
    <h1 class="text-h1 mb-16">
      {{ $t('referral.title') }}
    </h1>

    <div class="text-center">
      <h2 class="referral__empty-title text-h4 mb-4 font-weight-bold">
        {{ $t('referral.empty.title') }}
      </h2>
      <p class="text-subtitle-1 mb-14">
        Here you can invite friends to have more funand earn more bitcoin
      </p>
      <div>
        <h3 class="mb-3 text-subtitle-1 font-weight-medium">Send invitation</h3>

        <div class="d-flex justify-center mb-9">
          <Socials></Socials>
        </div>

        <span class="d-inline-block text-body-2 mb-9">or</span>
        <v-row justify="center">
          <v-col cols="auto" class="px-0 pt-7">
            <img
              src="~/static/images/robot-loser.svg"
              alt="robot-looser"
              width="129"
              height="161"
            />
          </v-col>
          <v-col class="px-0 mx-16 referral__share-link-wrapper">
            <referral-share-link></referral-share-link>
          </v-col>
          <v-col cols="auto" class="px-0 pt-7">
            <img
              src="~/static/images/robot-developer.svg"
              alt="robot-developer"
              width="129"
              height="161"
          /></v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from '~/components/Socials.vue'
import ReferralShareLink from '~/components/Referral/ReferralShareLink.vue'

export default {
  name: 'ReferralEmpty',
  components: { Socials, ReferralShareLink },
}
</script>

<style lang="scss" scoped>
.referral {
  &__empty-title {
    text-transform: capitalize;
    text-shadow: 0 0 18px rgba(49, 119, 255, 0.7),
      0 0 70px rgba(49, 119, 255, 0.5);
  }
  &__share-link-wrapper {
    max-width: 375px;
  }
}
</style>
