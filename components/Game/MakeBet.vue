<template>
  <div class="game-make-bet layout-br">
    <h6 class="text-h6 mb-1">{{ $t('game.make-bet.title') }}</h6>
    <slide-x-left-transition group>
      <!-- Chose team -->
      <div v-if="!$game.bet.team" key="chose-team">
        <v-row class="game-make-bet__grid" no-gutters>
          <!-- Predict up -->
          <v-col cols="6" class="pr-2">
            <v-fade-transition>
              <v-btn
                v-if="!$game.bet.team || $game.bet.team === 'predictUp'"
                block
                class="v-btn--brand game-make-bet__team"
                @click="$game.setTeam('predictUp')"
              >
                <img
                  src="~/static/images/robot-team-green.svg"
                  :alt="$t('game.bet.predict-up.title')"
                />
                <span class="green--text game-make-bet__title">
                  {{ $t('game.bet.predict-up.title') }}
                  <v-icon>$up</v-icon>
                </span>
              </v-btn>
            </v-fade-transition>
          </v-col>

          <!-- Predict down -->
          <v-col cols="6" class="pl-2">
            <v-fade-transition>
              <v-btn
                v-if="!$game.bet.team || $game.bet.team === 'predictDown'"
                block
                class="v-btn--brand game-make-bet__team"
                @click="$game.setTeam('predictDown')"
              >
                <img
                  src="~/static/images/robot-team-red.svg"
                  :alt="$t('game.bet.predict-down.title')"
                />
                <span class="red--text game-make-bet__title">
                  {{ $t('game.bet.predict-down.title') }}
                  <v-icon>$down</v-icon>
                </span>
              </v-btn>
            </v-fade-transition>
          </v-col>
        </v-row>
      </div>

      <!-- Amount -->
      <div v-if="$game.bet.team" key="chose-amount">
        <!-- Counter -->
        <coins />
        <!-- Action buttons -->
        <actions />
        <!-- Picker -->
        <amount-picker />
      </div>
    </slide-x-left-transition>
  </div>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'
import Actions from './Actions.vue'
import AmountPicker from './AmountPicker.vue'
import Coins from './Coins'

export default {
  name: 'GameMakeBet',
  components: {
    SlideXLeftTransition,
    Coins,
    AmountPicker,
    Actions,
  },
  computed: {},
}
</script>

<style lang="scss">
.game-make-bet {
  display: block;
  padding: 16px;
  position: relative;

  &__grid {
    max-width: 400px;
    margin: 16px auto !important;
  }

  &__team {
    height: auto !important;
    max-width: 100%;

    .v-btn__content {
      display: flex;
      flex-direction: column;
      padding: 20px 0 12px 0;
    }

    img {
      width: 102px;
      height: 116px;
      object-fit: contain;
    }
  }

  &__title {
    margin-top: 12px;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.06rem;

    .v-icon {
      vertical-align: -7px;
    }
  }
}
</style>
