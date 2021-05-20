<template>
  <slide-y-down-transition>
    <div
      v-show="$auth.isAuthenticated && !$auth.loading"
      class="default-layout__navigation-container"
    >
      <game-progress />
      <v-bottom-navigation class="default-layout__navigation" color="primary">
        <!-- Bets -->
        <v-btn :to="{ name: 'index' }" exact nuxt>
          <span>{{ $t('bets.title') }}</span>
          <v-icon>$bets</v-icon>
        </v-btn>
        <!-- Wallet -->
        <v-btn :to="{ name: 'wallet' }" nuxt>
          <span>{{ $t('wallet.title') }}</span>
          <v-icon>$wallet</v-icon>
        </v-btn>
        <!-- Chat -->
        <v-btn :to="{ name: 'chat' }" nuxt>
          <span>{{ $t('chat.title') }}</span>
          <v-badge
            color="primary"
            :content="$chat.counter"
            :value="$chat.counter"
            overlap
            bordered
            dot
          >
            <v-icon>$chat</v-icon>
          </v-badge>
        </v-btn>
        <!-- Notifications -->
        <v-btn :to="{ name: 'notifications' }" nuxt>
          <span>{{ $t('notifications.title') }}</span>
          <v-badge
            color="primary"
            :content="$notifications.counter"
            :value="$notifications.counter"
            overlap
            bordered
          >
            <v-icon>$notification</v-icon>
          </v-badge>
        </v-btn>
        <!-- Profile -->
        <v-btn :to="{ name: 'profile' }" nuxt>
          <span>{{ $t('profile.title') }}</span>
          <v-icon>$people</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </slide-y-down-transition>
</template>

<script>
import { SlideYDownTransition } from 'vue2-transitions'
import GameProgress from '~/components/Game/Progress.vue'

export default {
  name: 'MobileNavigation',
  components: {
    SlideYDownTransition,
    GameProgress,
  },
}
</script>
