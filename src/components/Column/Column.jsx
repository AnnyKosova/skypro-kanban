import React, { useState } from 'react'
import {
    CardsContainer,
    ColumnContainer,
    ColumnTitle
} from "./Column.styled"

function Column({ title, children, onDrop, status }) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragOver(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const data = JSON.parse(e.dataTransfer.getData("text/plain"))
    if (onDrop && data.id) {
      onDrop(data.id, status)
    }
  }

  return (
    <ColumnContainer>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer 
        className={isDragOver ? 'drag-over' : ''}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {children}
      </CardsContainer>
    </ColumnContainer>
  )
}

export default Column
