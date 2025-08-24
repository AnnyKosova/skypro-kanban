import React from 'react'
import { Container } from '../../App.styled'
import useTasks from '../../contexts/TaskContext'
import Card from '../Card/Card'
import Column from '../Column/Column'
import {
    LoadingContainer,
    MainBlock,
    MainContainer,
    MainContent
} from './Main.styled'

function Main({ onCardClick }) {
  const { tasks, isLoading, error } = useTasks()

  const getTasksByStatus = (status) => {
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
              {getTasksByStatus('Без статуса').map(task => (
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
              ))}
            </Column>
            
            <Column title="Нужно сделать">
              {getTasksByStatus('Нужно сделать').map(task => (
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
              ))}
            </Column>
            
            <Column title="В работе">
              {getTasksByStatus('В работе').map(task => (
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
              ))}
            </Column>
            
            <Column title="Тестирование">
              {getTasksByStatus('Тестирование').map(task => (
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
              ))}
            </Column>
            
            <Column title="Готово">
              {getTasksByStatus('Готово').map(task => (
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
              ))}
            </Column>
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  )
}

export default Main 