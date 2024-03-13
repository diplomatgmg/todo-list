import React, { type ChangeEvent, type FC, type MutableRefObject, type ReactElement, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { type Task } from '../../types'
import RenameSvg from '../../assets/svg/rename.svg'
import DoneEmptySvg from '../../assets/svg/done-empty.svg'
import DoneSvg from '../../assets/svg/done.svg'
import TrashSvg from '../../assets/svg/trash.svg'
import ApplySvg from '../../assets/svg/apply.svg'
import CrossSvg from '../../assets/svg/discard.svg'
import './style.css'
import { useAppDispatch } from '../../redux/hooks'
import { deleteTask, renameTask, toggleTaskComplete } from '../../redux/taskSlice'

interface TaskItemProps {
  task: Task
}

const TaskItem: FC<TaskItemProps> = ({ task }): ReactElement => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [input, setInput] = useState<string>(task.name)

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()

  const handleToggleTaskComplete = (): void => {
    dispatch(toggleTaskComplete(task.id))
  }

  const handleDeleteTask = (): void => {
    dispatch(deleteTask(task.id))
  }

  useEffect(() => {
    if (isEditing && inputRef.current !== null) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const handleSetInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  const handleRenameTask = (): void => {
    dispatch(renameTask({ id: task.id, name: input }))
    setIsEditing(false)
  }

  const renderNameField = (): ReactElement => {
    if (isEditing) {
      return (
        <label className="task-item__rename">
          <input className="task-item__name" value={input} onChange={handleSetInput} ref={inputRef}/>
        </label>
      )
    }

    return (
      <>
        {!task.isCompleted && <img src={RenameSvg} onClick={() => setIsEditing(true)} alt="" className="rena"/>}
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
        {!isEditing && <img onClick={handleToggleTaskComplete} src={task.isCompleted ? DoneSvg : DoneEmptySvg} alt=""/>}
        {!isEditing && <img onClick={handleDeleteTask} src={TrashSvg} alt=""/>}
        {isEditing && <img onClick={handleRenameTask} src={ApplySvg} alt=""/>}
        {isEditing && <img onClick={() => setIsEditing(false)} src={CrossSvg} alt=""/>}
      </div>
    </li>
  )
}

export default TaskItem
