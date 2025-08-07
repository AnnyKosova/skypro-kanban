import React, { useState } from 'react'
import './App.css'
import { Wrapper } from './App.styled'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopExitComponent from './components/popups/PopExit/PopExit'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  const [isExitOpen, setIsExitOpen] = useState(false)

  const handleExitOpen = () => {
    setIsExitOpen(true)
  }

  const handleExitClose = () => {
    setIsExitOpen(false)
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* pop-up start */}
        <PopExitComponent isOpen={isExitOpen} onClose={handleExitClose} />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}

        <Header onExitClick={handleExitOpen} />
        <Main />
      </Wrapper>
    </>
  )
}

export default App
