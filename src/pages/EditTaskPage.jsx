import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import { useTasks } from '../contexts/TaskContext'

function EditTaskPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateTask, deleteTask } = useTasks()

  const [title, setTitle] = useState('Текущее название задачи')
  const [description, setDescription] = useState('Текущее описание задачи')
  const [status, setStatus] = useState('in-progress')
  const [date, setDate] = useState('2024-01-15')

  const handleCancel = () => {
    navigate('/')
  }

  const handleDelete = async () => {
    const confirmed = window.confirm('Удалить эту задачу?')
    if (!confirmed) return
    try {
      const result = await deleteTask(id)
      if (result.success) {
        navigate('/')
      } else {
        alert('Ошибка удаления задачи')
      }
    } catch (e) {
      alert('Ошибка удаления задачи')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      title,
      description,
      status,
      date
    }
    try {
      const result = await updateTask(id, payload)
      if (result.success) {
        navigate('/')
      } else {
        alert('Ошибка сохранения изменений')
      }
    } catch (e) {
      alert('Ошибка сохранения изменений')
    }
  }

  return (
    <div style={{ 
      maxWidth: '100%', 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#F1F1F1'
    }}>
      <Header />
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        minHeight: 'calc(100vh - 80px)',
        padding: '40px 20px'
      }}>
        <div style={{ 
          maxWidth: '600px', 
          width: '100%', 
          backgroundColor: 'white', 
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1>Редактировать задачу #{id}</h1>
            <button 
              onClick={() => navigate('/')}
              style={{ 
                padding: '8px 16px', 
                backgroundColor: '#6c757d', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ← На главную
            </button>
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            <input 
              type="text" 
              placeholder="Название задачи" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            />
            <textarea 
              placeholder="Описание задачи" 
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', resize: 'vertical' }}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}>
              <option value="backlog">Backlog</option>
              <option value="ready">Ready</option>
              <option value="in-progress">In Progress</option>
              <option value="finished">Finished</option>
            </select>
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            />
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <button 
                type="submit"
                style={{ 
                  flex: 1,
                  padding: '15px', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Сохранить изменения
              </button>
              <button 
                type="button"
                onClick={handleCancel}
                style={{ 
                  flex: 1,
                  padding: '15px', 
                  backgroundColor: '#6c757d', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Отмена
              </button>
            </div>
            <button 
              type="button"
              onClick={handleDelete}
              style={{ 
                padding: '12px 24px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                alignSelf: 'flex-start'
              }}
            >
              Удалить задачу
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditTaskPage 