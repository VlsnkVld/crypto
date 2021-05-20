<template>
  <div class="notifications">
    <!-- Header -->
    <heading>{{ $t('notifications.title') }}</heading>

    <!-- Content -->
    <v-list flat color="transparent">
      <!-- Support -->
      <template v-for="n in 7">
        <v-list-item :key="n">
          <!-- Icon -->
          <v-list-item-icon>
            <v-icon>$ad</v-icon>
          </v-list-item-icon>
          <!-- Content -->
          <v-list-item-content>
            <v-list-item-title>Your ad is accepted</v-list-item-title>
            <v-list-item-subtitle class="notifications__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn text>
              <v-icon>$close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="n + '-'" inset />
      </template>
    </v-list>
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  name: 'NotificationsPage',
  components: {
    Heading,
  },
  middleware: 'authenticated',
  data() {
    return {}
  },
  head() {
    return {
      title: this.$t('notifications.title'),
    }
  },
}
</script>

<style lang="scss">
.notifications {
  &__subtitle {
    text-overflow: unset !important;
    white-space: unset !important;
  }
}
</style>
