import Vue from 'vue'

const PLUGIN_KEY = 'notifications'

export default function notificationsPlugin({ app }, inject) {
  inject(
    PLUGIN_KEY,
    new Vue({
      name: 'NotificationsPlugin',
      data() {
        return {
          /** Notifications */
          notifications: [],
        }
      },
      computed: {
        counter() {
          return 7 // this.notifications.length
        },
      },
      methods: {
        remove() {},
      },
    })
  )
}
