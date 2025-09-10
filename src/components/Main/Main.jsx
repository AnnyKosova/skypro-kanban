import React, { useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { Container } from '../../App.styled'
import { useTasks } from '../../hooks/useTasks'
import Loader from '../Loader/Loader'
import Card from '../Card/Card'
import Column from '../Column/Column'
import {
    LoadingContainer,
    MainBlock,
    MainContainer,
    MainContent
} from './Main.styled'

function Main({ onCardClick }) {
  const { tasks, isLoading, error, updateTaskStatus } = useTasks()
  const { isDark } = useTheme()

  const handleTaskDrop = async (taskId, newStatus) => {
    await updateTaskStatus(taskId, newStatus)
  }

  const normalize = (s) => (s || '').toString().trim().toLowerCase()

  const getTasksByStatus = (status) => {
    if (!Array.isArray(tasks)) return []
    const target = normalize(status)
    return tasks.filter(task => normalize(task.status) === target)
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU')
  }

  if (isLoading) {
    return (
      <MainContainer $isDark={isDark}>
        <Container>
          <MainBlock>
            <Loader />
          </MainBlock>
        </Container>
      </MainContainer>
    )
  }

  if (error) {
    return (
      <MainContainer $isDark={isDark}>
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
    <MainContainer $isDark={isDark}>
      <Container>
        <MainBlock>
          <MainContent>
          <Column title="Без статуса" onDrop={handleTaskDrop} status="Без статуса">
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
            
            <Column title="Нужно сделать" onDrop={handleTaskDrop} status="Нужно сделать">
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
            
            <Column title="В работе" onDrop={handleTaskDrop} status="В работе">
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
            
            <Column title="Тестирование" onDrop={handleTaskDrop} status="Тестирование">
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
            
            <Column title="Готово" onDrop={handleTaskDrop} status="Готово">
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
