import { createSlice } from '@reduxjs/toolkit'
import { type Task } from '../types'
import reducers from './reducers'

interface TaskState {
  tasks: Task[]
}

const initialState: TaskState = {
  tasks: []
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers
})

export const {
  addTask,
  toggleTaskComplete,
  deleteTask,
  renameTask,
  changeTaskOrder
} = taskSlice.actions

export default taskSlice.reducer
export { type TaskState }
