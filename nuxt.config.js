export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s — BitcyBets',
    title: 'game',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: '#100F2E' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // eslint-disable-next-line prettier/prettier
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap' },
      // eslint-disable-next-line prettier/prettier
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/theme.scss', '~/assets/inputs.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue.js',
    '~/plugins/toast',
    '~/plugins/timeago',
    '~/plugins/apollo',
    '~/plugins/auth',
    '~/plugins/rate',
    '~/plugins/notifications',
    '~/plugins/chat',
    '~/plugins/game',
    '~/plugins/validate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-validate', 'nuxt-i18n', '@nuxtjs/apollo'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    defaultAssets: false,
    treeShake: true,
    // #F57D7D, 100%
  },

  // https://i18n.nuxtjs.org/options-reference
  i18n: {
    locales: [
      // eslint-disable-next-line prettier/prettier
      { code: 'en', iso: 'en-US', file: 'en.js', title: 'English', emoji: '🇬🇧' },
      // eslint-disable-next-line prettier/prettier
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', title: 'Русский', emoji: '🇷🇺' },
    ],
    langDir: './i18n',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // https://www.npmjs.com/package/%40nuxtjs/apollo
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
  },

  // https://github.com/nuxt-community/dotenv-module
  dotenv: {
    systemvars: true,
    only: ['GRAPHQL_HOST'],
  },

  // https://github.com/lewyuburi/nuxt-validate
  nuxtValidate: {
    lang: 'en',
    // rules: ['required', 'is'],
    // nuxti18n: {
    //   locale: {
    //     en: 'en',
    //     ru: 'ru',
    //   },
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
