<template>
  <img
    src="~/static/images/globe.png"
    class="game-chart-desktop-background"
    alt="globe"
  />
</template>

<script>
export default {
  name: 'GameChartDesktopBackground',
}
</script>

<style lang="scss">
.game-chart-desktop-background {
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(4px);
  z-index: -1;
}
</style>
