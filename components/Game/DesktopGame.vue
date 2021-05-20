<template>
  <div class="game" :style="{ '--game-promo': 0 }">
    <div class="desktop-game__map layout-br mt-7 mb-5">
      <!-- Currency -->
      <current-rate
        class="text-center text-h6 d-block mb-2"
        :value="$rate.currentRate"
      />
      <!-- Map -->
      <v-row class="game__map" no-gutters>
        <!-- Chart -->
        <v-col>
          <!-- Chart -->
          <game-chart desktop />
        </v-col>
      </v-row>
    </div>

    <v-row no-gutters class="mt-4">
      <!-- Bets in progress -->
      <v-col v-if="$auth.isAuthenticated">
        <div class="desktop-game__bets layout-br">
          <h6 class="text-h6 text-center">Bets in progress</h6>
          <v-row class="desktop-game__counters">
            <v-col>
              <player-counter style="margin-left: auto" only="predictDown" />
            </v-col>
            <v-col cols="auto">
              <bank desktop />
            </v-col>
            <v-col>
              <player-counter only="predictUp" />
            </v-col>
          </v-row>
        </div>
      </v-col>

      <!-- Main -->
      <v-col cols="6" style="margin: 0 auto">
        <div class="desktop-game__main layout-br" style="overflow: hidden">
          <!-- Make bet -->
          <make-bet
            v-if="$game.canAcceptBet && !$game.bet.status"
            class="layout-br"
          />
          <!-- Game results -->
          <results v-else class="layout-br" />
          <!-- Progress -->
          <game-progress class="desktop-game__progress layout-br" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GameChart from './Chart'
import CurrentRate from './CurrentRate'
import MakeBet from './MakeBet'
import GameProgress from './Progress.vue'
import Results from './Results.vue'
import Bank from './Bank.vue'
import PlayerCounter from './PlayerCounter.vue'

export default {
  name: 'DesktopGame',
  components: {
    GameChart,
    CurrentRate,
    MakeBet,
    GameProgress,
    Results,
    Bank,
    PlayerCounter,
  },
}
</script>

<style lang="scss">
.desktop-game {
  &__main {
    position: relative;
    background: #1a1f34;
    padding: 27px;
    min-height: 295px;
    max-height: 295px;
  }
  &__bets {
    background: rgba(26, 31, 52, 0.7);
    margin-right: 32px;
    padding: 16px;
    padding-top: 32px;
    border-radius: 8px;
    height: 295px;
  }
  &__progress {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 8px;
    overflow: hidden !important;
  }
  &__counters {
    height: 211px;
    margin-top: 10px;
  }
  &__map {
    background: rgba(26, 31, 52, 0.7);
    padding: 16px;
    border-radius: 8px;

    .game-chart--desktop {
      margin-left: -16px;
      margin-right: -16px;
      margin-bottom: -22px;
      svg {
        opacity: 0;
      }
    }
  }
}
</style>
