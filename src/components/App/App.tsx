import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './style.css'

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  )
}

export default App
