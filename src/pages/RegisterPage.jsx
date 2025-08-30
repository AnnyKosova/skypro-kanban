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
    login: '',
    name: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const validateField = (name, value) => {
    switch (name) {
      case 'login':
        if (value.trim() === '') return 'Поле обязательно для заполнения'
        if (value.length < 3) return 'Логин должен содержать минимум 3 символа'
        return ''
      case 'name':
        return value.trim() === '' ? 'Поле обязательно для заполнения' : ''
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
      const result = await register(formData)
      
      if (result.success) {
        navigate(from, { replace: true })
      } else {
        if (result.error.includes('уже существует')) {
          setErrors({ login: 'Пользователь с таким логином уже существует' })
        } else {
          setErrors({ general: result.error || 'Произошла ошибка при регистрации' })
        }
      }
    } catch (err) {
      setErrors({ general: 'Произошла ошибка при регистрации' })
    } finally {
      setIsLoading(false)
    }
  }

  const hasGeneralError = Object.keys(errors).length > 0
  const getErrorMessage = () => {
    if (errors.general) {
      return errors.general
    }
    
    const hasEmptyFields = Object.values(formData).some(value => value.trim() === '')
    
    if (hasEmptyFields) {
      return 'Введенные вами данные не корректны.\nЧтобы завершить регистрацию, заполните все поля в форме.'
    } else {
      return 'Введенные вами данные не корректны.\nЧтобы завершить регистрацию, введите данные корректно и повторите попытку.'
    }
  }

  return (
    <RegisterContainer hasError={hasGeneralError}>
      <RegisterTitle>Регистрация</RegisterTitle>
      
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput 
          type="text" 
          name="login"
          placeholder="Логин" 
          value={formData.login}
          onChange={handleChange}
          hasError={!!errors.login}
        />
        <RegisterInput 
          type="text" 
          name="name"
          placeholder="Имя" 
          value={formData.name}
          onChange={handleChange}
          hasError={!!errors.name}
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
          disabled={isLoading}
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