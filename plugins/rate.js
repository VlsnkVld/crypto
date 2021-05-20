import Vue from 'vue'
import gql from 'graphql-tag'

const PLUGIN_KEY = 'rate'

export default function ratePlugin({ app, redirect }, inject) {
  Vue.use({
    install(Vue) {
      Vue[`$${PLUGIN_KEY}`] = Vue.prototype[`$${PLUGIN_KEY}`] = new Vue({
        name: 'RatePlugin',
        data() {
          return {
            rates: [],
          }
        },
        computed: {
          currentRate() {
            return this.rates[this.rates.length - 1]?.rate ?? 0
          },
        },
        created() {
          this.fetch()
          this.subscribe()
        },
        methods: {
          subscribe() {
            app.$apollo
              .subscribe({
                query: RATE_SUBSCRIPTION,
              })
              .subscribe({
                next: ({ data }) => {
                  this.setRate(data.data)
                },
              })
          },
          async fetch() {
            const { data } = await app.$apollo.query({ query: RATE_QUERY })
            this.setRate(data.data)
          },
          setRate(data) {
            for (const item of data) {
              item.createdAt = new Date(item.createdAt)
            }

            // this.$set(this, 'rates', data.data)

            const items = data.filter(
              (itemA) =>
                !this.rates.find(
                  (itemB) => +itemB.createdAt === +itemA.createdAt
                )
            )

            for (const item of items) {
              item.createdAt = new Date(item.createdAt)
              this.$set(this.rates, this.rates.length, item)
            }

            if (this.rates.length > 100) {
              this.rates.splice(0, this.rates.length - 100)
              this.$set(this, 'rates', this.rates)
            }
          },
        },
      })

      inject(PLUGIN_KEY, Vue[`$${PLUGIN_KEY}`])
    },
  })
}

const RATE_FRAGMENT = gql`
  fragment RateFragment on Btc {
    rate
    createdAt
  }
`

const RATE_QUERY = gql`
  ${RATE_FRAGMENT}
  query btcRate {
    data: btcRate {
      ...RateFragment
    }
  }
`

const RATE_SUBSCRIPTION = gql`
  ${RATE_FRAGMENT}
  subscription btcRate {
    data: btcRate {
      ...RateFragment
    }
  }
`
