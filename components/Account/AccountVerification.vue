<template>
  <div>
    <div class="text-center mb-6">
      <v-icon class="mr-2"> $account </v-icon>
      <span class="text-subtitle-1 font-weight-medium"> Passport </span>
    </div>
    <div v-if="false" class="pa-4 mt-0 mb-2 red-linear-bg rounded">
      <v-row class="mb-n1" align="center">
        <v-col class="my-0">
          <p class="mb-0 text-body-2 font-weigth-bold">
            Your documents photo declined
          </p>
        </v-col>
        <v-col class="my-0 ml-auto" cols="auto">
          <v-icon>$info</v-icon>
        </v-col>
      </v-row>
      <p class="text-caption">
        Some of the photos of documents do not correspond to the samples. Please
        make sure that everything is done according to the examples and attach
        them again.
      </p>
    </div>
    <v-form>
      <account-file-input
        class="mb-6"
        step="Step 1."
        text="Upload a photo of the first spread of your passport/ID card front side"
        id-text="step-1-file"
      />
      <account-file-input
        class="mb-6"
        step="Step 2."
        text="Upload a photo of the passport page with the actual photo/ID card back side."
        id-text="step-3-file"
      />
      <account-file-input
        class="mb-9"
        step="Step 3."
        text="Upload a selfie with your passport in hand, holding the passport open on the page with the actual photo/holding ID card in hand."
        id-text="step-3-file"
      />

      <v-btn
        type="submit"
        block
        rounded
        large
        height="48"
        class="v-btn--brand"
        :disabled="false"
      >
        Save
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import AccountFileInput from '~/components/Account/AccountFileInput.vue'

export default {
  name: 'AccountVerification',
  components: { AccountFileInput },
}
</script>
