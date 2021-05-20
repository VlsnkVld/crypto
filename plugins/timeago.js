import Vue from 'vue'
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'TimeagoRaw',
  locale: 'en',
  locales: {
    en: require('date-fns/locale/en'),
    ru: require('date-fns/locale/ru'),
  },
})
