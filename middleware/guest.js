export default function ({ app, redirect }) {
  // If the user is not authenticated
  if (!app.$auth.isGuest) {
    return redirect('/')
  }
}
