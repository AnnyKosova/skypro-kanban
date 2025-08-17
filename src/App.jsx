import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { AuthProvider } from './contexts/AuthContext'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
