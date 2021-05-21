<template>
  <div>
    <!-- QR-code -->
    <div class="text-center mb-2">
      <img :src="paymethod.qrcode" width="100" height="100" alt="qr" />
    </div>

    <!-- Our BTC address -->
    <span class="font-weight-medium">Our {{ paymethod.iso }} address</span>
    <v-text-field class="mt-2" outlined :value="paymethod.address" readonly>
      <template #append-outer>
        <v-btn icon style="margin-top: -10px">
          <v-icon>$clipboard</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <!-- Value -->
    <v-row>
      <v-col>
        <span class="font-weight-medium">
          Value
          <span class="primary--text">{{ paymethod.iso }}</span>
        </span>
        <v-text-field class="mt-2" outlined placeholder="0" />
      </v-col>
      <v-col style="max-width: 32px; padding-top: 59px">=</v-col>
      <v-col>
        <span class="font-weight-medium">
          Value
          <span class="primary--text">Bitcy</span>
        </span>
        <v-text-field
          class="mt-2"
          outlined
          placeholder="0"
          hint="1 Bitcy = 1 $"
          persistent-hint
        />
      </v-col>
    </v-row>

    <!-- Transaction ID -->
    <span class="font-weight-medium">Transaction ID</span>
    <v-text-field class="mt-2" outlined placeholder="Your transaction ID" />

    <!-- Submit -->
    <v-btn block rounded large class="v-btn--brand mt-2 mb-3">Continue</v-btn>

    <!-- Info -->
    <p class="text-body-2 text--disabled">
      Please, send funds to the specified address or use a QR code for a
      deposit. Your account will be top-up with the required amount.
    </p>
    <p class="text-body-2 text--disabled">
      If a deposit amount is less than
      <span class="primary--text font-weight-bold"
        >0.0002 {{ paymethod.iso }}</span
      >
      the operation will not be processed.
    </p>
  </div>
</template>

<script>
export default {
  name: 'BtcDeposit',
  props: {
    short: {
      type: Boolean,
      default: () => false,
    },
    paymethod: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
