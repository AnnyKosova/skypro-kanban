import React from 'react'
import {
    CardsContainer,
    ColumnContainer,
    ColumnTitle
} from './Column.styled'

function Column({ title, children }) {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {children}
      </CardsContainer>
    </ColumnContainer>
  )
}

export default Column 