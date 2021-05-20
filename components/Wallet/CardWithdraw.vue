<template>
  <div>
    <!-- Amount -->
    <span class="font-weight-medium">Enter order amount</span>
    <v-text-field
      class="mt-2 mb-4"
      outlined
      placeholder="0"
      hint="Commission: 3%"
      persistent-hint
    >
      <template #message>
        3% <span class="primary--text">&middot;</span> 15 min - 12 h
      </template>
    </v-text-field>

    <!-- Card number -->
    <span class="font-weight-medium">Card number</span>
    <v-text-field class="mt-2" outlined placeholder="xxxx xxxx xxxx xxxx" />

    <v-btn block rounded large class="v-btn--brand mt-2 mb-4">Continue</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CardWithdraw',
}
</script>
