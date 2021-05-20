<template>
  <v-app class="default-layout" dark :style="{ '--nav-bar': navbar + 'px' }">
    <v-container
      class="default-layout__container default-layout--background elevation-5"
    >
      <!-- Header -->
      <v-app-bar class="default-layout__header" fixed>
        <v-container class="v-toolbar__content">
          <v-toolbar-title>
            <nuxt-link :to="{ name: 'index' }" class="text-decoration-none">
              <logo />
            </nuxt-link>
          </v-toolbar-title>

          <v-spacer />

          <!-- Menu link -->
          <nuxt-link v-slot="{ isActive }" :to="{ name: 'settings' }" custom>
            <v-btn
              :to="
                isActive
                  ? $nuxt.$route.query.back
                    ? { path: $nuxt.$route.query.back }
                    : { name: 'index' }
                  : { name: 'settings', query: { back: $nuxt.$route.path } }
              "
              icon
              nuxt
              exact
            >
              <v-icon>{{ isActive ? '$close' : '$menu' }}</v-icon>
            </v-btn>
          </nuxt-link>
        </v-container>
      </v-app-bar>

      <!-- Content -->
      <v-main class="default-layout__main">
        <nuxt />
      </v-main>

      <!-- Mobile navigation -->
      <mobile-navigation />

      <!-- Background -->
      <div class="default-layout__background" />
    </v-container>
  </v-app>
</template>

<script>
import { REFERRAL_QUERY, REFERRAL_KEY } from '~/plugins/auth'
import Logo from '~/components/Logo.vue'
import MobileNavigation from '~/components/Menu/MobileNavigation.vue'

export default {
  name: 'DefaultLayout',
  pageTransition: 'page',
  components: {
    Logo,
    MobileNavigation,
  },
  data() {
    return {}
  },
  computed: {
    navbar() {
      return this.$auth.isAuthenticated && !this.$auth.loading ? 68 : 0
    },
  },
  watch: {
    '$vuetify.breakpoint.lgAndUp': {
      immediate: true,
      handler(value) {
        if (value) {
          this.$nuxt.setLayout('desktop')
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
.default-layout {
  --app-bar: 56px;
  --header: 72px;

  &--background {
    background: linear-gradient(
      172.05deg,
      #04020f 4.9%,
      #26286e 99.63%
    ) !important;
  }

  &__container {
    display: flex;
    flex-direction: column;
    padding: 0 !important;
    min-height: 100vh;
    z-index: 1;
    position: inherit;
    overflow-x: hidden;
  }

  &__main {
    .v-main__wrap {
      padding-top: var(--app-bar);
      padding-bottom: var(--nav-bar);
    }
  }

  &__header {
    flex: 0 !important;
    height: var(--app-bar) !important;
    .v-toolbar__content {
      height: var(--app-bar) !important;
    }
  }

  &__navigation {
    margin-top: auto;
    height: 64px !important;
    .v-btn {
      font-weight: 400;
      height: 100% !important;
    }

    &-container {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  &__background {
    // display: none;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      z-index: -1;
      transform: translateX(-50%);
      width: 206px;
      height: 206px;
      background: #2c2e7e;
      filter: blur(54px);
      border-radius: 50%;
    }

    &::before {
      left: calc(50% - 200px);
      top: -63px;
    }

    &::after {
      left: calc(50% + 238px);
      top: -108px;
    }
  }

  .page-content {
    padding: 16px 16px 32px 16px;
  }
}

// .slide-fade-enter-active {
//   transition: all 0.3s ease;
// }
// .slide-fade-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slide-fade-enter,
// .slide-fade-leave-to {
//   transform: translateX(10px);
//   opacity: 0;
// }

.page-enter-active,
.page-leave-active {
  transition: opacity 0.05s;
  // transition: opacity 0.15s, transform 0.17s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  // transform: translateX(-15px);
}
</style>
