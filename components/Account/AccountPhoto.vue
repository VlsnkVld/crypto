<template>
  <div>
    <v-img
      class="rounded-circle mx-auto mb-4"
      :lazy-src="require('~/static/images/photo-placeholder.svg')"
      max-height="196"
      max-width="196"
      :src="require('~/static/images/photo-placeholder.svg')"
    />
    <v-btn rounded class="d-block v-btn--brand mx-auto" min-width="217">
      Add photo
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AccountPhoto',
}
</script>
