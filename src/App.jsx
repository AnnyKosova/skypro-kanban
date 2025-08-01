import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopExit from './components/popups/PopExit/PopExit'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'

function App() {
  return (
    <div className="wrapper">
      {/* pop-up start */}
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      {/* pop-up end */}

      <Header />
      <Main />
    </div>
  )
}

export default App
