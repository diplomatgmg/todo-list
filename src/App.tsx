import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './style.sass'

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  )
}

export default App
