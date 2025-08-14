import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTaskPage from '../../pages/AddTaskPage'
import EditTaskPage from '../../pages/EditTaskPage'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import NotFoundPage from '../../pages/NotFoundPage'
import RegisterPage from '../../pages/RegisterPage'
import ViewTaskPage from '../../pages/ViewTaskPage'
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
      <Route path="/edit-task/:id" element={
        <ProtectedRoute>
          <EditTaskPage />
        </ProtectedRoute>
      } />
      <Route path="/card/:id" element={
        <ProtectedRoute>
          <ViewTaskPage />
        </ProtectedRoute>
      } />
      <Route path="/exit" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes 