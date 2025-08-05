import React, { useEffect, useState } from 'react'
import PopUser from '../popups/PopUser/PopUser'

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false)

  const handleUserClick = (e) => {
    e.preventDefault()
    setIsUserPopupOpen(!isUserPopupOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.getElementById('user-set-target')
      const userLink = event.target.closest('.header__user')
      
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
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a href="#user-set-target" className="header__user _hover02" onClick={handleUserClick}>Ivan Ivanov</a>
            <PopUser isOpen={isUserPopupOpen} />
          </nav>					
        </div>
      </div>			
    </header>
  )
}

export default Header 