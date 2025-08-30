import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import PopBrowse from '../components/popups/PopBrowse/PopBrowse'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import { useAuth } from '../contexts/AuthContext'
import { useTasks } from '../contexts/TaskContext'

function HomePage() {
  const { user, logout } = useAuth()
  const { createTask, updateTask, deleteTask } = useTasks()
  const [isPopBrowseOpen, setIsPopBrowseOpen] = useState(false)
  const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const handleCardClick = (task) => {
    console.log('HomePage: handleCardClick called with:', task)
    setSelectedTask(task)
    console.log('HomePage: Setting selectedTask and opening modal')
    setIsPopBrowseOpen(true)
  }

  const handleClosePopBrowse = () => {
    setIsPopBrowseOpen(false)
    setSelectedTask(null)
  }

  const handleEditTask = async (taskData) => {
    console.log('Редактирование задачи:', taskData)
    try {
      const result = await updateTask(selectedTask._id, taskData)
      if (result.success) {
        handleClosePopBrowse()
      } else {
        console.error('Ошибка обновления задачи:', result.error)
      }
    } catch (error) {
      console.error('Ошибка обновления задачи:', error)
    }
  }

  const handleDeleteTask = async (taskId) => {
    console.log('Удаление задачи:', taskId)
    try {
      const result = await deleteTask(taskId)
      if (result.success) {
        handleClosePopBrowse()
      } else {
        console.error('Ошибка удаления задачи:', result.error)
      }
    } catch (error) {
      console.error('Ошибка удаления задачи:', error)
    }
  }

  const handleCreateTask = async (taskData) => {
    console.log('Создание новой задачи:', taskData)
    try {
      const result = await createTask(taskData)
      if (result.success) {
        console.log('Задача успешно создана')
        setIsPopNewCardOpen(false)
      } else {
        console.error('Ошибка создания задачи:', result.error)
      }
    } catch (error) {
      console.error('Ошибка создания задачи:', error)
    }
  }

  const handleOpenNewCard = () => {
    console.log('HomePage: handleOpenNewCard called')
    setIsPopNewCardOpen(true)
    console.log('HomePage: isPopNewCardOpen set to true')
  }

  const handleCloseNewCard = () => {
    console.log('HomePage: handleCloseNewCard called')
    setIsPopNewCardOpen(false)
    console.log('HomePage: isPopNewCardOpen set to false')
  }

  const handleExitClick = () => {
    logout()
  }

  return (
    <div style={{ 
      maxWidth: '100%', 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#F1F1F1',
      position: 'relative'
    }}>
      <PopNewCard 
        isOpen={isPopNewCardOpen}
        onClose={handleCloseNewCard}
        onCreateTask={handleCreateTask} 
      />
      <PopBrowse 
        isOpen={isPopBrowseOpen}
        onClose={handleClosePopBrowse}
        task={selectedTask}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
      
      <Header user={user} onExitClick={handleExitClick} onNewTaskClick={handleOpenNewCard} />
      <Main onCardClick={handleCardClick} />
    </div>
  )
}

export default HomePage 