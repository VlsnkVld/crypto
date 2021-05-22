<template>
  <div>
    <v-card class="bg--brand rounded-lg" max-width="344" @click="open">
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
  </div>
</template>

<script>
export default {
  name: 'ReferralNewBanner',
  methods: {
    open() {
      this.$emit('open-modal')
    },
  },
}
</script>
