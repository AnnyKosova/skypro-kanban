import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../contexts/AuthContext'
import {
    PopUserSet,
    PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme
} from './PopUser.styled.js'

function PopUser({ isOpen, onExitClick, user }) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  
  const popupStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '61px',
    right: '0',
    width: '213px',
    height: '205px',
    borderRadius: '10px',
    border: '0.7px solid rgba(148, 166, 190, 0.4)',
    background: '#FFF',
    boxShadow: '0px 10px 39px 0px rgba(26, 56, 101, 0.21)',
    padding: '34px',
    textAlign: 'center',
    zIndex: 2
  }

  const handleExitClick = (e) => {
    e.preventDefault()
    logout()
    navigate('/login')
  }

  if (!user) return null

  return (
    <PopUserSet id="user-set-target" style={popupStyle}>
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetMail>{user.email}</PopUserSetMail>
      <PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserSetTheme>
      <PopUserSetButton type="button" className="_hover03" onClick={handleExitClick}>
        <a href="#" onClick={(e) => e.preventDefault()}>Выйти</a>
      </PopUserSetButton>
    </PopUserSet>
  )
}

export default PopUser 