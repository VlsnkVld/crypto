<template>
  <v-row no-gutters class="info-message">
    <v-col cols="auto">
      <img
        src="~/static/images/robot-info.svg"
        width="63"
        height="92"
        alt="Robot"
      />
    </v-col>
    <!-- Info -->
    <v-col>
      <div class="info-message__bubble">
        <slot />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InfoMessage',
}
</script>

<style lang="scss">
.info-message {
  padding: 16px;
  &__bubble {
    margin-left: 16px;
    padding: 12px;
    border-radius: 5px;
    background: linear-gradient(90deg, #6441a5 0%, #6441a5 100%);
  }
}
</style>
