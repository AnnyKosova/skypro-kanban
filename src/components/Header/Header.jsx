import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { Container } from '../../App.styled'
import PopUser from '../popups/PopUser/PopUser'
import {
    HeaderBlock,
    HeaderButton,
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderUser
} from './Header.styled'

function Header({ user, onExitClick }) {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false)
  const { isDark } = useTheme()
  const navigate = useNavigate()

  const handleUserClick = (e) => {
    e.preventDefault()
    setIsUserPopupOpen(!isUserPopupOpen)
  }

  const handleNewTaskClick = () => {
    navigate('/add-task')
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.getElementById('user-set-target')
      const userLink = event.target.closest('a[href="#user-set-target"]')
      
      if (isUserPopupOpen && popup && !popup.contains(event.target) && !userLink) {
        setIsUserPopupOpen(false)
      }
    }

    if (isUserPopupOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isUserPopupOpen])

  return (
    <HeaderContainer $isDark={isDark}>
      <Container>
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <Link to="/"><img src="images/logo_dark.png" alt="logo" /></Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" id="btnMainNew" onClick={handleNewTaskClick}>
              <a href="#" onClick={(e) => e.preventDefault()}>Создать новую задачу</a>
            </HeaderButton>
            <HeaderUser href="#user-set-target" className="_hover02" onClick={handleUserClick} $isDark={isDark}>
              {user ? user.name : 'Гость'}
            </HeaderUser>
            <PopUser isOpen={isUserPopupOpen} user={user} onExitClick={onExitClick} />
          </HeaderNav>
        </HeaderBlock>
      </Container>			
    </HeaderContainer>
  )
}

export default Header
