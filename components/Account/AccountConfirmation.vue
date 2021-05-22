<template>
  <v-card class="pa-9 blue-transparent-bg">
    <v-row class="ma-n2">
      <v-col class="pa-2 d-flex align-center d-flex align-center">
        <v-card-title class="account-section__header pa-0"
          >Account Confirmation</v-card-title
        >
      </v-col>
      <v-col class="pa-2">
        <v-btn
          type="submit"
          block
          large
          class="v-btn--brand text-none confirmation-btn"
          height="56"
        >
          <v-row align="center">
            <v-col cols="auto">
              <v-icon class="mr-2"> $passport </v-icon>
              <span class="text-subtitle-1 font-weight-medium"> Passport </span>
              <account-verification
                v-model="showAccountVerification"
              ></account-verification>
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <span class="text-subtitle-1 font-weight-medium text-uppercase">
                In review
              </span>
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <v-icon class="ml-auto"> $next </v-icon>
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <span class="text-subtitle-1 font-weight-medium text-uppercase">
                Verified
              </span>
            </v-col>
          </v-row>
        </v-btn></v-col
      >
      <v-col class="pa-2">
        <v-btn
          type="submit"
          block
          large
          class="v-btn--brand text-none confirmation-btn"
        >
          Save
        </v-btn></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
import AccountVerification from '~/components/Account/AccountVerification.vue'

export default {
  name: 'AccountConfirmation',
  components: {
    AccountVerification,
  },
  data() {
    return {
      showAccountVerification: true,
    }
  },
}
</script>
