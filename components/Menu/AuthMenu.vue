<template>
  <v-sheet v-show="$auth.isGuest" class="pa-4" color="#100F2E">
    <v-row>
      <!-- Register -->
      <v-col>
        <!-- eslint-disable-next-line prettier/prettier -->
        <v-btn :to="{ name: 'auth-sign-up' }" rounded large block outlined nuxt>
          Register
        </v-btn>
      </v-col>

      <!-- Login -->
      <v-col>
        <!-- eslint-disable-next-line prettier/prettier -->
        <v-btn :to="{ name: 'auth-sign-in' }" rounded large block nuxt class="v-btn--brand">
          Sign In
        </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'AuthMenu',
  components: {},
}
</script>
