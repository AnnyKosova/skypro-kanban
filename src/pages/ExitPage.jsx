import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import PopExitComponent from '../components/popups/PopExit/PopExit'
import { useAuth } from '../contexts/AuthContext'

function ExitPage() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleClose = () => {
    setIsModalOpen(false)
    navigate('/')
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div style={{ 
      maxWidth: '100%', 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#F1F1F1'
    }}>
      <Header />
      <PopExitComponent 
        isOpen={isModalOpen} 
        onClose={handleClose} 
        onLogout={handleLogout} 
      />
    </div>
  )
}

export default ExitPage 