import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../contexts/AuthContext'

function ProtectedRoute({ children }) {
  const { isAuth, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Загрузка...
      </div>
    )
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute 