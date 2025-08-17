import React, { useEffect, useState } from 'react'
import { Container } from '../../App.styled'
import Card from '../Card/Card'
import Column from '../Column/Column'
import {
    LoadingContainer,
    MainBlock,
    MainContainer,
    MainContent
} from './Main.styled'

function Main() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <LoadingContainer>
              Данные загружаются
            </LoadingContainer>
          </MainBlock>
        </Container>
      </MainContainer>
    )
  }

  return (
    <MainContainer>
      <Container>
        <MainBlock>
          <MainContent>
            <Column title="Без статуса">
              <Card theme="orange" title="Web Design" date="30.10.23" taskId="1" />
              <Card theme="green" title="Research" date="30.10.23" taskId="2" />
              <Card theme="orange" title="Web Design" date="30.10.23" taskId="3" />
              <Card theme="purple" title="Copywriting" date="30.10.23" taskId="4" />
              <Card theme="orange" title="Web Design" date="30.10.23" taskId="5" />
            </Column>
            
            <Column title="Нужно сделать">
              <Card theme="green" title="Research" date="30.10.23" taskId="6" />
            </Column>
            
            <Column title="В работе">
              <Card theme="green" title="Research" date="30.10.23" taskId="7" />
              <Card theme="purple" title="Copywriting" date="30.10.23" taskId="8" />
              <Card theme="orange" title="Web Design" date="30.10.23" taskId="9" />
            </Column>
            
            <Column title="Тестирование">
              <Card theme="green" title="Research" date="30.10.23" taskId="10" />
            </Column>
            
            <Column title="Готово">
              <Card theme="green" title="Research" date="30.10.23" taskId="11" />
            </Column>
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  )
}

export default Main 