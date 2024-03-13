import React, { type FC, type ReactElement } from 'react'
import clsx from 'clsx'
import { type Task } from '../../types'
import PenSvg from '../../assets/svg/rename.svg'
import DoneEmptySvg from '../../assets/svg/done-empty.svg'
import DoneSvg from '../../assets/svg/done.svg'
import TrashSvg from '../../assets/svg/trash.svg'
import ApplySvg from '../../assets/svg/apply.svg'
import CrossSvg from '../../assets/svg/discard.svg'
import './style.css'
import { useAppDispatch } from '../../redux/hooks'
import { deleteTask, toggleTaskComplete } from '../../redux/taskSlice'

interface TaskItemProps {
  isEditing?: boolean
  task: Task
}

const TaskItem: FC<TaskItemProps> = ({ isEditing = false, task }): ReactElement => {
  const dispatch = useAppDispatch()

  const handleToggleTaskComplete = (): void => {
    dispatch(toggleTaskComplete(task.id))
  }

  const handleDeleteTask = (): void => {
    dispatch(deleteTask(task.id))
  }

  const renderNameField = (): ReactElement => {
    if (isEditing) {
      return (
        <label className="task-item__rename">
          <input className="task-item__name" value={task.name}/>
        </label>
      )
    }

    return (
      <>
        {!task.isCompleted && <img src={PenSvg} alt="" className="rena"/>}
        <p className="task-item__name">{task.name}</p>
      </>
    )
  }

  const taskItemClassName = clsx('task-item', {
    'task-item__editing': isEditing,
    'task-done': task.isCompleted
  })

  return (
    <li className={taskItemClassName}>
      <div className="task-item__left">{renderNameField()}</div>
      <div className="task-item__buttons">
        <img onClick={handleToggleTaskComplete} src={task.isCompleted ? DoneSvg : DoneEmptySvg} alt=""/>
        <img onClick={handleDeleteTask} src={TrashSvg} alt=""/>
        {isEditing && <img src={ApplySvg} alt=""/>}
        {isEditing && <img src={CrossSvg} alt=""/>}
      </div>
    </li>
  )
}

export default TaskItem
