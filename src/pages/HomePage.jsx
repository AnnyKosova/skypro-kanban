import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import PopBrowse from '../components/popups/PopBrowse/PopBrowse'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import { useAuth } from '../contexts/AuthContext'

function HomePage() {
  const { user } = useAuth()

  return (
    <div style={{ 
      maxWidth: '100%', 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#F1F1F1',
      position: 'relative'
    }}>
      <PopNewCard />
      <PopBrowse />
      
      <Header user={user} />
      <Main />
    </div>
  )
}

export default HomePage 