import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import PopBrowse from '../components/popups/PopBrowse/PopBrowse'
import { useAuth } from '../contexts/AuthContext'
import { useTasks } from '../contexts/TaskContext'

function HomePage() {
  const { user, logout } = useAuth()
  const { updateTask, deleteTask, tasks } = useTasks()
  const [isPopBrowseOpen, setIsPopBrowseOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  
  const navigate = useNavigate()
  const location = useLocation()

  // Синхронизация URL с модалом задачи
  useEffect(() => {
    const pathParts = location.pathname.split('/')
    if (pathParts[1] === 'card' && pathParts[2]) {
      const taskId = pathParts[2]
      const task = tasks.find(t => t._id === taskId)
      if (task) {
        setSelectedTask(task)
        setIsPopBrowseOpen(true)
      } else {
        // Если задача не найдена, возвращаемся на главную
        navigate('/')
      }
    } else {
      // Если URL не содержит /card/:id, закрываем модал
      setIsPopBrowseOpen(false)
      setSelectedTask(null)
    }
  }, [location.pathname, tasks, navigate])

  const handleCardClick = (task) => {
    console.log('HomePage: handleCardClick called with:', task)
    setSelectedTask(task)
    setIsPopBrowseOpen(true)
    // Меняем URL при открытии модала
    navigate(`/card/${task._id}`)
  }

  const handleClosePopBrowse = () => {
    setIsPopBrowseOpen(false)
    setSelectedTask(null)
    // Возвращаемся на главную при закрытии модала
    navigate('/')
  }

  const handleEditTask = async (taskData) => {
    console.log('Редактирование задачи:', taskData)
    try {
      const result = await updateTask(selectedTask._id, taskData)
      if (result.success) {
        console.log('Задача успешно обновлена')
        // Не закрываем модал автоматически, пользователь сам решит
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
      <PopBrowse 
        isOpen={isPopBrowseOpen}
        onClose={handleClosePopBrowse}
        task={selectedTask}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
      
      <Header user={user} onExitClick={handleExitClick} />
      <Main onCardClick={handleCardClick} />
    </div>
  )
}

export default HomePage 