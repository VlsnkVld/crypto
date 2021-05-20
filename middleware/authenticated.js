export default function ({ app, redirect }) {
  // If the user is not authenticated
  if (!app.$auth.isAuthenticated) {
    return redirect('/auth/sign-in')
  }
}
