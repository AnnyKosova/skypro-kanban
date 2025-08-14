import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header/Header'

function ViewTaskPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/edit-task/${id}`)
  }

  const handleBack = () => {
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
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        minHeight: 'calc(100vh - 80px)',
        padding: '40px 20px'
      }}>
        <div style={{ 
          maxWidth: '700px', 
          width: '100%', 
          backgroundColor: 'white', 
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h1>Задача #{id}</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ 
                padding: '8px 16px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                borderRadius: '20px',
                fontSize: '14px'
              }}>
                In Progress
              </span>
              <button 
                onClick={handleBack}
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
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <h3>Название</h3>
            <p style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>
              Разработка нового функционала для пользовательского интерфейса
            </p>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <h3>Описание</h3>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', margin: '10px 0' }}>
              Необходимо создать современный и удобный интерфейс для управления задачами. 
              Интерфейс должен включать в себя drag-and-drop функциональность, 
              возможность фильтрации и поиска задач, а также адаптивный дизайн для мобильных устройств.
            </p>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <h3>Дата создания</h3>
            <p style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>
              15 января 2024
            </p>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <h3>Срок выполнения</h3>
            <p style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>
              30 января 2024
            </p>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <h3>Приоритет</h3>
            <p style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>
              Высокий
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <button 
              onClick={handleEdit}
              style={{ 
                padding: '12px 24px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Редактировать
            </button>
            <button 
              style={{ 
                padding: '12px 24px', 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Удалить
            </button>
            <button 
              onClick={handleBack}
              style={{ 
                padding: '12px 24px', 
                backgroundColor: '#6c757d', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewTaskPage 