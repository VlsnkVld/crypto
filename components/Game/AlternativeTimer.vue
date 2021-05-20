<template>
  <div
    class="game-alternative-timer layout-br"
    :class="{ 'game-alternative-timer--desktop': $vuetify.breakpoint.lgAndUp }"
  >
    <div class="game-alternative-timer__status">
      <h6 v-if="!$game.canAcceptBet" class="text-h6">
        {{ $t('game.make-bet.off-title') }}
      </h6>
    </div>

    <div class="game-alternative-timer__value">
      <span
        v-for="(second, key) of seconds"
        :key="'s' + key"
        v-text="second"
      /><span>:</span
      ><span
        v-for="(milisecond, key) of miliseconds"
        :key="'m' + key"
        v-text="milisecond"
      />
    </div>

    <div
      v-if="hasBet"
      class="game-alternative-timer__player player"
      :class="'player--' + $game.bet.team"
    />
  </div>
</template>

<script>
export default {
  name: 'GameAlternativeTimer',
  components: {},
  computed: {
    hasBet() {
      return !!this.$game.bet?.status
    },
    seconds() {
      return String(Math.ceil(this.$game.left / 1000))
        .padStart(2, '0')
        .slice('')
    },
    miliseconds() {
      return String(this.$game.left / 1000)
        .replace(/\d+\./, '')
        .substr(0, 2)
        .padStart(2, '0')
        .slice('')
    },
  },
}
</script>

<style lang="scss">
.game-alternative-timer {
  position: relative;
  background-color: #1a1f34;
  background-image: url('~/static/images/timer.svg');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  overflow: hidden;
  min-height: 255px;
  max-height: 255px;
  width: 100%;
  max-width: calc(100% - 32px);
  margin: 16px auto;

  &__value {
    font-style: normal;
    font-weight: bold;
    font-size: 5.25rem;
    margin-top: 50px;
    text-align: center;
    color: #c8a248;

    span {
      width: 57px;
      display: inline-block;

      &:nth-child(3) {
        width: 35px;
      }
    }
  }

  &__player {
    position: absolute;
    bottom: 45px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__status {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    text-align: center;
  }

  &--desktop {
    position: absolute;
    min-height: 329px;
    max-height: 329px;
    max-width: 428px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;

    .game-alternative-timer {
      &__value {
        font-size: 7.25rem;
        margin-top: 70px;

        span {
          width: 77px;

          &:nth-child(3) {
            width: 55px;
          }
        }
      }
    }
  }
}
</style>
