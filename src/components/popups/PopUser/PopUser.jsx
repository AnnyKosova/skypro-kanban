import React, { useState } from 'react'

function PopUser({ isOpen }) {
  const [isExitOpen, setIsExitOpen] = useState(false)
  
  const popupStyle = {
    display: isOpen ? 'block' : 'none'
  }

  const exitPopupStyle = {
    display: isExitOpen ? 'block' : 'none'
  }

  const handleExitClick = (e) => {
    e.preventDefault()
    setIsExitOpen(true)
  }

  const handleExitYes = (e) => {
    e.preventDefault()
    // Здесь можно добавить логику выхода из аккаунта
    console.log('Выход из аккаунта')
    setIsExitOpen(false)
  }

  const handleExitNo = (e) => {
    e.preventDefault()
    setIsExitOpen(false)
  }

  return (
    <>
      <div className="header__pop-user-set pop-user-set" id="user-set-target" style={popupStyle}>
        {/* <a href="">x</a> */}
        <p className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox" />
        </div>
        <button type="button" className="_hover03" onClick={handleExitClick}>
          <a href="#popExit">Выйти</a>
        </button>
      </div>
      
      <div className="pop-exit" id="popExit" style={exitPopupStyle}>
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes" onClick={handleExitYes}>
                  <a href="modal/signin.html">Да, выйти</a>
                </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo" onClick={handleExitNo}>
                  <a href="main.html">Нет, остаться</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUser 