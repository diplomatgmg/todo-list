import React, { type FC, type ReactElement } from 'react'
import PenSvg from '../../assets/svg/rename.svg'
import DoneEmptySvg from '../../assets/svg/done-empty.svg'
import DoneSvg from '../../assets/svg/done.svg'
import TrashSvg from '../../assets/svg/trash.svg'
import ApplySvg from '../../assets/svg/apply.svg'
import CrossSvg from '../../assets/svg/discard.svg'
import { type Task } from '../../types'

interface TaskItemProps {
  isEditing?: boolean
  task: Task
}

const TaskItem: FC<TaskItemProps> = ({ isEditing = false, task }): ReactElement => {
  if (isEditing) {
    return (
      <li className="main__task">
        <div className="main__task-left">
          <label className="main__task-rename">
            <input className="main__task-name" value={task.name}/>
          </label>
        </div>
        <div className="main__buttons">
          <img src={ApplySvg} alt=""/>
          <img src={CrossSvg} alt=""/>
        </div>
      </li>
    )
  }

  if (task.isCompleted) {
    return (
      <li className="main__task task-done">
        <div className="main__task-left">
          <p className="main__task-name">{task.name}</p>
        </div>
        <div className="main__buttons">
          <img src={task.isCompleted ? DoneSvg : DoneEmptySvg} alt=""/>
          <img src={TrashSvg} alt=""/>
        </div>
      </li>
    )
  }

  return (
    <li className="main__task">
      <div className="main__task-left">
        <img src={PenSvg} alt="" className="main__task-rename-img"/>
        <p className="main__task-name">{task.name}</p>
      </div>
      <div className="main__buttons">
        <img src={DoneEmptySvg} alt=""/>
        <img src={TrashSvg} alt=""/>
      </div>
    </li>
  )

}

export default TaskItem
