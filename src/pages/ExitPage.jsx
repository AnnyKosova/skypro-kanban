import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
    CancelButton,
    ExitButton,
    ExitButtons,
    ExitContainer,
    ExitText,
    ExitTitle
} from './ExitPage.styled'

function ExitPage() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <ExitContainer>
      <ExitTitle>Выйти из аккаунта?</ExitTitle>
      <ExitText>Вы действительно хотите выйти из аккаунта?</ExitText>
      <ExitButtons>
        <ExitButton onClick={handleLogout}>
          Да, выйти
        </ExitButton>
        <CancelButton onClick={handleCancel}>
          Отмена
        </CancelButton>
      </ExitButtons>
    </ExitContainer>
  )
}

export default ExitPage 