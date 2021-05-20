<template>
  <v-progress-linear
    :value="$game.progress"
    class="game-progress"
    color="white accent-4"
  />
</template>

<script>
export default {
  name: 'GameProgress',
}
</script>

<style lang="scss">
.game-progress {
  display: block;
  overflow: unset !important;
  backdrop-filter: blur(5px);

  .v-progress-linear__determinate {
    box-shadow: 0 0 18.9113px rgba(255, 255, 255, 0.7),
      0 0 73.2115px rgba(255, 255, 255, 0.5),
      inset 0 0 7.32115px rgba(255, 255, 255, 0.5);
  }
}
</style>
