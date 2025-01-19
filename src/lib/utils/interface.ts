interface Task {
  id: string
  description: string
  completed: boolean
  user: string | undefined
}

export type { Task }
