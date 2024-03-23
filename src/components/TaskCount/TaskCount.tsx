import React, { type FC, type ReactElement } from 'react'
import './style.sass'

interface TaskCountProps {
  title: string
  count: number
}

const TaskCount: FC<TaskCountProps> = ({ title, count }): ReactElement => {
  return (
    <p className="tasks-list__count">
      {title} - {count}
    </p>
  )
}

export default TaskCount
