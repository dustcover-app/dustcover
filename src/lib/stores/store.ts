import { writable, derived } from 'svelte/store'
import type { Task } from '$lib/utils/interface'
import type { User } from '@auth0/auth0-spa-js'

export const isAuthenticated = writable(false)
export const user = writable<User | undefined>({})
export const popupOpen = writable(false)
export const error = writable()

export const tasks = writable<Task[]>([])

export const user_tasks = derived([tasks, user], ([$tasks, $user]) => {
  let logged_in_user_tasks: Task[] = []

  if ($user && $user.email) {
    logged_in_user_tasks = $tasks.filter(task => task.user === $user.email)
  }

  return logged_in_user_tasks
})
