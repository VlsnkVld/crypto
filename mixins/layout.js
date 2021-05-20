export default {
  layout(context) {
    if (context.$vuetify.breakpoint.lgAndUp) {
      return 'desktop'
    }

    return 'default'
  },
}
