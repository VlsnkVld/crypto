<template>
  <v-card class="pa-9 blue-transparent-bg">
    <v-row class="ma-n2">
      <v-col cols="4" class="pa-2 d-flex align-center d-flex align-center">
        <v-card-title class="account-section__header pa-0"
          >Account Confirmation</v-card-title
        >
      </v-col>
      <v-col cols="4" class="pa-2 ml-auto">
        <v-btn
          block
          large
          class="text-none confirmation-btn px-4"
          :class="{
            'v-btn--brand': false,
            'orange-linear-bg': false,
            'green-linear-bg': true,
          }"
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
            <v-col v-if="false" cols="auto" class="ml-auto">
              <span class="text-subtitle-1 font-weight-medium text-uppercase">
                In review
              </span>
            </v-col>
            <v-col v-if="false" cols="auto" class="ml-auto">
              <v-icon> $next </v-icon>
            </v-col>
            <v-col cols="auto" class="d-flex align-center ml-auto">
              <span class="text-subtitle-1 font-weight-medium text-uppercase">
                Verified
              </span>
              <v-icon class="ml-2"> $next </v-icon>
            </v-col>
            <v-col v-if="false" cols="auto" class="d-flex align-center ml-auto">
              <v-icon class="mr-1"> $info-fill </v-icon>
              <span class="font-weight-medium text-uppercase"> Declined </span>
              <v-icon class="ml-2"> $next </v-icon>
            </v-col>
          </v-row>
        </v-btn></v-col
      >
      <v-col cols="4" class="pa-2 ml-auto">
        <v-btn
          block
          large
          class="text-none confirmation-btn px-4"
          :class="{
            'v-btn--brand': false,
            'orange-linear-bg': false,
            'green-linear-bg': false,
            'red-linear-bg': true,
          }"
          height="56"
        >
          <v-row align="center">
            <v-col cols="auto">
              <v-icon class="mr-2"> $account </v-icon>
              <span class="text-subtitle-1 font-weight-medium">
                Driver license
              </span>
            </v-col>
            <v-col v-if="false" cols="auto" class="ml-auto">
              <span class="text-subtitle-1 font-weight-medium text-uppercase">
                In review
              </span>
            </v-col>
            <v-col v-if="false" cols="auto" class="ml-auto">
              <v-icon> $next </v-icon>
            </v-col>
            <v-col v-if="false" cols="auto" class="d-flex align-center ml-auto">
              <span class="text-subtitle-1 font-weight-medium text-uppercase">
                Verified
              </span>
              <v-icon class="ml-2"> $next </v-icon>
            </v-col>
            <v-col v-if="true" cols="auto" class="d-flex align-center ml-auto">
              <v-icon class="mr-1"> $info-fill </v-icon>
              <span class="font-weight-medium text-uppercase"> Declined </span>
              <v-icon class="ml-2"> $next </v-icon>
            </v-col>
          </v-row>
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
