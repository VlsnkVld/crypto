<template>
  <div>
    <v-img
      class="rounded-circle mx-auto mb-4"
      :lazy-src="require('~/static/images/photo-placeholder.svg')"
      max-height="196"
      max-width="196"
      :src="require('~/static/images/photo-placeholder.svg')"
    />
    <v-btn
      rounded
      class="d-block v-btn--brand mx-auto"
      min-width="217"
      @click="$refs.inputUpload.click()"
    >
      Add photo
    </v-btn>
    <input
      v-show="false"
      ref="inputUpload"
      type="file"
      @change="uploadPhoto($event)"
    />
    <v-btn text class="d-block text-decoration-underline mt-3 mx-auto">
      Delete photo
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AccountPhoto',
  data() {
    return {
      file: null,
    }
  },
  methods: {
    uploadPhoto(event) {
      if (event.target.files.length !== 0) {
        this.file = event.target.files[0]
      }
    },
  },
}
</script>
