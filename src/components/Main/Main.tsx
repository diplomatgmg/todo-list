import React, { type ReactElement } from 'react'
import TaskList from '../TaskList/TaskList'

const Main = (): ReactElement => {
  return (
    <main className="main">
      <TaskList forIsCompleted={false}/>
      <TaskList forIsCompleted={true}/>
    </main>
  )
}

export default Main