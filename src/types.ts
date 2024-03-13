interface Task {
  id: string
  name: string
  isCompleted: boolean
}

type TaskId = Task['id']

export type { Task, TaskId }
