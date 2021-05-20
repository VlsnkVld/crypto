<template>
  <div
    class="coins"
    :class="{
      'mt-5': !$vuetify.breakpoint.lgAndUp,
      'mt-2': $vuetify.breakpoint.lgAndUp,
    }"
  >
    <div class="coins__grid">
      <svg
        v-for="n in count"
        :key="n"
        viewBox="0 0 59 33"
        width="59"
        height="33"
        class="coins__coin"
      >
        <path
          d="m58.6627 20.864c0 6.1515-13.1315 11.1382-29.3301 11.1382-16.1985 0-29.33003652-4.9869-29.33003652-11.1382v-9.7234h58.66013652z"
          :fill="colors[0]"
        />
        <path
          d="m29.3336 22.277c16.2004 0 29.3335-4.9869 29.3335-11.1385 0-6.15163-13.1331-11.1385-29.3335-11.1385-16.2005 0-29.3336 4.98687-29.3336 11.1385 0 6.1516 13.1331 11.1385 29.3336 11.1385z"
          :fill="colors[1]"
        />
        <g :fill="colors[2]">
          <path
            d="m29.3353 20.8637c-14.1174 0-25.60349-4.362-25.60349-9.7236 0-5.36138 11.48609-9.72335 25.60349-9.72335 14.1184 0 25.6045 4.36197 25.6045 9.72335 0 5.3616-11.4861 9.7236-25.6045 9.7236zm0-18.58421c-12.8649 0-23.33201 3.97482-23.33201 8.86081 0 4.886 10.46711 8.8608 23.33201 8.8608 12.8658 0 23.333-3.975 23.333-8.8608 0-4.88578-10.4672-8.86081-23.333-8.86081z"
          />
          <path
            d="m22.0728 15.9999h7.8342c7.6101 0 8.3009-4.6825 3.4948-5.5775 4.4706-1.04337 4.3349-5.08915-2.7446-5.08915h-8.5844v1.87827c2.1585-.11828 3.7647.25622 5.8902.51652.4574-1.66508 5.544-.28831 7.4012-1.12696-1.0902 1.49322-5.0059.41604-4.7161 1.59653.1128.34935 1.3296 1.33263.7959 2.17969.25.6574.4574 1.5026.956 1.8238.6099.3926.0153 1.5233-1.5934 1.8604-1.1039.1109-1.0673-.3474-1.5964-.5212-.9316-.3042-2.0249-.0873-3.4002-.8884-2.2979.5588-1.9777 1.9309-3.7372 3.348zm0-5.6226c2.3298-.51555 4.3928-.80762 7.3188-.58317-1.7824-.52216-4.6215-.85367-7.3188-.65739zm0 2.9386c2.676-1.3796 3.5618-1.8773 7.3188-2.5357-2.5448-.1249-5.0469-.1859-7.3188.6105z"
          />
        </g>
      </svg>
    </div>
    <div class="coins__subline">
      <!-- Message -->
      <fade-transition :duration="50" group>
        <div v-if="amount === 0" key="message" class="coins__message">
          {{ $t('game.messages.chose-bet') }}
        </div>
        <!-- Amount -->
        <animated-number
          v-else
          key="amount"
          class="coins__amount"
          :value="amount"
          :format-value="(value) => Math.floor(value).toLocaleString()"
          :duration="150"
        />
      </fade-transition>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'GameCoins',
  components: { AnimatedNumber, FadeTransition },
  computed: {
    amount() {
      return this.$game.bet.amount
    },
    count() {
      const count = this.$game.bet?.history?.length
      if (count < 1) {
        return 1
      } else if (count < 4) {
        return count
      } else {
        return 4
      }
    },
    colors() {
      if (this.amount === 0) {
        return ['#a1a1a1', '#ececec', '#a1a1a1']
      }

      return ['#f6c358', '#fef2c9', '#f6c358']
    },
  },
}
</script>

<style lang="scss">
.coins {
  display: flex;
  flex-direction: column;

  &__subline {
    height: 30px;
    text-align: center;
    padding: 0 75px;
  }

  &__message {
    font-weight: 500;
    font-size: 0.625rem;
    max-width: 226px;
    display: inline-block;
    margin: 0 auto;
  }

  &__amount {
    font-weight: bold;
    font-size: 1rem;
    text-shadow: 0 0 18px rgba(49, 119, 255, 0.7),
      0 0 71px rgba(49, 119, 255, 0.5);
  }

  &__grid {
    position: relative;
    height: 77px;
    margin-bottom: 7px;
  }

  &__coin {
    --base-position-left: 50%;
    --base-position-bottom: 20px;

    position: absolute;
    transform: translate(-50%, 50%);

    &:nth-child(1) {
      left: var(--base-position-left);
      bottom: var(--base-position-bottom);
    }

    &:nth-child(2) {
      left: calc(var(--base-position-left) - 5px);
      bottom: calc(var(--base-position-bottom) + 12px);
    }

    &:nth-child(3) {
      left: calc(var(--base-position-left) + 4px);
      bottom: calc(var(--base-position-bottom) + 24px);
    }

    &:nth-child(4) {
      left: var(--base-position-left);
      bottom: calc(var(--base-position-bottom) + 36px);
    }
  }
}
</style>
