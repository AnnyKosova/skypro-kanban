import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import PopNewTask from '../components/popups/PopNewTask/PopNewTask'

function AddTaskPage() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleClose = () => {
    setIsModalOpen(false)
    navigate('/')
  }

  const handleTaskCreate = (newTask) => {
    console.log('Новая задача создана:', newTask)
    navigate('/')
  }

  return (
    <div style={{ 
      maxWidth: '100%', 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#F1F1F1'
    }}>
      <Header />
      <PopNewTask 
        isOpen={isModalOpen} 
        onClose={handleClose}
        onTaskCreate={handleTaskCreate}
      />
    </div>
  )
}

export default AddTaskPage 