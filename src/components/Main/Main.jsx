import React, { useEffect } from 'react'
import { Container } from '../../App.styled'
import { useTasks } from '../../contexts/TaskContext'
import Card from '../Card/Card'
import Column from '../Column/Column'
import {
    LoadingContainer,
    MainBlock,
    MainContainer,
    MainContent
} from './Main.styled'

function Main({ onCardClick }) {
  const { tasks, isLoading, error, fetchTasks } = useTasks()

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const getTasksByStatus = (status) => {
    if (!Array.isArray(tasks)) return []
    return tasks.filter(task => task.status === status)
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU')
  }

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

  if (error) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <LoadingContainer>
              Ошибка загрузки данных: {error}
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
              {(() => {
                const tasks = getTasksByStatus('Без статуса')
                return tasks.map(task => (
                  <Card 
                    key={task._id}
                    theme={task.topic} 
                    title={task.title} 
                    category={task.topic}
                    date={formatDate(task.date)} 
                    taskId={task._id}
                    task={task}
                    onCardClick={onCardClick}
                  />
                ))
              })()}
            </Column>
            
            <Column title="Нужно сделать">
              {(() => {
                const tasks = getTasksByStatus('Нужно сделать')
                return tasks.map(task => (
                  <Card 
                    key={task._id}
                    theme={task.topic} 
                    title={task.title} 
                    category={task.topic}
                    date={formatDate(task.date)} 
                    taskId={task._id}
                    task={task}
                    onCardClick={onCardClick}
                  />
                ))
              })()}
            </Column>
            
            <Column title="В работе">
              {(() => {
                const tasks = getTasksByStatus('В работе')
                return tasks.map(task => (
                  <Card 
                    key={task._id}
                    theme={task.topic} 
                    title={task.title} 
                    category={task.topic}
                    date={formatDate(task.date)} 
                    taskId={task._id}
                    task={task}
                    onCardClick={onCardClick}
                  />
                ))
              })()}
            </Column>
            
            <Column title="Тестирование">
              {(() => {
                const tasks = getTasksByStatus('Тестирование')
                return tasks.map(task => (
                  <Card 
                    key={task._id}
                    theme={task.topic} 
                    title={task.title} 
                    category={task.topic}
                    date={formatDate(task.date)} 
                    taskId={task._id}
                    task={task}
                    onCardClick={onCardClick}
                  />
                ))
              })()}
            </Column>
            
            <Column title="Готово">
              {(() => {
                const tasks = getTasksByStatus('Готово')
                return tasks.map(task => (
                  <Card 
                    key={task._id}
                    theme={task.topic} 
                    title={task.title} 
                    category={task.topic}
                    date={formatDate(task.date)} 
                    taskId={task._id}
                    task={task}
                    onCardClick={onCardClick}
                    isCompleted={true}
                  />
                ))
              })()}
            </Column>
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  )
}

export default Main 