<template>
  <div
    class="header"
    :class="{
      'header--fixed': color,
      'header--absolute': absolute,
    }"
    :style="{ background }"
  >
    <v-container class="pa-0">
      <v-row no-gutters>
        <!-- Back -->
        <v-col v-if="!color" cols="auto">
          <v-btn text small fab @click="goBack">
            <v-icon>$left</v-icon>
          </v-btn>
        </v-col>
        <!-- Title -->
        <v-col class="align-self-center pr-10">
          <h1
            class="text-h1"
            :class="{ 'text-center': !color, 'text-left pa-2 pl-5': color }"
          >
            <slot />
          </h1>
          <!-- Planet -->
          <span v-if="!background" class="header__planet" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    color: {
      type: [Boolean, String],
      default: () => undefined,
    },
    absolute: {
      type: Boolean,
      default: () => false,
    },
    back: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    background() {
      return this.color === true ? '#100F2E' : this.color
    },
  },
  methods: {
    goBack() {
      if (this.back) {
        this.$emit('back')
      } else if (window.history.length > 2) {
        this.$router.back()
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss">
.header {
  position: relative;
  // margin-bottom: 24px;
  padding: 16px;
  flex: 0;

  &--fixed {
    position: fixed !important;
    top: var(--app-bar);
    left: 0;
    width: 100%;
    z-index: 5;
    padding-top: 0;
  }

  &--absolute {
    position: absolute !important;
    top: 0;
    z-index: 1;
    padding: 16px !important;
  }

  &__planet {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 20px;
    right: 28px;
    border-radius: 50%;
    background: radial-gradient(
        47.51% 51.08% at 64.75% 69.35%,
        rgba(248, 54, 0, 0.46) 8.51%,
        rgba(249, 212, 35, 0.28) 100%
      ),
      linear-gradient(
        168.61deg,
        rgba(254, 253, 160, 0.84) 20.29%,
        rgba(255, 185, 169, 0.955833) 68.9%,
        rgba(83, 123, 160, 0.84) 92.46%
      );
    background-blend-mode: normal, overlay;
    transform: rotate(-40deg);
  }
}
</style>
