<template>
  <span class="game-current-rate font-weight-bold">
    <!-- Desktop -->
    <span v-if="$vuetify.breakpoint.lgAndUp" class="game-current-rate--desktop">
      <!-- BTC Icon -->
      <svg
        width="23"
        height="31"
        fill="currentColor"
        viewBox="0 0 23 31"
        class="primary--text game-current-rate__icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.14007 7.9344L7.16514 13.0814H14.55C15.8616 13.0814 16.9245 12.015 16.9179 10.7034L16.9161 10.3124C16.9097 9.00063 15.8365 7.9344 14.5247 7.9344H8.15102H7.14007ZM17.856 20.9052L17.854 20.492C17.847 19.029 16.6513 17.8411 15.1885 17.8411H14.5739H7.18924L7.21719 23.5563H15.2162C16.679 23.5563 17.8632 22.3664 17.856 20.9052ZM20.1995 15.0626C21.6691 16.4167 22.6009 18.3466 22.6114 20.492L22.6135 20.9052C22.6334 24.9897 19.3252 28.3139 15.2391 28.3139H15.0583L15.0687 30.5H10.3111L10.3004 28.3139H8.35042L8.36111 30.5H3.60347L3.59278 28.3139H2.48217H0.12267L0.0994514 23.5563H2.45896L2.43122 17.8411L2.40779 13.0814L2.38272 7.9344H0.023219L0 3.17491H3.47011L3.45717 0.5H8.21481L8.22775 3.17491H10.1779L10.1648 0.5H14.9226L14.9356 3.19731C18.6708 3.42395 21.6559 6.52338 21.6744 10.3124L21.6763 10.7034C21.6843 12.3454 21.1289 13.8544 20.1995 15.0626Z"
        />
      </svg>
      <!-- Amount -->
      <span class="game-current-rate__value">
        <animated-number
          :value="value"
          :format-value="formatValue"
          :duration="300"
        />
      </span>
      <!-- USD -->
      <span class="primary--text">$</span>
    </span>

    <!-- Standard -->
    <template v-else>
      <span>BTC</span>
      <span class="primary--text game-current-rate--offset">$</span>
      <span class="font-weight-light game-current-rate__value">
        <animated-number
          :value="value"
          :format-value="formatValue"
          :duration="300"
        />
      </span>
    </template>
  </span>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  name: 'GameCurrentRate',
  components: {
    AnimatedNumber,
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatValue(value) {
      return Number(value.toFixed(2)).toLocaleString().padEnd(9, '0')
    },
  },
}
</script>

<style lang="scss">
.game-current-rate {
  --value-width: 95px;

  display: inline-flex;
  font-size: 19px;

  &--desktop {
    --value-width: 127px;

    font-size: 1.5rem;
    text-shadow: none !important;
  }

  &__icon {
    margin-bottom: -7px;
    margin-right: 7px;
  }

  &--offset {
    margin: 0 5px;
  }

  &__value {
    display: inline-block;
    width: var(--value-width);
    text-align: left;
  }
}
</style>
