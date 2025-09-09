import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    CardButton,
    CardContainer,
    CardContent,
    CardDate,
    CardGroup,
    CardItem,
    CardTheme,
    CardTitle
} from './Card.styled'

function Card({ theme, title, category, date, taskId, onCardClick, isCompleted = false, task, onDragStart }) {
  const navigate = useNavigate()
  const [isDragging, setIsDragging] = useState(false)

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(task)
    } else {
      navigate(`/card/${taskId}`)
    }
  }

  const handleEditClick = (e) => {
    e.stopPropagation()
    if (onCardClick && task) {
      onCardClick(task)
    } else {
      navigate(`/card/${taskId}`)
    }
  }

  const handleDragStart = (e) => {
    setIsDragging(true)
    e.dataTransfer.setData('text/plain', JSON.stringify({
      id: taskId,
      task: task
    }))
    e.dataTransfer.effectAllowed = 'move'
    if (onDragStart) {
      onDragStart(task)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const getThemeClass = (theme) => {
    if (!theme) return 'default'
    const themeLower = theme.toLowerCase()
    if (['web design', 'webdesign'].includes(themeLower)) return 'orange'
    if (['research'].includes(themeLower)) return 'green'
    if (['copywriting'].includes(themeLower)) return 'purple'
    return 'default'
  }

  const themeClass = getThemeClass(theme)

  return (
    <CardItem 
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleCardClick}
      style={{ 
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
        transition: 'opacity 0.2s ease'
      }}
    >
      <CardContainer>
        <CardGroup>
          <CardTheme className={`_${themeClass}`}>
            <p>{theme || category}</p>
          </CardTheme>
          <CardButton onClick={handleEditClick}>
            <div></div>
            <div></div>
            <div></div>
          </CardButton>
        </CardGroup>
        <CardContent>
          <div>
            <CardTitle style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
              {title}
            </CardTitle>
          </div>
          <CardDate>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="2" width="11" height="10" rx="1" stroke="#94A6BE" strokeWidth="0.8"/>
              <line x1="1" y1="4" x2="12" y2="4" stroke="#94A6BE" strokeWidth="0.8"/>
              <line x1="3" y1="1" x2="3" y2="2" stroke="#94A6BE" strokeWidth="0.8"/>
              <line x1="10" y1="1" x2="10" y2="2" stroke="#94A6BE" strokeWidth="0.8"/>
            </svg>
            <p>{date}</p>
          </CardDate>
        </CardContent>
      </CardContainer>
    </CardItem>
  )
}

export default Card
