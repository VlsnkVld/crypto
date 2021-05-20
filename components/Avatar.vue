<template>
  <v-avatar
    :color="color"
    :size="size"
    :rounded="rounded"
    :tile="tile"
    :style="{ background: gradient, fontSize: size + 'px' }"
  >
    <img v-if="user && user.avatar" :src="user.avatar" :alt="name" />
    <span
      v-else
      class="white--text"
      style="font-size: 0.6em"
      v-text="initials"
    />
  </v-avatar>
</template>

<script>
import stc from 'string-to-color'

export default {
  name: 'Avatar',
  props: {
    user: {
      type: Object,
      default: () => null,
    },
    size: {
      type: [String, Number],
      default: () => 48,
    },
    rounded: {
      type: [Boolean, String],
      default: () => undefined,
    },
    tile: {
      type: [Boolean, String],
      default: () => false,
    },
  },
  computed: {
    color() {
      return stc(this.user?.id)
    },
    secondColor() {
      return stc(this.user?.id + '-s')
    },
    gradient() {
      return `linear-gradient(110deg, ${this.color} 0%, ${this.secondColor} 100%)`
    },
    name() {
      return `${this.user?.nickname}`.trim()
    },
    initials() {
      return String(this.user?.nickname).charAt(0)
    },
  },
}
</script>
