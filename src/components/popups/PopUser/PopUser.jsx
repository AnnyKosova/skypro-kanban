import React from 'react'
import {
    PopUserSet,
    PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme
} from './PopUser.styled'

function PopUser({ isOpen, onExitClick }) {
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
    onExitClick()
  }

  return (
    <PopUserSet id="user-set-target" style={popupStyle}>
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
      <PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserSetTheme>
      <PopUserSetButton type="button" className="_hover03" onClick={handleExitClick}>
        <a href="#popExit">Выйти</a>
      </PopUserSetButton>
    </PopUserSet>
  )
}

export default PopUser 