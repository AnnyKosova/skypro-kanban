import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'

function AddTaskPage() {
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
            <h1>Добавить новую задачу</h1>
            <Link to="/" style={{ color: '#666', textDecoration: 'none' }}>
              ← На главную
            </Link>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            <input 
              type="text" 
              placeholder="Название задачи" 
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            />
            <textarea 
              placeholder="Описание задачи" 
              rows="4"
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', resize: 'vertical' }}
            />
            <select style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}>
              <option value="">Выберите статус</option>
              <option value="backlog">Backlog</option>
              <option value="ready">Ready</option>
              <option value="in-progress">In Progress</option>
              <option value="finished">Finished</option>
            </select>
            <input 
              type="date" 
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            />
            <button 
              type="submit"
              style={{ 
                padding: '15px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Добавить задачу
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTaskPage 