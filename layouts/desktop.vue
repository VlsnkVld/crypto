<template>
  <v-app
    class="default-layout desktop-layout"
    :class="{
      'auth-layout__desktop': getBgType === 'auth',
      'referral-layout': getBgType === 'moon-bg',
    }"
    dark
    :style="{ '--nav-bar': navbar + 'px' }"
    :data-route="$nuxt.$route.name"
  >
    <v-container class="default-layout__container desktop-layout__container">
      <!-- Header -->
      <v-app-bar class="default-layout__header" fixed>
        <v-container class="v-toolbar__content">
          <v-toolbar-title>
            <nuxt-link :to="{ name: 'index' }" class="text-decoration-none">
              <logo />
            </nuxt-link>
          </v-toolbar-title>

          <v-spacer />

          <!-- Menu -->
          <desktop-navigation v-model="menu" />
        </v-container>
      </v-app-bar>

      <!-- Content -->
      <v-main class="default-layout__main">
        <nuxt />
      </v-main>
    </v-container>

    <!-- Right menu -->
    <v-navigation-drawer
      v-model="menu"
      right
      absolute
      temporary
      height="100%"
      overlay-color="rgb(62, 64, 119)"
      :overlay-opacity="0.9"
      class="default-layout--background"
      :width="360"
    >
      <profile-page menu />
      <settings-page class="mt-3" />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import DesktopNavigation from '../components/Menu/DesktopNavigation.vue'
import SettingsPage from '../pages/settings.vue'
import ProfilePage from '../pages/profile.vue'
import { REFERRAL_QUERY, REFERRAL_KEY } from '~/plugins/auth'
import Logo from '~/components/Logo.vue'

export default {
  name: 'DesktopLayout',
  pageTransition: 'page',
  components: {
    Logo,
    DesktopNavigation,
    SettingsPage,
    ProfilePage,
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    navbar() {
      return this.$auth.isAuthenticated && !this.$auth.loading ? 68 : 0
    },
    getBgType() {
      switch (this.$route.name) {
        case 'auth-sign-in':
        case 'auth-sign-up':
        case 'auth-forgot-password':
        case 'auth-enter-code':
          return 'auth'
        case 'referral':
        case 'account':
          return 'moon-bg'
        default:
          return false
      }
    },
  },
  watch: {
    '$vuetify.breakpoint.lgAndUp': {
      immediate: true,
      handler(value) {
        if (!value) {
          this.$nuxt.setLayout('default')
        }
      },
    },
  },
  created() {
    // Has referral
    if (this.$route.query[REFERRAL_QUERY]) {
      localStorage.setItem(REFERRAL_KEY, this.$route.query[REFERRAL_QUERY])
    }
  },
}
</script>

<style lang="scss">
.desktop-layout {
  &[data-route='index'] {
    background: url(~/static/images/background.png) no-repeat fixed !important;
    background-size: cover !important;
  }

  .container {
    max-width: 1280px !important;
  }

  &--side {
    max-width: 423px;
    min-width: 423px;
  }

  &__container {
    overflow: hidden !important;
  }

  .layout-br {
    border-radius: 24px !important;
  }

  &.referral-layout {
    background-image: url('~/static/images/moons-bg.webp'),
      linear-gradient(180deg, #1a1f34 0%, #2e307d 100%);
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.auth-layout__desktop {
  .v-application--wrap {
    background-image: url('~/static/images/desktop-bg.jpg');
    background-position-y: var(--app-bar);
    background-size: cover;
  }
  .v-main__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
