import React from 'react'
import {
    PopExit,
    PopExitBlock,
    PopExitButtonNo,
    PopExitButtonYes,
    PopExitContainer,
    PopExitForm,
    PopExitTitle
} from './PopExit.styled'

function PopExitComponent({ isOpen, onClose }) {
  const exitPopupStyle = {
    display: isOpen ? 'block' : 'none'
  }

  const handleExitYes = (e) => {
    e.preventDefault()
    console.log('Выход из аккаунта')
    onClose()
  }

  const handleExitNo = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <PopExit id="popExit" style={exitPopupStyle}>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitButtonYes className="_hover01" id="exitYes" onClick={handleExitYes}>
              <a href="modal/signin.html">Да, выйти</a>
            </PopExitButtonYes>
            <PopExitButtonNo className="_hover03" id="exitNo" onClick={handleExitNo}>
              <a href="main.html">Нет, остаться</a>
            </PopExitButtonNo>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  )
}

export default PopExitComponent 