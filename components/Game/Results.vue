<template>
  <div class="game-results">
    <template v-if="translation === 'timer'">
      <alternative-timer />
      <!-- v-if="$vuetify.breakpoint.lgAndUp" -->
      <!-- <timer v-else /> -->
    </template>
    <promo-message v-else :color="color" :image="image">
      <!-- Title -->
      <template #title>
        <i18n :path="`${translation}.title`" tag="span">
          <amount class="ml-3" :value="amount" />
        </i18n>
      </template>
      <!-- Message -->
      <i18n :path="`${translation}.message`" tag="span">
        <span
          class="primary--text font-weight-medium game-results__time-left"
          v-text="String(Math.ceil($game.left / 1000)).padStart(2, '0')"
        />
      </i18n>
    </promo-message>
  </div>
</template>

<script>
// import Timer from './Timer.vue'
import AlternativeTimer from './AlternativeTimer.vue'
import PromoMessage from '~/components/PromoMessage.vue'

export default {
  name: 'GameResults',
  components: {
    PromoMessage,
    // Timer,
    AlternativeTimer,
  },
  computed: {
    status() {
      return this.$game.bet?.status
    },
    amount() {
      return this.$game.bet?.received
    },
    image() {
      if (this.status === 'loser') {
        return require('~/static/images/robot-loser.svg')
      } else if (this.status === 'winner') {
        return require('~/static/images/robot-team-red.svg')
      } else {
        return require('~/static/images/robot-neutral.svg')
      }
    },
    color() {
      if (this.status === 'winner' || this.status === 'canceled-winner') {
        return 'green'
      } else if (this.status === 'loser' || this.status === 'canceled-loser') {
        return 'red'
      } else {
        return 'white'
      }
    },
    translation() {
      if (this.status === 'new') {
        return 'timer'
      } else if (this.status === 'loser') {
        return 'game.messages.you-lose'
      } else if (this.status === 'winner') {
        return 'game.messages.you-win'
      } else if (this.status === 'canceled-loser') {
        return 'game.messages.wrong'
      } else if (this.status === 'canceled-winner') {
        return 'game.messages.right'
      } else {
        return 'timer'
      }
    },
  },
}
</script>

<style lang="scss">
.game-results {
  display: flex;

  &__time-left {
    display: inline-block;
    width: 22px;
  }
}
</style>
