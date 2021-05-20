<template>
  <div class="game" :style="{ '--game-promo': $auth.isGuest ? 1 : 0 }">
    <!-- Currency -->
    <current-rate
      class="text-center d-block mb-2 mt-7"
      :value="$rate.currentRate"
    />
    <!-- Map -->
    <v-row class="game__map mb-5" no-gutters>
      <!-- Counters -->
      <v-col class="pr-4">
        <player-counter />
      </v-col>
      <!-- Chart -->
      <v-col cols="auto">
        <game-chart />
      </v-col>
      <!-- Bank -->
      <v-col class="pl-4">
        <bank />
      </v-col>
    </v-row>

    <!-- Balance -->
    <balance v-show="$auth.isAuthenticated" />

    <!-- Main -->
    <div class="game__main">
      <!-- Make bet -->
      <make-bet v-if="$game.canAcceptBet && !$game.bet.status" />
      <!-- Game results -->
      <results v-else />
    </div>

    <!-- Progress / Welcome message -->
    <div v-if="$auth.isGuest" class="game__promo">
      <h6 class="text-h6 mb-3 mt-4">Keep winning with BITCYBETS 👇🏻</h6>
      <game-progress />
      <auth-menu />
    </div>
  </div>
</template>

<script>
import Balance from './Balance.vue'
import GameChart from './Chart'
import CurrentRate from './CurrentRate'
import MakeBet from './MakeBet'
import GameProgress from './Progress.vue'
import Results from './Results.vue'
import Bank from './Bank.vue'
import PlayerCounter from './PlayerCounter.vue'
import AuthMenu from '~/components/Menu/AuthMenu.vue'

export default {
  name: 'Game',
  components: {
    GameChart,
    CurrentRate,
    MakeBet,
    GameProgress,
    AuthMenu,
    Results,
    Bank,
    PlayerCounter,
    Balance,
  },
}
</script>

<style lang="scss">
.game {
  padding-bottom: calc(130px * var(--game-promo));

  &__map {
    flex: 0;
  }

  &__main {
    min-height: 275px;
  }

  &__promo {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130px;
  }
}
</style>
