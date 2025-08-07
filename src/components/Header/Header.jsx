import React, { useEffect, useState } from 'react'
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

function Header({ onExitClick }) {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false)

  const handleUserClick = (e) => {
    e.preventDefault()
    setIsUserPopupOpen(!isUserPopupOpen)
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
    <HeaderContainer>
      <Container>
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>
            <HeaderUser href="#user-set-target" className="_hover02" onClick={handleUserClick}>Ivan Ivanov</HeaderUser>
            <PopUser isOpen={isUserPopupOpen} onExitClick={onExitClick} />
          </HeaderNav>					
        </HeaderBlock>
      </Container>			
    </HeaderContainer>
  )
}

export default Header 