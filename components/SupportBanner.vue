<template>
  <v-card class="mx-auto bg--brand mt-10 mb-5" max-width="344" to="#">
    <v-card-text>
      <v-row>
        <v-col>
          <h6 class="text-h6 text-left">How we can help you?</h6>
          <div class="mt-7">
            <span class="text-decoration-underline text-uppercase white--text">
              Ask us
            </span>
            <v-icon small>$linkArrow</v-icon>
          </div>
        </v-col>
        <v-col cols="auto">
          <img
            width="78"
            height="91"
            src="~/static/images/robot-supporter.svg"
            alt="Robot supporter"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SupportBanner',
}
</script>
