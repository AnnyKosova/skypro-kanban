import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
    ErrorMessage,
    RegisterButton,
    RegisterContainer,
    RegisterForm,
    RegisterInput,
    RegisterLinks,
    RegisterTitle
} from './RegisterPage.styled'

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        return value.trim() === '' ? 'Поле обязательно для заполнения' : ''
      case 'email':
        if (value.trim() === '') return 'Поле обязательно для заполнения'
        // More strict email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Некорректный email'
        return ''
      case 'password':
        if (value.trim() === '') return 'Поле обязательно для заполнения'
        if (value.length < 6) return 'Пароль должен содержать минимум 6 символов'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      // Simulate successful registration
      const userData = {
        id: 1,
        name: formData.username,
        email: formData.email
      }
      
      login(userData)
      navigate(from, { replace: true })
    } catch (err) {
      setErrors({ general: 'Произошла ошибка при регистрации' })
    } finally {
      setIsLoading(false)
    }
  }

  const hasGeneralError = Object.keys(errors).length > 0
  const getErrorMessage = () => {
    // Check if there are empty fields
    const hasEmptyFields = Object.values(formData).some(value => value.trim() === '')
    
    if (hasEmptyFields) {
      return 'Введенные вами данные не корректны.\nЧтобы завершить регистрацию, заполните все поля в форме.'
    } else {
      // All fields are filled but some have invalid data
      return 'Введенные вами данные не корректны.\nЧтобы завершить регистрацию, введите данные корректно и повторите попытку.'
    }
  }

  return (
    <RegisterContainer hasError={hasGeneralError}>
      <RegisterTitle>Регистрация</RegisterTitle>
      
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput 
          type="text" 
          name="username"
          placeholder="Имя" 
          value={formData.username}
          onChange={handleChange}
          hasError={!!errors.username}
        />
        <RegisterInput 
          type="email" 
          name="email"
          placeholder="Эл. почта" 
          value={formData.email}
          onChange={handleChange}
          hasError={!!errors.email}
        />
        <RegisterInput 
          type="password" 
          name="password"
          placeholder="Пароль" 
          value={formData.password}
          onChange={handleChange}
          hasError={!!errors.password}
        />
        {hasGeneralError && <ErrorMessage>{getErrorMessage()}</ErrorMessage>}
        <RegisterButton 
          type="submit"
          disabled={isLoading || hasGeneralError}
          hasError={hasGeneralError}
        >
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </RegisterButton>
      </RegisterForm>
      
      <RegisterLinks>
        <p>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
      </RegisterLinks>
    </RegisterContainer>
  )
}

export default RegisterPage 