<template>
  <div class="amount-picker justify-space-around mt-6">
    <v-btn
      v-for="amount in options"
      :key="amount"
      retain-focus-on-click
      text
      class="amount-picker__item"
      @click="$game.addAmount(amount)"
    >
      {{ amount }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'GameAmountPicker',
  data() {
    return { options: [5, 10, 50, 200, 1000] }
  },
  computed: {},
}
</script>

<style lang="scss">
.amount-picker {
  --size: 62px;
  --opacity: 0.5;
  --color: #fdd65b;

  display: flex;
  flex-direction: row;

  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.875rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 !important;
    color: var(--color) !important;
    width: var(--size) !important;
    height: var(--size) !important;
    border-radius: 50%;
    transition-property: all !important;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, calc(var(--opacity) - 0.2)),
        rgba(255, 255, 255, 0.8)
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, var(--opacity)) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    box-shadow: 0 0 73px rgba(255, 49, 49, var(--shadow)),
      inset 0 0 7.32115px rgba(253, 214, 91, var(--opacity));

    .v-btn__content {
      --size: 4px;

      border: 2px solid rgba(246, 195, 88, var(--opacity));
      border-radius: 50%;
      height: calc(100% - calc(var(--size) * 2));
      width: calc(100% - calc(var(--size) * 2));
      margin: var(--size) !important;
    }

    &:focus,
    &:hover {
      --opacity: 1;
      --color: #f7931a;
    }

    &:nth-child(1),
    &:nth-child(5) {
      --shadow: 0.2;
    }
    &:nth-child(2),
    &:nth-child(4) {
      --shadow: 0.3;
    }
    &:nth-child(3) {
      --shadow: 0.5;
    }

    &::before {
      display: none !important;
    }
  }
}
</style>
