<template>
  <div>
    <!-- User's menu -->
    <template v-if="$auth.isAuthenticated">
      <!-- Refresh -->
      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn href="." v-on="on">
            <v-icon class="mr-1">$refresh</v-icon>
          </v-btn>
        </template>
        <span>Refresh</span>
      </v-tooltip>

      <!-- Wallet -->
      <v-menu :close-on-content-click="false" left bottom offset-y>
        <template #activator="{ on: onMenu, attrs }">
          <v-tooltip bottom>
            <template #activator="{ on: onTooltip }">
              <v-btn
                v-bind="attrs"
                active-class="desktop-navigation--active"
                v-on="{ ...onTooltip, ...onMenu }"
              >
                <v-icon class="mr-1">$wallet</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('wallet.title') }}</span>
          </v-tooltip>
        </template>

        <div class="desktop-navigation--wallet">
          <wallet-page />
        </div>
      </v-menu>

      <!-- Bets -->
      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn
            :to="{ name: 'index' }"
            active-class="desktop-navigation--active"
            exact
            nuxt
            v-on="on"
          >
            <v-icon class="mr-1">$bets</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('bets.title') }}</span>
      </v-tooltip>

      <!-- Menu -->
      <v-btn
        active-class="desktop-navigation--active"
        :active="menu"
        @click="$emit('input', true)"
      >
        <v-badge
          color="primary"
          class="mr-1"
          :content="$notifications.counter"
          :value="$notifications.counter"
          overlap
          bordered
          dot
        >
          <v-icon>{{ menu ? '$close' : '$menu' }}</v-icon>
        </v-badge>
        <span>{{ $t('settings.alternativeTitle') }}</span>
      </v-btn>
    </template>

    <!-- Guest menu -->
    <template v-else>
      <!-- eslint-disable-next-line prettier/prettier -->
      <v-btn :to="{ name: 'auth-sign-up' }" rounded outlined nuxt>
        Register
      </v-btn>

      <!-- eslint-disable-next-line prettier/prettier -->
      <v-btn :to="{ name: 'auth-sign-in' }" rounded nuxt class="v-btn--brand ml-3">
        Sign In
      </v-btn>
    </template>
  </div>
</template>

<script>
import WalletPage from '~/pages/wallet/index.vue'

export default {
  name: 'DesktopNavigation',
  components: { WalletPage },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.desktop-navigation {
  &--wallet {
    background: #1a1f34;
    padding: 1px 0;
    width: 376px;
    border-radius: 8px;
  }

  &--active {
    color: var(--primary-color) !important;
    &::before {
      display: none;
    }
  }
}
</style>
