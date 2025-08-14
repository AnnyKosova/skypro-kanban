import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
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
    email: '',
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
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      if (!formData.email || !formData.password) {
        throw new Error('Пожалуйста, заполните все поля')
      }

      if (formData.email === 'ivan.ivanov@gmail.com' && formData.password === 'password') {
        const userData = {
          id: 1,
          name: 'Ivan Ivanov',
          email: formData.email
        }
        
        login(userData)
        navigate(from, { replace: true })
      } else {
        throw new Error('Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.')
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
          type="email" 
          name="email"
          placeholder="Эл. почта" 
          value={formData.email}
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
          disabled={isLoading || !!error}
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