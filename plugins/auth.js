import Vue from 'vue'
import gql from 'graphql-tag'

const PLUGIN_KEY = 'auth'
const STORAGE_TOKEN = 'auth-token'
export const REFERRAL_QUERY = 'referrer'
export const REFERRAL_KEY = 'referrer'
const STATUS = {
  authorized: 'authorized',
  unauthorized: 'unauthorized',
  loading: 'loading',
}

export default function authPlugin({ app, redirect }, inject) {
  Vue.use({
    install(Vue) {
      Vue[`$${PLUGIN_KEY}`] = Vue.prototype[`$${PLUGIN_KEY}`] = new Vue({
        name: 'AuthPlugin',
        data() {
          return {
            /** User */
            user: null,

            /** Status */
            status: localStorage.getItem(STORAGE_TOKEN)
              ? STATUS.loading
              : STATUS.unauthorized,

            subscribe: null,
            isFirstIteration: true,
          }
        },
        computed: {
          /** Token */
          token: {
            get() {
              return localStorage.getItem(STORAGE_TOKEN)
            },
            set(token = null) {
              if (token) {
                localStorage.setItem(STORAGE_TOKEN, token)
              } else {
                localStorage.removeItem(STORAGE_TOKEN)
              }
            },
          },

          /** is Authenticated */
          isAuthenticated() {
            return this.status === STATUS.authorized || this.loading
          },

          /** is Guest */
          isGuest() {
            return this.status === STATUS.unauthorized
          },

          /** is Guest */
          loading() {
            return this.status === STATUS.loading
          },
        },
        watch: {
          token: {
            immediate: true,
            handler(value, oldValue) {
              if (value !== oldValue && !this.isFirstIteration) {
                if (this.token) {
                  app.$apolloHelpers.onLogin(this.token)
                } else {
                  app.$apolloHelpers.onLogout()
                }
              } else if (this.isFirstIteration) {
                this.isFirstIteration = false
              }

              if (this.token && !this.user) {
                this.status = STATUS.loading
                this.fetchUser()
              }

              // Subscribe to user updates
              if (!this.token) {
                this.subscribe?.unsubscribe?.()
                this.subscribe = null
              } else {
                this.subscribe = app.$apollo
                  .subscribe({
                    query: USER_SUBSCRIPTION,
                  })
                  .subscribe({
                    next: ({ data }) => {
                      this.$set(this, 'user', data.data)
                    },
                    error(error) {
                      console.error('user', error)
                    },
                  })
              }
            },
          },
        },
        methods: {
          // Auth
          async signIn(phone, password) {
            this.status = STATUS.loading
            try {
              const { data: response } = await app.$apollo.mutate({
                mutation: USER_LOGIN_MUTATION,
                variables: { phone, password },
              })

              this.token = response.data.token
              this.user = response.data.user
              this.status = STATUS.authorized
              // redirect('/') // TODO: Redirect back
              location.replace('/')
            } catch (error) {
              app.$notify.toast(error.message, { color: 'red' })
              this.status = STATUS.unauthorized
            }
          },

          // Registration
          async signUp(input) {
            this.status = STATUS.loading
            try {
              input.referral = localStorage.getItem(REFERRAL_KEY) ?? null
              const { data: response } = await app.$apollo.mutate({
                mutation: USER_CREATE_MUTATION,
                variables: input,
              })

              this.token = response.data.token
              this.user = response.data.user
              this.status = STATUS.authorized
              // redirect('/') // TODO: Redirect back
              location.replace('/')
            } catch (error) {
              app.$notify.toast(error.message, { color: 'red' })
              this.status = STATUS.unauthorized
              throw error
            }
          },

          // Fetch user
          async fetchUser() {
            try {
              const { data: response } = await app.$apollo.query({
                query: USER_QUERY,
              })

              this.$set(this, 'user', response.data)
              this.$set(this, 'status', STATUS.authorized)
              // this.user = response.data
              // this.status = STATUS.authorized
            } catch (e) {
              // Выходить только если сессия устарела || TODO: Не проверял -- работает ли
              for (const error of e?.graphQLErrors ?? []) {
                if (error?.extensions?.code === 'UNAUTHENTICATED') {
                  this.logout()
                }
              }
            }
          },

          // Logout
          logout() {
            this.token = null
            this.user = null
            this.status = STATUS.unauthorized
            redirect('/')
          },
        },
      })

      inject(PLUGIN_KEY, Vue[`$${PLUGIN_KEY}`])
    },
  })
}

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    phone
    nickname: nickName
    balance
    balanceLastIncome: lastWinBet
    referralBalance: balanceRef
    referralBalanceLastIncome: lastRefBonus
    referral: referal
  }
`

const USER_QUERY = gql`
  ${USER_FRAGMENT}
  query me {
    data: me {
      ...UserFragment
    }
  }
`

const USER_SUBSCRIPTION = gql`
  ${USER_FRAGMENT}
  subscription userSub {
    data: userSub {
      ...UserFragment
    }
  }
`

const USER_CREATE_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation createUser(
    $phone: String!
    $nickName: String
    $password: String!
    $referral: String
  ) {
    data: createUser(
      phone: $phone
      nickName: $nickName
      password: $password
      referal: $referral
    ) {
      user {
        ...UserFragment
      }
      token
    }
  }
`

const USER_LOGIN_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation login($phone: String!, $password: String!) {
    data: login(phone: $phone, password: $password) {
      user {
        ...UserFragment
      }
      token
    }
  }
`
