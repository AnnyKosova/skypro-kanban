import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import PopExitComponent from '../components/popups/PopExit/PopExit'
import { useAuth } from '../hooks/useAuth'
import styled from 'styled-components'

const ExitPageContainer = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.$isDark ? 'rgba(21, 20, 25, 1)' : '#F1F1F1'};
`

function ExitPage() {
  const { user, logout } = useAuth()
  const { isDark } = useTheme()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  const handleClose = () => {
    setIsModalOpen(false)
    navigate('/')
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleCardClick = (task) => {
    console.log("ExitPage: handleCardClick called with:", task)
  }

  return (
    <ExitPageContainer $isDark={isDark}>
      <Header user={user} />
      <Main onCardClick={handleCardClick} />
      <PopExitComponent 
        isOpen={isModalOpen} 
        onClose={handleClose} 
        onLogout={handleLogout} 
      />
    </ExitPageContainer>
  )
}

export default ExitPage
