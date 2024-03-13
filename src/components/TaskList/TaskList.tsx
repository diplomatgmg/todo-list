import React, { type FC, type ReactElement } from 'react'
import { tasks } from './tasks'
import TaskItem from '../TaskItem/TaskItem'
import ApplySvg from '../../assets/svg/apply.svg'
import CrossSvg from '../../assets/svg/discard.svg'
import './style.css'

interface TaskListProps {
  forIsCompleted: boolean
}

const TaskList: FC<TaskListProps> = ({ forIsCompleted }): ReactElement => {
  const filteredTasks = tasks.filter(task => task.isCompleted === forIsCompleted)

  const taskCountName = forIsCompleted ? 'Done' : 'Tasks to do'

  return (
    <div className="tasks-list">
      <p className="tasks-list__count">{taskCountName} - {filteredTasks.length}</p>
      <ul className="tasks-list-list">
        {filteredTasks.map((task) => <TaskItem key={task.name} task={task}/>)}
      </ul>

      {
        !forIsCompleted
          ? (
          <li className="task-item">
            <div className="task-item__left">
              <label className="task-item__rename">
                <input className="task-item__name" value="Example task 4"/>
              </label>
            </div>
            <div className="task-item__buttons">
              <img src={ApplySvg} alt=""/>
              <img src={CrossSvg} alt=""/>
            </div>
          </li>
            )
          : ''
      }
    </div>
  )
}

export default TaskList
