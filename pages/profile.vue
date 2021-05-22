<template>
  <div>
    <!-- Content -->
    <v-list flat color="transparent">
      <!-- User -->
      <v-list-item>
        <v-list-item-avatar>
          <avatar :user="$auth.user" size="45" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle v-text="'Welcome'" />
          <v-list-item-title v-text="'Jonas Mur'" />
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mb-9" inset />

      <!-- Profile Info -->
      <v-list-item :to="{ name: 'account' }">
        <!-- Icon -->
        <v-list-item-icon>
          <v-icon>$people</v-icon>
        </v-list-item-icon>
        <!-- Content -->
        <v-list-item-content>
          <v-list-item-title>Profile Info</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>$next</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset />

      <!-- Referral -->
      <v-list-item :to="{ name: 'referral' }" nuxt>
        <!-- Icon -->
        <v-list-item-icon>
          <v-icon>$peoples</v-icon>
        </v-list-item-icon>
        <!-- Content -->
        <v-list-item-content>
          <v-list-item-title>Referral</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>$next</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset />

      <!-- ADS -->
      <v-list-item to="#">
        <!-- Icon -->
        <v-list-item-icon>
          <v-icon>$ad</v-icon>
        </v-list-item-icon>
        <!-- Content -->
        <v-list-item-content>
          <v-list-item-title>ADS</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>$next</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset />

      <!-- Security -->
      <v-list-item to="#">
        <!-- Icon -->
        <v-list-item-icon>
          <v-icon>$lock</v-icon>
        </v-list-item-icon>
        <!-- Content -->
        <v-list-item-content>
          <v-list-item-title>Security</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>$next</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset />
    </v-list>

    <!-- Support -->
    <support-banner v-if="!menu" />

    <!-- Privacy Policy -->
    <div v-if="!menu" class="text-center">
      <v-btn to="#" text large class="mb-3"> Privacy Policy </v-btn>
    </div>
  </div>
</template>

<script>
import SupportBanner from '../components/SupportBanner.vue'
import layoutMixin from '~/mixins/layout'

export default {
  name: 'ProfilePage',
  components: {
    SupportBanner,
  },
  mixins: [layoutMixin],
  middleware: 'authenticated',
  props: {
    menu: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.$t('profile.title'),
    }
  },
}
</script>
