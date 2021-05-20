<template>
  <div>
    <p class="font-weight-medium">Enter the amount to top up</p>
    <!-- Value -->
    <v-row>
      <v-col>
        <span class="font-weight-medium">
          Value
          <span class="primary--text">BTC</span>
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

    <!-- Card number -->
    <span class="font-weight-medium">Card number</span>
    <v-text-field class="mt-2" outlined placeholder="xxxx xxxx xxxx xxxx" />

    <!-- Date CVV -->
    <v-row>
      <v-col>
        <span class="font-weight-medium">Date</span>
        <v-text-field
          class="mt-2"
          outlined
          placeholder="MM / YY"
          hint="Commission: 3 %"
          persistent-hint
        />
      </v-col>
      <v-col>
        <span class="font-weight-medium">CVV</span>
        <v-text-field class="mt-2" outlined placeholder="XXX" />
      </v-col>
    </v-row>

    <v-btn block rounded large class="v-btn--brand mt-2 mb-4">Continue</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CardDeposit',
  props: {
    short: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {}
  },
}
</script>
