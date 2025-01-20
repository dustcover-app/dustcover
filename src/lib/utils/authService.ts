import {
  Auth0Client,
  createAuth0Client,
  type Auth0ClientOptions,
} from '@auth0/auth0-spa-js'
import { user, isAuthenticated, popupOpen } from '$lib/stores/store'

const createClient = async () => {
  let auth0Client = await createAuth0Client({
    domain: import.meta.env.VITE_DOMAIN,
    clientId: import.meta.env.VITE_CLIENT_ID,
  })

  return auth0Client
}

const loginWithPopup = async (
  client: Auth0Client,
  options?: Auth0ClientOptions,
) => {
  popupOpen.set(true)
  try {
    await client.loginWithPopup(options)

    user.set(await client.getUser())
    isAuthenticated.set(true)
  } catch (e) {
    // eslint-disable-next-line
    console.error(e)
  } finally {
    popupOpen.set(false)
  }
}

const logout = (client: Auth0Client) => {
  return client.logout()
}

const auth = {
  createClient,
  loginWithPopup,
  logout,
}

export default auth
