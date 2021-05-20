<template>
  <v-row no-gutters class="promo-message">
    <!-- Info -->
    <v-col>
      <div class="promo-message__bubble">
        <h6
          class="text-h6 text-left promo-message__title"
          :class="[`${color}--text`]"
        >
          <slot name="title" />
        </h6>
        <slot />
      </div>
    </v-col>
    <!-- Robot -->
    <v-col cols="auto pl-4" style="max-width: 35%">
      <img
        :src="image"
        class="promo-message__robot"
        width="163"
        height="192"
        alt="Robot"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PromoMessage',
  props: {
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: () => 'white',
    },
  },
}
</script>

<style lang="scss">
.promo-message {
  padding: 16px;
  &__bubble {
    margin-left: auto;
    max-width: 290px;
    padding: 12px;
    border-radius: 5px;
    background: linear-gradient(90deg, #6441a5 0%, #6441a5 100%);
  }
  &__title {
    margin-bottom: 6px;
  }
  &__robot {
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
