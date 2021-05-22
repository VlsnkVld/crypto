<template>
  <div>
    <h5 class="text-subtitle-1 font-weight-medium" :class="marginTitle">
      Share link
    </h5>
    <v-form class="d-flex" @submit.prevent="copyLink">
      <v-text-field
        ref="shareLinkInput"
        class="auth-input"
        :value="sharingCode"
        type="text"
        name="share-code-input"
        :hide-details="true"
        :readonly="true"
        outlined
        solo
        height="48"
        background-color="transparent"
      >
      </v-text-field>
      <v-btn
        class="v-btn--brand ml-4"
        type="submit"
        width="48px"
        height="48px"
        min-width="auto"
      >
        <v-icon>$copy</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'ReferralShareLink',
  props: {
    marginTitle: {
      type: String,
      default: () => 'mb-3',
    },
  },
  data() {
    return {
      sharingCode: 'https://bitcybets.com/signup?r',
    }
  },
  methods: {
    copyLink() {
      const copyText = this.$refs.shareLinkInput.$el.querySelector('input')
      copyText.select()
      document.execCommand('copy')
    },
  },
}
</script>
