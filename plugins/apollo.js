import Vue from 'vue'
import VueApollo from 'vue-apollo'

const PLUGIN_KEY = 'apollo'

Vue.use(VueApollo)

export default ({ app }, inject) => {
  Vue.prototype.apolloProvider = app.apolloProvider
  inject(PLUGIN_KEY, app.apolloProvider.defaultClient)
}
