import Vue from 'vue'
import gql from 'graphql-tag'

const PLUGIN_KEY = 'game'

const GAME_DURATION = 25000
const GAME_BETS_ACCEPTING_PERIOD = 10000

export default function gamePlugin({ app, redirect }, inject) {
  Vue.use({
    install(Vue) {
      Vue[`$${PLUGIN_KEY}`] = Vue.prototype[`$${PLUGIN_KEY}`] = new Vue({
        name: 'GamePlugin',
        data() {
          return {
            bet: { ...emptyBet },
            game: null,
            now: Date.now(),
            nowTimer: null,
          }
        },
        computed: {
          authToken() {
            return app.$auth.token
          },
          left() {
            const createdAt = this.game?.createdAt ?? this.now
            const left = GAME_DURATION - (this.now - createdAt)
            return left > 0 ? left : 0
          },
          progress() {
            return (100 / GAME_DURATION) * this.left
          },
          canAcceptBet() {
            return (
              this.left >= GAME_BETS_ACCEPTING_PERIOD && this.game?.canAcceptBet
            )
          },
        },
        watch: {
          'game.id'(value, oldValue) {
            if (value !== oldValue) {
              this.reset()
            }
          },
          authToken: {
            immediate: true,
            handler() {
              if (this.authToken) {
                this.fetchBet()
              }
            },
          },
        },
        beforeDestroy() {
          clearInterval(this.nowTimer)
        },
        created() {
          this.nowTimer = setInterval(() => {
            this.$set(this, 'now', Date.now())
          }, 10)

          // Получение текущей игры
          this.fetchGame()

          // Подписка на текущую игру
          app.$apollo
            .subscribe({
              query: GAME_SUBSCRIPTION,
            })
            .subscribe({
              next: ({ data }) => {
                this.setGame(data.data)
              },
            })

          // Подписка на текущую ставку
          app.$apollo
            .subscribe({
              query: GAME_BET_SUBSCRIPTION,
            })
            .subscribe({
              next: ({ data }) => {
                this.setBet(data.data)
              },
            })
        },
        methods: {
          reset() {
            this.bet = { ...emptyBet }
          },
          setTeam(team) {
            this.$set(this.bet, 'team', team)
          },
          setAmount(amount) {
            this.$set(this.bet, 'amount', amount)
          },
          addAmount(amount) {
            this.setAmount(this.bet.amount + amount)
            this.$set(this.bet, 'history', [...this.bet?.history, amount])
          },
          undoAmount() {
            const lastAmount = this.bet?.history?.pop?.()
            this.setAmount(this.bet.amount - lastAmount ?? 0)
            this.$set(this.bet, 'history', [...this.bet?.history])
          },
          async createBet() {
            try {
              const { data } = await app.$apollo.mutate({
                mutation: GAME_BET_MUTATION,
                variables: {
                  gameId: app.$game.game?.id,
                  type: this.bet.team === 'predictDown' ? 0 : 1,
                  amount: this.bet.amount,
                },
              })

              this.setBet(data.data)
            } catch (error) {
              app.$notify.toast(error.message, { color: 'red' })
            }
          },
          setBet(bet) {
            // Определяем команду
            if (bet) {
              bet.team = bet.type === 0 ? 'predictDown' : 'predictUp'
              // Определяем статус
              if (bet.status === 0) {
                bet.status = 'new'
              } else if (bet.status === 1) {
                bet.status = 'canceled-winner'
              } else if (bet.status === 2) {
                bet.status = 'canceled-loser'
              } else if (bet.status === 3) {
                bet.status = 'winner'
              } else {
                bet.status = 'loser'
              }
            }
            this.$set(this, 'bet', bet || emptyBet)
          },
          setGame(game) {
            if (game) {
              game.createdAt = new Date(game.createdAt)
            }
            this.$set(this, 'game', game)
          },
          async fetchGame() {
            const { data } = await app.$apollo.query({ query: GAME_QUERY })
            this.setGame(data.data)
          },
          async fetchBet() {
            const { data } = await app.$apollo.query({ query: GAME_BET_QUERY })
            this.setBet(data.data)
          },
        },
      })

      inject(PLUGIN_KEY, Vue[`$${PLUGIN_KEY}`])
    },
  })
}

const emptyBet = {
  team: null,
  amount: 0,
  history: [],
}

const GAME_FRAGMENT = gql`
  fragment GameFragment on Game {
    id
    predictDown: teamA
    predictUp: teamB
    bank
    canAcceptBet: acceptBets
    createdAt
  }
`

const GAME_BET_FRAGMENT = gql`
  fragment GameBetFragment on Bet {
    id
    gameId
    type
    status
    amount: ammount
    received: predictWin
  }
`

const GAME_QUERY = gql`
  ${GAME_FRAGMENT}
  query game {
    data: game {
      ...GameFragment
    }
  }
`

const GAME_BET_QUERY = gql`
  ${GAME_BET_FRAGMENT}
  query bet {
    data: activeBet {
      ...GameBetFragment
    }
  }
`

const GAME_SUBSCRIPTION = gql`
  ${GAME_FRAGMENT}
  subscription gameSub {
    data: gameSub {
      ...GameFragment
    }
  }
`

const GAME_BET_SUBSCRIPTION = gql`
  ${GAME_BET_FRAGMENT}
  subscription betSub {
    data: betSub {
      ...GameBetFragment
    }
  }
`

const GAME_BET_MUTATION = gql`
  ${GAME_BET_FRAGMENT}
  mutation createBet($gameId: Int, $type: Int, $amount: Int) {
    data: createBet(gameId: $gameId, type: $type, ammount: $amount) {
      ...GameBetFragment
    }
  }
`
