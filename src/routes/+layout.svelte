<script lang="ts">
  import { onMount } from 'svelte'
  import auth from '$lib/utils/authService'
  import type { Auth0Client } from '@auth0/auth0-spa-js'
  import Navigation from '@components/Navigation.svelte'

  import '@sass/app.sass'
  import { isAuthenticated, user } from '@/lib/stores/store'

  let auth0Client: Auth0Client

  const login = () => {
    auth.loginWithPopup(auth0Client)
  }

  const logout = () => {
    auth.logout(auth0Client)
  }

  onMount(async () => {
    auth0Client = await auth.createClient()

    isAuthenticated.set(await auth0Client.isAuthenticated())
    user.set(await auth0Client.getUser())
  })

  let { children } = $props()
</script>

<div class="app">
  <div class="content-wrapper">
    <Navigation {login} {logout} />
    <main class="container">
      {@render children()}
    </main>
  </div>
</div>

<style lang="sass">
  @use '../lib/sass/_variables'
  .content-wrapper
    main.container
      margin-top: variables.$nav-height
</style>
