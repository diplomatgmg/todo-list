import React, { type ReactElement } from 'react'
import './style.css'

const Header = (): ReactElement => {
  return (
   <header className="header">
     <label className="header__label">
       <input className="header__input" type="text" placeholder="Добавить задачу..."/>
     </label>
     <button className="header__button" type="button">+</button>
   </header>
  )
}

export default Header
