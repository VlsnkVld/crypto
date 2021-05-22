<template>
  <label class="d-inline-block mb-1 font-weight-medium" :for="forInput">{{
    text
  }}</label>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    forInput: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
