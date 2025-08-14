import React from 'react'
import { Link } from 'react-router-dom'
import {
    NotFoundButtons,
    NotFoundContainer,
    NotFoundDescription,
    NotFoundNumber,
    NotFoundTitle
} from './NotFoundPage.styled'

function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFoundNumber>404</NotFoundNumber>
      <NotFoundTitle>Страница не найдена</NotFoundTitle>
      <NotFoundDescription>
        К сожалению, запрашиваемая страница не существует. 
        Возможно, она была удалена или перемещена.
      </NotFoundDescription>
      <NotFoundButtons>
        <Link 
          to="/login"
          style={{ 
            padding: '15px 30px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Войти в систему
        </Link>
        <Link 
          to="/"
          style={{ 
            padding: '15px 30px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Вернуться на главную
        </Link>
      </NotFoundButtons>
    </NotFoundContainer>
  )
}

export default NotFoundPage 