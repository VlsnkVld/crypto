<template>
  <div class="chat layout-br" :class="{ 'chat--desktop': desktop }">
    <!-- Header -->
    <heading
      class="chat__header"
      :absolute="desktop"
      :color="desktop ? '#1a1f34' : true"
      :class="{ 'text-h6': desktop }"
    >
      {{ $t('chat.title') }}
    </heading>

    <!-- Messages -->
    <div
      ref="chat"
      class="chat__messages"
      :style="{ paddingBottom: $auth.isAuthenticated ? '129px' : '16px' }"
    >
      <v-row
        v-for="item in messages"
        :key="item.id"
        no-gutters
        :class="['mt-4', $chat.detectType(item)]"
      >
        <v-col cols="auto" class="align-self-end pr-2">
          <avatar class="chat__avatar" :user="item.from" size="24" />
        </v-col>
        <v-col>
          <div class="chat__bubble">
            <!-- Name -->
            <span class="chat__name">
              {{ formatName(item.from) }}
            </span>
            <!-- Text -->
            <div>{{ item.text }}</div>
            <!-- Date -->
            <timeago class="chat__date" :datetime="item.createdAt" />
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Form -->
    <v-form
      v-show="$auth.isAuthenticated"
      class="chat__form"
      @submit.prevent="send"
    >
      <v-container class="pt-0 pb-0">
        <v-row no-gutters>
          <v-col>
            <v-textarea
              v-model="message"
              filled
              name="message"
              rows="1"
              hide-details
              :placeholder="$t('chat.placeholder')"
              no-resize
            />
          </v-col>
          <v-col cols="auto" class="align-self-end pl-4">
            <v-btn
              large
              class="v-btn--brand chat__submit"
              :disabled="disabled"
              :loading="loading"
              type="submit"
            >
              <v-icon>$send</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import goTo from 'vuetify/es5/services/goto'
import Heading from '~/components/Heading.vue'
import Avatar from '~/components/Avatar.vue'
import Timeago from '~/components/Timeago.vue'

export default {
  name: 'ChatPage',

  components: {
    Heading,
    Avatar,
    Timeago,
  },
  props: {
    desktop: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      message: '',
      loading: false,
    }
  },
  head() {
    return {
      title: this.$t('chat.title'),
    }
  },
  computed: {
    messages() {
      return this.$chat.messages.slice()
    },
    disabled() {
      return !this.message.trim()
    },
  },
  watch: {
    messages: {
      immediate: true,
      handler() {
        this.$chat.markAsRead()

        if (!this.desktop) {
          goTo(99999, {
            duration: 300,
            easing: 'easeInOutCubic',
          })
        } else if (this.$refs.chat) {
          goTo(99999, {
            duration: 300,
            easing: 'easeInOutCubic',
            container: this.$refs.chat,
          })
        }
      },
    },
  },
  methods: {
    async send() {
      this.loading = true
      if (await this.$chat.send(this.message)) {
        this.message = ''
      }
      this.loading = false
    },
    formatName(user) {
      return String(user.username ?? 'Unnamed User').trim()
    },
  },
}
</script>

<style lang="scss">
$prefix: 'chat';

.#{$prefix} {
  height: 100%;
  background: linear-gradient(180deg, #1a1f34, #2e307d);
  background-attachment: fixed;
  padding-top: var(--header);

  &--desktop {
    --header: 54px;

    display: flex;
    flex-direction: column;
    height: 380px;
    overflow: hidden;
    position: relative;
    background: rgba(26, 31, 52, 0.7);

    .#{$prefix}__messages {
      overflow: auto;
      margin-bottom: 85px;
      display: block;
      padding-bottom: 16px !important;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .#{$prefix}__form {
      position: absolute !important;
      bottom: 0;
      background: none;

      .v-input__control {
        background: #1a1f34;
      }
    }

    .#{$prefix}__header {
      background: #1a1f34 !important;
      padding: 5px !important;
    }
  }

  &__submit {
    height: 56px !important;
    width: 64px;
    min-width: auto !important;
    margin-bottom: -2px;
  }

  &__messages {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    flex: 1;

    & > * {
      flex: 0 !important;
    }
  }

  &__form {
    background-color: var(--surface-color);
    padding: 16px;
    backdrop-filter: blur(16px);
    position: fixed;
    bottom: var(--nav-bar);
    left: 0;
    z-index: 4;
    width: 100%;

    @supports (backdrop-filter: blur(16px)) {
      background-color: var(--surface-alpha-color);
    }
  }

  &__bubble {
    padding: 10px;
    border-radius: 8px;
    max-width: calc(100% - 48px);
  }

  &__name {
    font-weight: 700;
  }

  &__date {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.62rem;
    display: block;
    text-align: right;
  }

  &--default {
    .#{$prefix}__bubble {
      background: linear-gradient(90deg, #302b63 0%, #302b63 100%);
    }
  }

  &--me {
    .#{$prefix}__bubble {
      background: linear-gradient(90deg, #6441a5 0%, #6441a5 100%);
      margin-left: auto;
      // float: right;
    }

    .#{$prefix}__avatar,
    .#{$prefix}__name {
      display: none;
    }
  }

  &--mention {
    .#{$prefix}__bubble {
      background: linear-gradient(93.75deg, #348f50 -32.77%, #56b4d3 105.21%);
    }
  }
}
</style>
