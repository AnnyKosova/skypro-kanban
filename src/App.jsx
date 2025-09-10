import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { AuthProvider } from './contexts/AuthContext'
import { TaskProvider } from './contexts/TaskContext'
import { ThemeProvider } from './contexts/ThemeContext'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <ThemeProvider>
          <BrowserRouter>
            <GlobalStyles />
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
