<template>
  <div class="header-auth">
    <v-container class="pa-0">
      <v-row no-gutters>
        <!-- Title -->
        <v-col class="align-self-center px-10 pt-4">
          <h1 class="text-h1 text-center">
            <slot />
          </h1>
        </v-col>
        <!-- Back -->
        <v-btn
          v-if="close"
          class="header-auth__close"
          text
          small
          fab
          @click="goBack"
        >
          <v-icon>$close</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HeadingAuth',
  props: {
    close: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-auth {
  position: relative;
  // margin-bottom: 24px;
  padding: 16px;
  flex: 0;
  &__close {
    position: absolute;
    right: 16px;
    top: 16px;
  }
}
</style>
