import React from 'react'
import './assets/css/style.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  )
}

export default App
