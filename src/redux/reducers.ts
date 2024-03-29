import { type TaskState } from './taskSlice'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type Task, type TaskId } from '../types'
import _ from 'lodash'

export default {
  addTask (state: TaskState, action: PayloadAction<string>) {
    const task: Task = {
      id: _.uniqueId(),
      name: action.payload,
      isCompleted: false
    }
    state.tasks = [task, ...state.tasks]
  },

  toggleTaskComplete (state: TaskState, action: PayloadAction<TaskId>) {
    const taskToToggle = _.find(state.tasks, { id: action.payload })
    if (taskToToggle !== undefined) {
      taskToToggle.isCompleted = !taskToToggle.isCompleted
    }
    state.tasks = _.orderBy(state.tasks, ['isCompleted'])
  },

  deleteTask (state: TaskState, action: PayloadAction<TaskId>) {
    state.tasks = _.reject(state.tasks, { id: action.payload })
  },

  renameTask (state: TaskState, action: PayloadAction<{ id: TaskId, name: string }>) {
    const { id, name } = action.payload
    const taskToRename = _.find(state.tasks, { id })

    if (taskToRename !== undefined) {
      taskToRename.name = name
    }
  },

  changeTaskOrder (state: TaskState, action: PayloadAction<{ startIndex: number, endIndex: number }>) {
    const { startIndex, endIndex } = action.payload
    const [removedTask] = state.tasks.splice(startIndex, 1)
    state.tasks.splice(endIndex, 0, removedTask)
  }
}
