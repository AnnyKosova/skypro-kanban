import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { useTheme } from '../../../contexts/ThemeContext'
import {
    PopUserSet,
    PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme
} from './PopUser.styled.js'

function PopUser({ isOpen, user, onExitClick }) {
  const { logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleExitClick = (e) => {
    e.preventDefault()
    if (onExitClick) {
      onExitClick()
    } else {
      logout()
      navigate('/login')
    }
  }

  if (!user) return null

  return (
    <PopUserSet id="user-set-target" $isDark={isDark} style={{ display: isOpen ? 'block' : 'none' }}>
      <PopUserSetName $isDark={isDark}>{user.name}</PopUserSetName>
      <PopUserSetMail $isDark={isDark}>{user.email}</PopUserSetMail>
      <PopUserSetTheme $isDark={isDark}>
        <p>Темная тема</p>
        <input 
          type="checkbox" 
          className="checkbox" 
          name="checkbox" 
          checked={isDark}
          onChange={toggleTheme}
        />
      </PopUserSetTheme>
      <PopUserSetButton type="button" className="_hover03" onClick={handleExitClick} $isDark={isDark}>
        <a href="#" onClick={(e) => e.preventDefault()}>Выйти</a>
      </PopUserSetButton>
    </PopUserSet>
  )
}

export default PopUser
