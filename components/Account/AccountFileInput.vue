<template>
  <div class="pa-0">
    <p v-if="text && step" class="mb-4 text-body-2">
      <span class="font-weight-bold">{{ step }}</span>
      {{ text }}
    </p>
    <v-row v-if="!file" class="rounded ma-0 white-transparent-bg">
      <v-col class="pa-4 d-flex align-center">
        <label :for="idText" class="d-flex align-center label-pointer">
          <v-icon class="mr-2"> $upload </v-icon>
          <span class="text-caption font-weight-medium">Upload document</span>
        </label>
        <v-file-input :id="idText" v-model="file" class="d-none" hide-input />
      </v-col>
      <v-col cols="auto" class="d-flex pa-4">
        <img
          src="~/static/images/fake-passport.jpg"
          alt="passport"
          width="89"
          height="64"
        />
      </v-col>
    </v-row>
    <v-row
      v-else
      class="rounded ma-0 white-transparent-bg"
      justify="space-between"
    >
      <v-col cols="auto" class="d-flex pa-4">
        <img
          src="~/static/images/fake-passport.jpg"
          alt="passport"
          width="89"
          height="64"
        />
      </v-col>
      <v-col cols="auto" class="pa-4 d-flex align-center">
        <v-btn icon width="28" height="28" class="rounded mr-3">
          <label
            :for="idText + '_change'"
            class="d-flex align-center label-pointer ma-n1"
          >
            <v-icon> $edit </v-icon>
          </label>
          <v-file-input
            :id="idText + '_change'"
            v-model="file"
            class="d-none"
            hide-input
          />
        </v-btn>
        <v-btn icon width="28" height="28" class="rounded" @click="file = null">
          <v-icon>$delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AccountFileInput',
  props: {
    idText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: () => '',
    },
    step: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      file: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.label-pointer {
  cursor: pointer;
}
</style>
