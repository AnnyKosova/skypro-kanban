import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { userService } from '../services/userService'

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [onAuthChange, setOnAuthChange] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        if (userData.token) {
          setUser(userData)
          setIsAuth(true)
        } else {
          localStorage.removeItem('user')
        }
      } catch (error) {
        console.error('Error parsing saved user data:', error)
        localStorage.removeItem('user')
      }
    }
    setIsLoading(false)
  }, [])

  const setAuthCallback = useCallback((callback) => {
    setOnAuthChange(callback)
  }, [])

  const login = async (credentials) => {
    try {
      const response = await userService.login(credentials)
      const userData = response.user
      setUser(userData)
      setIsAuth(true)
      localStorage.setItem('user', JSON.stringify(userData))
      
      if (onAuthChange && typeof onAuthChange === 'function') {
        onAuthChange()
      }
      
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const register = async (userData) => {
    try {
      const response = await userService.register(userData)
      const newUser = response.user
      setUser(newUser)
      setIsAuth(true)
      localStorage.setItem('user', JSON.stringify(newUser))
      
      if (onAuthChange && typeof onAuthChange === 'function') {
        onAuthChange()
      }
      
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuth(false)
    localStorage.removeItem('user')
    
    if (onAuthChange && typeof onAuthChange === 'function') {
      onAuthChange()
    }
  }

  const value = {
    user,
    isAuth,
    isLoading,
    login,
    register,
    logout,
    setAuthCallback
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default useAuth
