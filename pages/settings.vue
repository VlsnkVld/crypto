<template>
  <v-list flat color="transparent">
    <!-- Sound -->
    <v-list-item>
      <!-- Icon -->
      <v-list-item-icon>
        <v-icon>$volume</v-icon>
      </v-list-item-icon>
      <!-- Content -->
      <v-list-item-content>
        <v-list-item-title>Sound</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-switch color="success" />
      </v-list-item-action>
    </v-list-item>
    <v-divider inset />

    <!-- Language -->
    <v-list-item>
      <!-- Icon -->
      <v-list-item-icon>
        <v-icon>$locale</v-icon>
      </v-list-item-icon>
      <!-- Content -->
      <v-list-item-content>
        <v-list-item-title>Language</v-list-item-title>
      </v-list-item-content>

      <v-menu v-model="languageSwitcher" max-width="220">
        <template #activator="{ on, attrs }">
          <v-list-item-action v-bind="attrs" v-on="on">
            <span>
              <span class="mr-1">{{ currentLocale.emoji }}</span>
              <span>{{ currentLocale.title }}</span>
              <v-icon>$next</v-icon>
            </span>
          </v-list-item-action>
        </template>

        <!-- Chose language -->
        <v-list>
          <v-list-item
            v-for="locale in $i18n.locales"
            :key="locale.code"
            @click="$i18n.setLocale(locale.code)"
          >
            <v-list-item-title>
              <span class="mr-3">{{ locale.emoji }}</span>
              <span>{{ locale.title }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
    <v-divider inset />

    <!-- Support -->
    <v-list-item href="mailto:support@gmail.com">
      <!-- Icon -->
      <v-list-item-icon>
        <v-icon>$support</v-icon>
      </v-list-item-icon>
      <!-- Content -->
      <v-list-item-content>
        <v-list-item-title>Support</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>$next</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-divider inset />

    <!-- Logout -->
    <template v-if="$auth.isAuthenticated">
      <v-list-item @click="$auth.logout">
        <!-- Icon -->
        <v-list-item-icon>
          <v-icon>$logout</v-icon>
        </v-list-item-icon>
        <!-- Content -->
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>$next</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset />
    </template>
  </v-list>
</template>

<script>
import layoutMixin from '~/mixins/layout'
export default {
  name: 'SettingsPage',
  mixins: [layoutMixin],
  data() {
    return {
      languageSwitcher: false,
    }
  },
  head() {
    return {
      title: this.$t('settings.title'),
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.find(({ code }) => code === this.$i18n.locale)
    },
  },
}
</script>
