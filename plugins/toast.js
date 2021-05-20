import Vue from 'vue'
import VuetifyNotify from 'vuetify-notify/components/Index.vue'

const PLUGIN_KEY = 'notify'

export default ({ app }, inject) => {
  Vue.use({
    install(Vue) {
      const ExtendComponent = Vue.extend(VuetifyNotify)

      const instance = new ExtendComponent({
        vuetify: app.vuetify,
        data: {
          options: {
            toast: {
              x: 'center',
              y: 'bottom',
              color: 'green',
            },
            dialog: {
              width: 400,
            },
          },
        },
      })

      // eslint-disable-next-line prettier/prettier
      Vue[`$${PLUGIN_KEY}`] = Vue.prototype[`$${PLUGIN_KEY}`] = instance.$mount()
      inject(PLUGIN_KEY, Vue[`$${PLUGIN_KEY}`])
      document.getElementById('__nuxt').parentElement.appendChild(instance.$el)
    },
  })
}
