import React, { type ChangeEvent, type FormEvent, type ReactElement, useRef, useState } from 'react'
import './style.css'
import { useAppDispatch } from '../../redux/hooks'
import { addTask } from '../../redux/taskSlice'

const Header = (): ReactElement => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleSetInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  const handleAddTask = (e: FormEvent): void => {
    e.preventDefault()

    if (input.length > 0) {
      dispatch(addTask(input))
    }

    setInput('')
    inputRef.current?.focus()
  }

  return (
    <header className="header">
      <form onSubmit={handleAddTask}>
        <label className="header__label">
          <input onChange={handleSetInput}
                 value={input}
                 ref={inputRef}
                 className="header__input"
                 type="text"
                 placeholder="Добавить задачу..."/>
        </label>
        <button className="header__button" type="submit">+</button>
      </form>
    </header>
  )
}

export default Header
