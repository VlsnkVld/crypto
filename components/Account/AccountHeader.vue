<template>
  <v-row>
    <v-col class="d-flex align-center">
      <v-btn :to="{ path: '/' }" icon small>
        <v-icon>$left</v-icon>
      </v-btn>
      <h5 class="text-h5 font-weight-bold ml-2">Profile Info</h5>
    </v-col>
    <v-col v-if="success" cols="auto">
      <v-chip class="py-6 px-4 green-linear-bg" label>
        Changes saved
        <v-icon right class="ml-9 mr-0"> $complete </v-icon>
      </v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AccountHeader',
  props: {
    success: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>
