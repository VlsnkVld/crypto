<template>
  <div
    class="game-bank align-self-end"
    :class="{ 'game-bank--desktop': desktop }"
  >
    <!-- Bank -->
    <div class="game-bank__value">
      <animated-number
        v-if="!desktop"
        :value="bank"
        :format-value="formatValue"
        :duration="100"
      />
      <coins v-else style="font-size: 1rem" :value="bank" />
    </div>
    <!-- Coins -->
    <div class="game-bank__coins">
      <div v-for="n in count" :key="n" class="game-bank__coin" />
    </div>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'
import Coins from '~/components/Amount.vue'

export default {
  name: 'GameBank',
  components: { AnimatedNumber, Coins },
  props: {
    desktop: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    bank() {
      return this.$game?.game?.bank ?? 0
    },
    count() {
      const count = Math.ceil((this.bank + 1) / 100)
      return count > 10 ? 10 : count
    },
  },
  methods: {
    formatValue(value) {
      return Math.floor(value).toLocaleString()
    },
  },
}
</script>

<style lang="scss">
.game-bank {
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  padding-bottom: 15px;
  width: 50px;

  &__value {
    font-weight: 500;
    text-align: center;
    margin-top: 33px;
  }

  &__coin {
    width: 36px;
    height: 4px;
    margin: 0 auto;
    margin-bottom: 4px;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0 0 18.9113px rgba(255, 49, 49, 0.7),
      0 0 73.2115px rgba(255, 49, 49, 0.5), inset 0 0 7.32115px #fdd65b;
    filter: blur(1.3508px);
  }

  &--desktop {
    width: 88px;
    .game-bank__coins {
      display: flex;
      // border: 1px solid #8dd9fc32;
      border-radius: 8px;
      margin-bottom: -20px !important;
      padding-bottom: 21px;
      height: 155px;
      width: 85px !important;
      flex-direction: column-reverse;
    }
    .game-bank__coin {
      display: inline-block;
      width: 88px !important;
      min-height: 32px !important;
      max-height: 32px !important;
      filter: none !important;
      box-shadow: none !important;
      background: url("data:image/svg+xml,%3Csvg viewBox='0 0 88 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20.5839C0 27.7226 19.6971 33.5048 43.997 33.5048C68.2969 33.5048 87.994 27.7226 87.994 20.5839V13.2747H0V20.5839Z' fill='%23E7AF1E'/%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M5.12006 13.2746H0V20.5839C0 22.7708 1.85445 24.8316 5.12006 26.6404V13.2746Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M8.46133 13.2744H6.89502V27.5298C7.39003 27.7596 7.9146 27.982 8.46133 28.2044V13.2744Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M38.1303 13.2231H28.9541V32.6823C31.8798 32.9936 34.9534 33.216 38.1303 33.342V13.2231Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M64.0995 13.2231H39.4819V33.3865C40.9522 33.431 42.4372 33.4532 43.9444 33.4532C51.2071 33.4532 58.0634 32.9343 64.0995 32.0225V13.2231Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M68.4301 13.2744H65.6152V31.8367C66.5757 31.681 67.514 31.5031 68.4301 31.3252V13.2744Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M73.7486 13.2744H69.5742V31.0954C71.0371 30.7915 72.4261 30.4579 73.7486 30.1021V13.2744Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M83.0347 13.2744H74.5825V29.8722C77.9663 28.9085 80.833 27.7892 83.0347 26.5512V13.2744Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M84.8081 13.2744V25.4245C86.862 23.9344 87.9998 22.2962 87.9998 20.5837V13.2744H84.8081Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M27.5968 13.2231H14.564V30.1472C18.3689 31.148 22.7797 31.9634 27.6042 32.5268V13.2231H27.5968Z' fill='%23e19a00'/%3E%3C/g%3E%3Cg style='mix-blend-mode:color-burn'%3E%3Cpath d='M12.3678 13.2231H9.02832V28.3977C10.0627 28.7906 11.1857 29.1687 12.3678 29.5319V13.2231Z' fill='%23e19a00'/%3E%3C/g%3E%3Cpath d='M87.994 13.2745C87.994 20.4133 68.2969 26.1954 43.997 26.1954C19.6971 26.1954 0 20.4133 0 13.2745C0 6.13571 19.6971 0.353516 43.997 0.353516C68.2969 0.353516 87.994 6.13571 87.994 13.2745Z' fill='%23BD8936'/%3E%3Cpath d='M84.9366 13.2764C84.9366 19.9185 66.6063 25.3004 43.9983 25.3004C21.3903 25.3004 3.06006 19.9185 3.06006 13.2764C3.06006 6.63426 21.3903 1.25238 43.9983 1.25238C66.6137 1.25238 84.9366 6.63426 84.9366 13.2764Z' fill='%23E7B142'/%3E%3Cpath d='M77.7092 13.2749C77.7092 18.7457 62.615 23.1713 44.004 23.1713C25.3856 23.1713 10.2988 18.7383 10.2988 13.2749C10.2988 7.81143 25.393 3.37843 44.004 3.37843C62.615 3.37101 77.7092 7.80402 77.7092 13.2749Z' fill='%23F2CD45'/%3E%3Cpath d='M74.467 13.2754C74.467 18.2199 60.8283 22.223 43.9979 22.223C27.1675 22.223 13.5288 18.2199 13.5288 13.2754C13.5288 8.33093 27.1675 4.32788 43.9979 4.32788C60.8283 4.32788 74.467 8.33093 74.467 13.2754Z' fill='%23FDE847'/%3E%3Cpath d='M35 20H44.548C53.8228 20 54.6647 14.2932 48.8073 13.2024C54.2558 11.9308 54.0904 7 45.4623 7L35 7L35.0001 9.28914C37.6308 9.14499 39.5883 9.60141 42.1787 9.91865C42.7362 7.88933 48.9355 9.56727 51.1989 8.54517C49.8702 10.365 45.0981 9.05221 45.4511 10.4909C45.5887 10.9167 47.0716 12.1151 46.4212 13.1475C46.7259 13.9487 46.9787 14.9788 47.5863 15.3702C48.3297 15.8487 47.6049 17.2267 45.6444 17.6376C44.299 17.7727 44.3436 17.2141 43.6988 17.0024C42.5633 16.6315 41.2309 16.8959 39.5547 15.9196C36.7542 16.6006 37.1445 18.2728 35 20ZM35.0001 13.1475C37.8396 12.5191 40.3538 12.1631 43.9199 12.4367C41.7475 11.8003 38.2874 11.3963 35.0001 11.6355V13.1475ZM35.0001 16.7288C38.2614 15.0475 39.341 14.4408 43.9199 13.6385C40.8184 13.4863 37.7689 13.4119 35 14.3825C35 15.1264 35.0001 15.9196 35.0001 16.7288Z' fill='%23E7B142'/%3E%3C/svg%3E%0A");
      background-size: fill;
      background-repeat: no-repeat;
      margin-bottom: -21px;
    }
  }
}
</style>
