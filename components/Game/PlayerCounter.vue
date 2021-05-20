<template>
  <div
    class="game-player-counter"
    :class="{ 'game-player-counter--desktop': only }"
  >
    <!-- predictUp -->
    <div
      v-if="!only || only === 'predictUp'"
      class="game-player-counter__predict game-player-counter--predictUp"
    >
      <div
        v-for="n in predictUp"
        :key="n"
        class="game-player-counter__people"
      />
    </div>
    <!-- Counter -->
    <div class="game-player-counter__value">
      <v-icon
        v-if="only"
        :class="{
          'green--text': only === 'predictUp',
          'red--text': only === 'predictDown',
        }"
      >
        {{ only === 'predictUp' ? '$up' : '$down' }}
      </v-icon>
      <animated-number
        :value="players"
        :format-value="formatValue"
        :duration="100"
      />
      <v-icon class="primary--text">$peopleFill</v-icon>
    </div>
    <!-- predictDown -->
    <div
      v-if="!only || only === 'predictDown'"
      class="game-player-counter__predict game-player-counter--predictDown"
    >
      <div
        v-for="n in predictDown"
        :key="n"
        class="game-player-counter__people"
      />
    </div>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

const PEOPLE_LIMIT = 8
const DIVISOR = 1

export default {
  name: 'GamePlayerCounter',
  components: { AnimatedNumber },
  props: {
    only: {
      type: String,
      default: () => null,
    },
  },
  computed: {
    limit() {
      return this.only ? 15 : PEOPLE_LIMIT
    },
    predictDown() {
      // eslint-disable-next-line prettier/prettier
      const count = Math.ceil(((this.$game?.game?.predictDown ?? 0) + 1) / DIVISOR)
      return count > this.limit ? this.limit : count
    },
    predictUp() {
      // eslint-disable-next-line prettier/prettier
      const count = Math.ceil(((this.$game?.game?.predictUp ?? 0) + 1) / DIVISOR)
      return count > this.limit ? this.limit : count
    },
    players() {
      return (
        (this.$game?.game?.predictDown ?? 0) +
        (this.$game?.game?.predictUp ?? 0)
      )
    },
  },
  methods: {
    formatValue(value) {
      return Math.ceil(value)
    },
  },
}
</script>

<style lang="scss">
$predictDown: url("data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 89 34' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.04 20.584c0 7.139 19.696 12.92 43.996 12.92s43.997-5.781 43.997-12.92v-7.31h-87.993z' fill='%23fe6d44'/%3E%3Cpath d='m5.16 13.275h-5.12v7.309c0 2.187 1.854 4.248 5.12 6.056zm3.34-.001h-1.566v14.256c.495.23 1.02.452 1.566.674zm29.67-.051h-9.177v19.46c2.926.31 6 .533 9.177.659zm25.969 0h-24.619v20.163c1.47.045 2.956.067 4.463.067 7.262 0 14.119-.519 20.155-1.43v-18.8zm4.331.051h-2.816v18.563c.96-.156 1.899-.334 2.815-.512v-18.05zm5.318 0h-4.174v17.821c1.462-.303 2.851-.637 4.174-.993zm9.286 0h-8.452v16.598c3.383-.963 6.25-2.083 8.452-3.32v-13.279zm1.773 0v12.15c2.054-1.49 3.192-3.128 3.192-4.84v-7.31zm-57.211-.051h-13.033v16.924c3.805 1.001 8.216 1.816 13.04 2.38v-19.304zm-15.229 0h-3.34v15.175c1.035.393 2.158.77 3.34 1.134z' fill='%23fd4e34'/%3E%3Cpath d='m88.033 13.274c0 7.14-19.697 12.921-43.997 12.921s-43.996-5.782-43.996-12.92c0-7.14 19.696-12.921 43.996-12.921s43.997 5.782 43.997 12.92z' fill='%23fc4131'/%3E%3Cpath d='m84.976 13.276c0 6.643-18.33 12.024-40.939 12.024-22.607 0-40.937-5.38-40.937-12.024 0-6.642 18.33-12.024 40.938-12.024 22.616 0 40.939 5.382 40.939 12.024z' fill='%23fe754e'/%3E%3Cpath d='m77.748 13.275c0 5.47-15.094 9.896-33.705 9.896-18.618 0-33.705-4.433-33.705-9.896 0-5.464 15.094-9.897 33.705-9.897 18.611-.007 33.705 4.426 33.705 9.897z' fill='%23fe9d70'/%3E%3Cpath d='m74.506 13.275c0 4.945-13.639 8.948-30.469 8.948s-30.47-4.003-30.47-8.948c0-4.944 13.64-8.947 30.47-8.947s30.47 4.003 30.47 8.947z' fill='%23ffc292'/%3E%3Cpath d='m36 20h9.548c9.275 0 10.117-5.707 4.26-6.798 5.447-1.271 5.282-6.202-3.347-6.202h-10.461v2.29c2.63-.145 4.588.311 7.179.629.557-2.03 6.756-.352 9.02-1.374-1.329 1.82-6.1.507-5.748 1.946.138.426 1.62 1.624.97 2.657.305.8.558 1.83 1.165 2.222.744.479.019 1.857-1.942 2.268-1.345.135-1.3-.424-1.945-.636-1.136-.37-2.468-.106-4.144-1.082-2.8.68-2.41 2.353-4.555 4.08zm0-6.852c2.84-.629 5.354-.985 8.92-.711-2.172-.637-5.633-1.04-8.92-.801zm0 3.58c3.261-1.68 4.341-2.287 8.92-3.09-3.102-.152-6.151-.226-8.92.745v2.346z' fill='%23fe754e'/%3E%3C/svg%3E");
$predictUp: url("data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 89 34' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.04 20.584c0 7.139 19.696 12.92 43.996 12.92s43.997-5.781 43.997-12.92v-7.31h-87.993z' fill='%238cd43f'/%3E%3Cpath d='m5.16 13.275h-5.12v7.309c0 2.187 1.854 4.248 5.12 6.056zm3.34-.001h-1.566v14.256c.495.23 1.02.452 1.566.674zm29.67-.051h-9.177v19.46c2.926.31 6 .533 9.177.659zm25.969 0h-24.619v20.163c1.47.045 2.956.067 4.463.067 7.262 0 14.119-.519 20.155-1.43v-18.8zm4.331.051h-2.816v18.563c.96-.156 1.9-.334 2.815-.512v-18.05zm5.318 0h-4.174v17.821c1.462-.303 2.851-.637 4.174-.993zm9.286 0h-8.452v16.598c3.383-.963 6.25-2.083 8.452-3.32v-13.279zm1.773 0v12.15c2.054-1.49 3.192-3.128 3.192-4.84v-7.31zm-57.211-.051h-13.033v16.924c3.805 1.001 8.216 1.816 13.04 2.38v-19.304zm-15.229 0h-3.34v15.175c1.035.393 2.158.77 3.34 1.134z' fill='%237dc42c'/%3E%3Cpath d='m88.033 13.274c0 7.14-19.697 12.921-43.997 12.921s-43.996-5.782-43.996-12.92c0-7.14 19.696-12.921 43.996-12.921s43.997 5.782 43.997 12.92z' fill='%235db73c'/%3E%3Cpath d='m84.976 13.276c0 6.643-18.33 12.024-40.939 12.024-22.607 0-40.937-5.38-40.937-12.024 0-6.642 18.33-12.024 40.938-12.024 22.616 0 40.939 5.382 40.939 12.024z' fill='%2390d650'/%3E%3Cpath d='m77.748 13.275c0 5.47-15.094 9.896-33.705 9.896-18.618 0-33.705-4.433-33.705-9.896 0-5.464 15.094-9.897 33.705-9.897 18.611-.007 33.705 4.426 33.705 9.897z' fill='%23a3e95a'/%3E%3Cpath d='m74.938 13.275c0 4.945-13.639 8.948-30.469 8.948-16.829 0-30.469-4.003-30.469-8.948 0-4.944 13.639-8.947 30.47-8.947 16.83 0 30.468 4.003 30.468 8.947z' fill='%23c5f669'/%3E%3Cpath d='m36 20h9.548c9.275 0 10.117-5.707 4.26-6.798 5.447-1.271 5.282-6.202-3.347-6.202h-10.461v2.29c2.63-.145 4.588.311 7.179.629.557-2.03 6.756-.352 9.02-1.374-1.329 1.82-6.1.507-5.748 1.946.138.426 1.62 1.624.97 2.657.305.8.558 1.83 1.165 2.222.744.479.019 1.857-1.942 2.268-1.345.135-1.3-.424-1.945-.636-1.136-.37-2.468-.106-4.144-1.082-2.8.68-2.41 2.353-4.555 4.08zm0-6.852c2.84-.629 5.354-.985 8.92-.711-2.172-.637-5.633-1.04-8.92-.801zm0 3.58c3.261-1.68 4.341-2.287 8.92-3.09-3.102-.152-6.151-.226-8.92.745v2.346z' fill='%2390d650'/%3E%3C/svg%3E");

.game-player-counter {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50px;
  margin-left: auto;
  padding-bottom: 10px;
  justify-content: center;

  &__value {
    font-weight: 500;
    margin: 9px 0;
    text-align: center;
  }

  &__predict {
    height: 69px;
    display: flex;
  }

  &--predictUp {
    --background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    --box-shadow: 0 0 18.9113px rgba(49, 255, 156, 0.7),
      0 0 73.2115px rgba(49, 255, 156, 0.5),
      inset 0 0 7.32115px rgba(49, 255, 156, 0.5);
    --margin-bottom: 4px;

    flex-direction: column-reverse;
  }

  &--predictDown {
    --background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    --box-shadow: 0 0 18.9113px rgba(255, 49, 49, 0.7),
      0 0 73.2115px rgba(255, 49, 49, 0.5),
      inset 0 0 7.32115px rgba(255, 49, 49, 0.5);
    --margin-top: 4px;

    flex-direction: column;
  }

  &__people {
    width: 36px;
    height: 4px;
    margin: 0 auto;
    margin-top: var(--margin-top, 0);
    margin-bottom: var(--margin-bottom, 0);
    filter: blur(1.3508px);
    background: var(--background);
    box-shadow: var(--box-shadow);
  }

  &--desktop {
    justify-content: end;
    margin-left: unset;
    margin-right: unset;
    width: 88px;

    .game-player-counter {
      &__value {
        order: 4;
      }
      &__predict {
        flex-direction: column-reverse;
        margin-top: auto;
      }
      &__people {
        display: inline-block;
        width: 88px !important;
        min-height: 32px !important;
        max-height: 32px !important;
        filter: none !important;
        box-shadow: none !important;
        background-size: fill;
        background-repeat: no-repeat;
        margin-bottom: -21px;
        margin-top: 0 !important;
      }
      &--predictUp {
        .game-player-counter__people {
          background-image: $predictUp;
        }
      }
      &--predictDown {
        .game-player-counter__people {
          background-image: $predictDown;
        }
      }

      &--predictUp,
      &--predictDown {
        // border: 1px solid #8dd9fc32;
        border-radius: 8px;
        margin-bottom: 0 !important;
        padding-bottom: 21px;
        height: 155px;
        width: 85px !important;
      }
    }
  }
}

.player {
  width: 88px;
  height: 32px;
  display: inline-block;

  &--predictDown {
    background-image: $predictDown;
  }

  &--predictUp {
    background-image: $predictUp;
  }
}
</style>
