<template>
  <div class="game-actions">
    <!-- Reset -->
    <slide-x-left-transition>
      <v-btn
        v-show="$game.bet.team"
        fab
        color="red"
        small
        class="game-actions__action game-actions--cancel"
        @click="$game.reset"
      >
        <v-icon>$cancel</v-icon>
      </v-btn>
    </slide-x-left-transition>

    <!-- Undo -->
    <slide-x-left-transition>
      <v-btn
        v-show="$game.bet.history && $game.bet.history.length"
        fab
        small
        class="game-actions__action game-actions--undo"
        @click="$game.undoAmount"
      >
        <v-icon>$undo</v-icon>
      </v-btn>
    </slide-x-left-transition>

    <!-- Confirm -->
    <slide-x-right-transition>
      <v-btn
        v-show="$game.bet.amount > 0"
        fab
        color="green"
        small
        class="game-actions__action game-actions--confirm"
        @click="$game.createBet"
      >
        <v-icon>$complete</v-icon>
      </v-btn>
    </slide-x-right-transition>
  </div>
</template>

<script>
import { SlideXLeftTransition, SlideXRightTransition } from 'vue2-transitions'

export default {
  name: 'GameActions',
  components: { SlideXLeftTransition, SlideXRightTransition },
  computed: {},
}
</script>

<style lang="scss">
.game-actions {
  --top: -40px;

  position: relative;

  &__action {
    position: absolute;
  }

  &--cancel {
    margin-top: var(--top);
    left: 16px;
    background: linear-gradient(160deg, #ab3349 6.29%, #f45c43 107.73%);
  }

  &--undo {
    margin-top: calc(var(--top) - 60px);
    left: 16px;
  }

  &--confirm {
    margin-top: var(--top);
    right: 16px;
    background: linear-gradient(95.38deg, #56ab2f 6.29%, #a8e063 107.73%);
  }
}
</style>
