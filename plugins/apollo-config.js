export default ({ app }) => {
  const host =
    process.env.GRAPHQL_HOST || 'https://bitbet-lq4prtzzva-uc.a.run.app'
  const isProduction = host.includes('https')

  return {
    httpEndpoint: `${host}/graphql`,
    wsEndpoint: `${host
      .replace(/^http?:\/\//, 'ws://')
      .replace(/^https?:\/\//, 'wss://')}/subscriptions`,

    persisting: isProduction,
    websocketsOnly: isProduction,

    getAuth: () => {
      return app.$auth.token ? `Bearer ${app.$auth.token}` : null
    },
  }
}
