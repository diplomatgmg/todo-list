import React, { type ReactElement } from 'react'
import TaskList from '../TaskList/TaskList'
import './style.css'

const Main = (): ReactElement => {
  return (
    <main className="main">
      <TaskList/>
    </main>
  )
}

export default Main
