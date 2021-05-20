<template>
  <div>
    <!-- Mobile -->
    <game v-if="!isDesktop" />
    <!-- Desktop -->
    <v-row v-else>
      <v-col>
        <desktop-game v-if="$auth.isAuthenticated" />
        <guest-desktop-game v-else />
      </v-col>
      <v-col v-if="$auth.isAuthenticated" class="desktop-layout--side">
        <!-- Top -->
        <top-banner class="mt-8 mb-5 layout-br" />
        <!-- Wallet -->
        <wallet-page class="layout-br" desktop short />
        <!-- chat -->
        <chat-page class="mt-5 layout-br" desktop />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DesktopGame from '../components/Game/DesktopGame.vue'
import GuestDesktopGame from '../components/Game/GuestDesktopGame.vue'
import Game from '~/components/Game/Game.vue'
import ChatPage from '~/pages/chat.vue'
import WalletPage from '~/pages/wallet/index.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'IndexPage',
  components: {
    Game,
    ChatPage,
    DesktopGame,
    WalletPage,
    GuestDesktopGame,
  },
  mixins: [layoutMixin],

  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.lgAndUp
    },
  },
}
</script>
