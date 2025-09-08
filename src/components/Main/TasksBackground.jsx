import React from 'react'
import { Container } from '../../App.styled'
import Card from '../Card/Card'
import Column from '../Column/Column'
import { useTasks } from '../../hooks/useTasks'
import {
    MainBlock,
    MainContainer,
    MainContent
} from './Main.styled'

function TasksBackground({ onCardClick }) {
  const { tasks } = useTasks()

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

export default TasksBackground
