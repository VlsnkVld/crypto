<template>
  <div class="guest-desktop-game">
    <!-- Promo -->
    <v-row>
      <v-col class="guest-desktop-game__promo-robot">
        <img
          src="~/static/images/robot-team-green.svg"
          :alt="$t('game.bet.predict-up.title')"
        />
      </v-col>
      <v-col class="text-center">
        <div class="primary--text">Real Bitcoin bets</div>
        <h1 class="h3">
          Welcome to <span class="primary--text">BitcyBets</span>
        </h1>
        <div style="max-width: 470px; margin: 0 auto">
          "Now you can earn real bitcoin by simply guessing if the price of
          bitcoin goes UP or DOWN in the next 10 seconds."
        </div>
        <div class="font-weight-bold mt-3">Play and WIN!</div>
      </v-col>
      <v-col class="guest-desktop-game__promo-robot">
        <img
          src="~/static/images/robot-team-red.svg"
          :alt="$t('game.bet.predict-down.title')"
        />
      </v-col>
    </v-row>

    <!-- Game -->
    <div class="game">
      <div class="desktop-game__map guest-desktop-game__map layout-br">
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
          <div
            class="desktop-game__main guest-desktop-game__main layout-br"
            style="overflow: hidden"
          >
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
  name: 'GuestDesktopGame',
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
.guest-desktop-game {
  background: rgba(26, 31, 52, 0.7);
  padding: 24px;
  border-radius: 24px;
  margin: 32px auto;
  max-width: 1160px;

  .game {
    background: rgba(26, 31, 52, 0.7);
    border-radius: 24px;
    max-width: 865px;
    margin: 0 auto;
    padding-bottom: 32px;
    margin-top: 16px;
  }

  .layout-br {
    padding: 4px 0 0 0 !important;
  }

  .game-progress {
    display: none;
  }

  .game-chart--desktop {
    --height: 185px;
  }

  .desktop-game__main {
    min-height: 223px !important;
    max-height: 223px !important;
    padding: 0 !important;
    margin-top: -4px;
    z-index: 2;

    .mt-6 {
      margin-top: 5px !important;
    }
  }

  .game-alternative-timer__value {
    margin-top: 35px;
  }

  &__map {
    background: none !important;
    margin: 0 32px;
    margin-bottom: 0;
  }

  &__main {
    background: none !important;
  }

  &__promo-robot {
    min-width: 145px;
    max-width: 145px;
    min-height: 165px;
    max-height: 165px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
