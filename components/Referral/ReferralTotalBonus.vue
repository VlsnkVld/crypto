<template>
  <v-card class="total-bonus">
    <v-card-title class="mb-2"> Total bonus </v-card-title>
    <v-card-text>
      <v-row class="mb-3">
        <v-col>
          <span class="text-body-1 font-weight-medium"
            >1.500
            <span class="primary-text">Bitcy</span>
          </span>
        </v-col>
        <v-col>
          <span class="text-body-1 font-weight-medium"
            >0.0020
            <span class="primary-text">BTC</span>
          </span>
        </v-col>
      </v-row>
      <v-btn block rounded large class="v-btn--brand">
        Withdraw to My wallet
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ReferralTotalBonus',
}
</script>

<style lang="scss">
.total-bonus {
  background: rgba(194, 206, 247, 0.13) !important;
}
</style>
