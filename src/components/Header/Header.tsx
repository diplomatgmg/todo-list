import React, { type ChangeEvent, type ReactElement, useState } from 'react'
import './style.css'
import { useAppDispatch } from '../../redux/hooks'
import { addTask } from '../../redux/taskSlice'

const Header = (): ReactElement => {
  const [input, setInput] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleSetInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)

  }

  const handleAddTask = (): void => {
    if (input.length > 0) {
      dispatch(addTask(input))
    }

    setInput('')
  }

  return (
    <header className="header">
      <label className="header__label">
        <input onChange={handleSetInput}
               value={input}
               className="header__input"
               type="text"
               placeholder="Добавить задачу..."/>
      </label>
      <button className="header__button" type="button" onClick={handleAddTask}>+</button>
    </header>
  )
}

export default Header
