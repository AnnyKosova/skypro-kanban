import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../contexts/AuthContext'
import {
    ErrorMessage,
    LoginButton,
    LoginContainer,
    LoginForm,
    LoginInput,
    LoginLinks,
    LoginTitle
} from './LoginPage.styled'

function LoginPage() {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  
  const from = location.state?.from?.pathname || '/'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) {
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      if (!formData.login || !formData.password) {
        throw new Error('Пожалуйста, заполните все поля')
      }

      const result = await login(formData)
      
      if (result.success) {
        navigate(from, { replace: true })
      } else {
        setError(result.error || 'Ошибка входа')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginContainer hasError={!!error}>
      <LoginTitle>Вход</LoginTitle>
      
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput 
          type="text" 
          name="login"
          placeholder="Логин" 
          value={formData.login}
          onChange={handleChange}
          hasError={!!error}
        />
        <LoginInput 
          type="password" 
          name="password"
          placeholder="Пароль" 
          value={formData.password}
          onChange={handleChange}
          hasError={!!error}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton 
          type="submit"
          disabled={isLoading}
          hasError={!!error}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </LoginButton>
      </LoginForm>
      
      <LoginLinks>
        <p>Нужно зарегистрироваться? <Link to="/register">Регистрируйтесь здесь</Link></p>
      </LoginLinks>
    </LoginContainer>
  )
}

export default LoginPage 