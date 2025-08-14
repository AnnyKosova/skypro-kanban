import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import PopBrowse from '../components/popups/PopBrowse/PopBrowse'
import PopExitComponent from '../components/popups/PopExit/PopExit'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import PopNewTask from '../components/popups/PopNewTask/PopNewTask'
import { useAuth } from '../contexts/AuthContext'

function HomePage() {
  const [isExitOpen, setIsExitOpen] = React.useState(false)
  const [isNewTaskOpen, setIsNewTaskOpen] = React.useState(false)
  const { user, logout } = useAuth()
  
  const handleExitOpen = () => {
    setIsExitOpen(true)
  }
  
  const handleExitClose = () => {
    setIsExitOpen(false)
  }
  
  const handleLogout = () => {
    logout()
    setIsExitOpen(false)
  }
  
  const handleNewTaskOpen = () => {
    console.log('Opening new task modal')
    setIsNewTaskOpen(true)
  }
  
  const handleNewTaskClose = () => {
    console.log('Closing new task modal')
    setIsNewTaskOpen(false)
  }
  
  const handleTaskCreate = (newTask) => {
    console.log('Новая задача создана:', newTask)
    // Здесь можно добавить логику для сохранения задачи
    // Например, отправить в API или обновить состояние
  }

  return (
    <div style={{ 
      maxWidth: '100%', 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#F1F1F1',
      position: 'relative'
    }}>
      <PopExitComponent isOpen={isExitOpen} onClose={handleExitClose} onLogout={handleLogout} />
      <PopNewCard />
      <PopBrowse />
      <PopNewTask 
        isOpen={isNewTaskOpen} 
        onClose={handleNewTaskClose}
        onTaskCreate={handleTaskCreate}
      />
      
      <Header onExitClick={handleExitOpen} user={user} onNewTaskClick={handleNewTaskOpen} />
      <Main />
    </div>
  )
}

export default HomePage 