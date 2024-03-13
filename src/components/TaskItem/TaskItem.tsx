import React, { type FC, type ReactElement } from 'react'
import PenSvg from '../../assets/svg/rename.svg'
import DoneEmptySvg from '../../assets/svg/done-empty.svg'
import DoneSvg from '../../assets/svg/done.svg'
import TrashSvg from '../../assets/svg/trash.svg'
import ApplySvg from '../../assets/svg/apply.svg'
import CrossSvg from '../../assets/svg/discard.svg'
import { type Task } from '../../types'
import './style.css'

interface TaskItemProps {
  isEditing?: boolean
  task: Task
}

const TaskItem: FC<TaskItemProps> = ({ isEditing = false, task }): ReactElement => {
  if (isEditing) {
    return (
      <li className="task-item">
        <div className="task-item__left">
          <label className="task-item__rename">
            <input className="task-item__name" value={task.name}/>
          </label>
        </div>
        <div className="task-item__buttons">
          <img src={ApplySvg} alt=""/>
          <img src={CrossSvg} alt=""/>
        </div>
      </li>
    )
  }

  if (task.isCompleted) {
    return (
      <li className="task-item task-done">
        <div className="task-item__left">
          <p className="task-item__name">{task.name}</p>
        </div>
        <div className="task-item__buttons">
          <img src={task.isCompleted ? DoneSvg : DoneEmptySvg} alt=""/>
          <img src={TrashSvg} alt=""/>
        </div>
      </li>
    )
  }

  return (
    <li className="task-item">
      <div className="task-item__left">
        <img src={PenSvg} alt="" className="rena"/>
        <p className="task-item__name">{task.name}</p>
      </div>
      <div className="task-item__buttons">
        <img src={DoneEmptySvg} alt=""/>
        <img src={TrashSvg} alt=""/>
      </div>
    </li>
  )

}

export default TaskItem
