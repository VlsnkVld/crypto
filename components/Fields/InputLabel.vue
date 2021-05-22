<template>
  <label class="d-flex align-center mb-1 font-weight-medium" :for="forInput">
    <span class="mr-2">{{ text }} </span>
    <span
      v-if="confirmStatus === 'confirmed'"
      class="text-subtitle-2 green--text text-uppercase ml-auto"
      >Confirmed
    </span>
    <span
      v-if="confirmStatus === 'not-confirmed'"
      class="text-subtitle-2 red--text text-uppercase ml-auto"
      >Not Confirmed
    </span>
  </label>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    forInput: {
      type: String,
      default: () => '',
    },
    text: {
      type: String,
      required: true,
    },
    confirmStatus: {
      type: String,
      default: () => '',
    },
  },
}
</script>
