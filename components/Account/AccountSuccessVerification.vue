<template>
  <div>
    <img
      class="d-block mx-auto mt-9 mb-9"
      src="~/static/images/robot-developer.svg"
      alt="robot-developer"
      width="113"
      height="168"
    />

    <div class="text-center mb-6">
      <v-icon class="mr-2"> $account </v-icon>
      <span class="text-subtitle-1 font-weight-medium"> Passport </span>
    </div>
    <div class="success-verification__message text-center green--text">
      <span class="font-weight-medium"> Document successfully uploaded </span>
      <v-icon class="ml-2 green--text"> $checkboxRound </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountSuccessVerification',
}
</script>

<style lang="scss" scoped>
.success-verification__message {
  font-size: 18px;
}
</style>
