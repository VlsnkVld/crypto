<template>
  <v-card class="mb-5 top-banner">
    <v-card-title
      class="text-h6"
      style="border-bottom: 1px solid rgba(255, 255, 255, 0.14)"
    >
      <v-icon class="mr-2 primary--text">$crown</v-icon>
      Top win of the day
    </v-card-title>
    <v-card-text class="pa-0">
      <v-list flat color="transparent">
        <v-list-item>
          <v-list-item-avatar>
            <avatar :user="{ id: 1111, username: 'U' }" />
          </v-list-item-avatar>
          <v-list-item-title> User name </v-list-item-title>
          <v-list-item-action-text>
            <amount style="font-size: 1rem" :value="4890" />
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import Amount from './Amount.vue'
import Avatar from './Avatar.vue'
export default {
  name: 'TopBanner',
  components: { Avatar, Amount },
}
</script>

<style lang="scss">
.top-banner {
  background: linear-gradient(98.37deg, #f0c -47.89%, #339 107.13%);
  border-radius: 8px !important;
}
</style>
