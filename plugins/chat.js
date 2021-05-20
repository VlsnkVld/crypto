import Vue from 'vue'
import gql from 'graphql-tag'

const PLUGIN_KEY = 'chat'
const STORAGE_TOKEN = 'chat'

export default function chatPlugin({ app }, inject) {
  inject(
    PLUGIN_KEY,
    new Vue({
      name: 'ChatPlugin',
      data() {
        return {
          /** Messages */
          messages: [],
        }
      },
      computed: {
        lastReadMessage: {
          get: getLastReadMessage,
          set(value) {
            return localStorage.setItem(STORAGE_TOKEN, value)
          },
        },
        counter() {
          const lastMessage = this.messages[this.messages.length - 1]
          return lastMessage?.user?.id !== app.$auth.user?.id &&
            lastMessage?.id > getLastReadMessage()
            ? 1
            : 0
        },
      },
      created() {
        this.fetchChat()
        this.subscribe()
      },
      methods: {
        // Mark as read
        markAsRead() {
          const lastMessage = this.messages[this.messages.length - 1]
          if (lastMessage && lastMessage?.id > this.lastReadMessage) {
            this.lastReadMessage = lastMessage?.id
          }
        },
        // Detect message type
        detectType(message) {
          if (message.from.id === app.$auth.user?.id) {
            return 'chat--me'
          } else if (message.text.includes(`@${app.$auth.user?.nickname}`)) {
            // TODO: Regex что бы при логине @lolkek, не триггериться на упомянния @lolkekcheburek
            return 'chat--mention'
          } else {
            return 'chat--default'
          }
        },
        // Send message
        async send(text) {
          try {
            const { data } = await app.$apollo.mutate({
              mutation: CHAT_SEND_MUTATION,
              variables: { text },
            })
            this.pushMessage(data.data)
            this.markAsRead()
            return true
          } catch (error) {
            app.$notify.toast(error.message, { color: 'red' })
            return false
          }
        },
        // Fetch messages
        async fetchChat() {
          const { data } = await app.$apollo.query({ query: CHAT_QUERY })
          data.data.reverse().map(this.pushMessage)
        },
        // Subscribe to new messages
        subscribe() {
          app.$apollo
            .subscribe({
              query: CHAT_SUBSCRIPTION,
            })
            .subscribe({
              next: ({ data }) => {
                this.pushMessage(data.data)
              },
            })
        },
        // Push message
        pushMessage(message) {
          if (
            message.from &&
            !this.messages.find((item) => item.id === message.id)
          ) {
            message.createdAt = new Date(message.createdAt)
            this.$set(this.messages, this.messages.length, message)
          }
        },
      },
    })
  )
}

// Get last read message
function getLastReadMessage() {
  return Number(localStorage.getItem(STORAGE_TOKEN) || 0)
}

const CHAT_MESSAGE_FRAGMENT = gql`
  fragment ChatMessageFragment on Message {
    id
    from: user {
      id
      nickname: nickName
    }
    text: message
    createdAt
  }
`

const CHAT_SUBSCRIPTION = gql`
  ${CHAT_MESSAGE_FRAGMENT}
  subscription chatSub {
    data: messageAdded {
      ...ChatMessageFragment
    }
  }
`

const CHAT_QUERY = gql`
  ${CHAT_MESSAGE_FRAGMENT}
  query chat {
    data: chat {
      ...ChatMessageFragment
    }
  }
`

const CHAT_SEND_MUTATION = gql`
  ${CHAT_MESSAGE_FRAGMENT}
  mutation send($text: String!) {
    data: createMessage(message: $text) {
      ...ChatMessageFragment
    }
  }
`
