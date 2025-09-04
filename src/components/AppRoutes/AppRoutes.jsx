import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTaskPage from '../../pages/AddTaskPage'
import ExitPage from '../../pages/ExitPage'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import NotFoundPage from '../../pages/NotFoundPage'
import RegisterPage from '../../pages/RegisterPage'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/add-task" element={
        <ProtectedRoute>
          <AddTaskPage />
        </ProtectedRoute>
      } />
      <Route path="/card/:id" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/exit" element={
        <ProtectedRoute>
          <ExitPage />
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes 