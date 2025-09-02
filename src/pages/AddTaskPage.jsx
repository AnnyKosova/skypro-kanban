import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import { useAuth } from '../contexts/AuthContext'
import { useTasks } from '../contexts/TaskContext'

function AddTaskPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { createTask } = useTasks()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleClose = () => {
    setIsModalOpen(false)
    navigate('/')
  }

  const handleTaskCreate = async (taskData) => {
    console.log('Создание новой задачи:', taskData)
    try {
      const result = await createTask(taskData)
      if (result.success) {
        console.log('Задача успешно создана')
        navigate('/')
      } else {
        console.error('Ошибка создания задачи:', result.error)
      }
    } catch (error) {
      console.error('Ошибка создания задачи:', error)
    }
  }

  return (
    <div style={{ 
      maxWidth: '100%', 
      width: '100vw', 
      minHeight: '100vh', 
      
    }}>
      <Header user={user} />
      <Main />
      <PopNewCard 
        isOpen={isModalOpen} 
        onClose={handleClose}
        onCreateTask={handleTaskCreate}
      />
    </div>
  )
}

export default AddTaskPage 