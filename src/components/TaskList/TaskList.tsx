import React, { type FC, type ReactElement } from 'react'
import { tasks } from './tasks'
import TaskItem from '../TaskItem/TaskItem'
import ApplySvg from '../../assets/svg/apply.svg'
import CrossSvg from '../../assets/svg/discard.svg'

interface TaskListProps {
  forIsCompleted: boolean
}

const TaskList: FC<TaskListProps> = ({ forIsCompleted }): ReactElement => {
  const filteredTasks = tasks.filter(task => task.isCompleted === forIsCompleted)

  const taskCountName = forIsCompleted ? 'Done' : 'Tasks to do'

  return (
    <div className="main__tasks">
      <p className="main__task-count">{taskCountName} - {filteredTasks.length}</p>
      <ul className="main__task-list">
        {filteredTasks.map((task) => <TaskItem key={task.name} task={task}/>)}
      </ul>

      {
        !forIsCompleted
          ? (
          <li className="main__task">
            <div className="main__task-left">
              <label className="main__task-rename">
                <input className="main__task-name" value="Example task 4"/>
              </label>
            </div>
            <div className="main__buttons">
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
