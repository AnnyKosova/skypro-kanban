import React, { useEffect, useState } from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import {
    ButtonContainer,
    CalendarContainer,
    CalendarDate,
    CalendarDay,
    CalendarDaysGroup,
    CalendarGrid,
    CalendarHeader,
    CalendarMonth,
    CalendarNavigation,
    CalendarSection,
    CategoryButton,
    CategoryButtons,
    CategorySection,
    CategoryTitle,
    CreateTaskButton,
    DeadlineText,
    FormGroup,
    FormInput,
    FormLabel,
    FormTextarea,
    PopNewTaskClose,
    PopNewTaskContainer,
    PopNewTaskContent,
    PopNewTaskForm,
    PopNewTaskHeader,
    PopNewTaskTitle
} from './PopNewTask.styled'

function PopNewTask({ isOpen, onClose, onTaskCreate }) {
  console.log('PopNewTask render:', { isOpen, onClose, onTaskCreate })
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    deadline: null
  })
  
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('')
  
  const categories = ['Web Design', 'Research', 'Copywriting']
  
  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  
  useEffect(() => {
    if (isOpen) {
      setFormData({
        title: '',
        description: '',
        category: '',
        deadline: null
      })
      setSelectedDate(null)
      setSelectedCategory('')
    }
  }, [isOpen])
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setFormData(prev => ({
      ...prev,
      category: category
    }))
  }
  
  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setFormData(prev => ({
      ...prev,
      deadline: date
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim()) {
      alert('Пожалуйста, введите название задачи')
      return
    }
    
    if (!formData.category) {
      alert('Пожалуйста, выберите категорию')
      return
    }
    
    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      deadline: formData.deadline,
      status: 'БЕЗ СТАТУСА',
      date: new Date().toLocaleDateString('ru-RU')
    }
    
    onTaskCreate(newTask)
    onClose()
  }
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    const firstDayOfWeek = firstDay.getDay()
    const startOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
    
    const days = []
    
    for (let i = 0; i < startOffset; i++) {
      const prevMonthDay = new Date(year, month, -startOffset + i + 1)
      days.push({ date: prevMonthDay, isCurrentMonth: false })
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDay = new Date(year, month, i)
      days.push({ date: currentDay, isCurrentMonth: true })
    }
    
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonthDay = new Date(year, month + 1, i)
      days.push({ date: nextMonthDay, isCurrentMonth: false })
    }
    
    return days
  }
  
  const formatDate = (date) => {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    })
  }
  
  const isToday = (date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }
  
  const isSelected = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString()
  }
  
  const changeMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
  }
  
  if (!isOpen) return null
  
  console.log('Rendering PopNewTask modal')
  
  const monthName = currentDate.toLocaleDateString('ru-RU', { 
    month: 'long', 
    year: 'numeric' 
  }).replace(/^./, str => str.toUpperCase())
  const days = getDaysInMonth(currentDate)
  
  return (
    <PopNewTaskContainer onClick={onClose}>
      <PopNewTaskContent onClick={(e) => e.stopPropagation()}>
        <PopNewTaskHeader>
          <PopNewTaskTitle>Создание задачи</PopNewTaskTitle>
          <PopNewTaskClose onClick={onClose}>&times;</PopNewTaskClose>
        </PopNewTaskHeader>
        
        <PopNewTaskForm onSubmit={handleSubmit}>
          <CalendarSection>
            <div style={{ flex: 1 }}>
              <FormGroup>
                <FormLabel>Название задачи</FormLabel>
                <FormInput
                  type="text"
                  name="title"
                  placeholder="Введите название задачи..."
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Описание задачи</FormLabel>
                <FormTextarea
                  name="description"
                  placeholder="Введите описание задачи..."
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </div>
            
            <CalendarContainer>
              <FormLabel>Даты</FormLabel>
              <CalendarHeader>
                <CalendarMonth>
                  {monthName}
                </CalendarMonth>
                <CalendarNavigation>
                  <ArrowLeft onClick={() => changeMonth(-1)} />
                  <ArrowRight onClick={() => changeMonth(1)} />
                </CalendarNavigation>
              </CalendarHeader>
              
              <CalendarDaysGroup>
                <CalendarGrid>
                  {daysOfWeek.map(day => (
                    <CalendarDay key={day}>{day}</CalendarDay>
                  ))}
                  {days.map((dayData, index) => (
                    <CalendarDate
                      key={index}
                      className={`
                        ${!dayData.isCurrentMonth ? 'other-month' : ''}
                        ${isToday(dayData.date) ? 'today' : ''}
                        ${isSelected(dayData.date) ? 'selected' : ''}
                      `}
                      onClick={() => handleDateSelect(dayData.date)}
                      disabled={!dayData.isCurrentMonth}
                    >
                      {dayData.date.getDate()}
                    </CalendarDate>
                  ))}
                </CalendarGrid>
              </CalendarDaysGroup>
              
              <DeadlineText hasSelectedDate={!!selectedDate}>
                {selectedDate 
                  ? (
                    <>
                      <span style={{ color: 'rgba(148, 166, 190, 1)' }}>Срок исполнения: </span>
                      <span style={{ color: 'rgba(0, 0, 0, 1)' }}>{formatDate(selectedDate)}</span>
                    </>
                  )
                  : 'Выберите срок исполнения.'
                }
              </DeadlineText>
            </CalendarContainer>
          </CalendarSection>
          
          <CategorySection>
            <CategoryTitle>Категория</CategoryTitle>
            <CategoryButtons>
              <CategoryButton
                className={selectedCategory === 'Web Design' ? 'selected' : ''}
                onClick={() => handleCategorySelect('Web Design')}
              >
                Web Design
              </CategoryButton>
              <CategoryButton
                className={selectedCategory === 'Research' ? 'selected' : ''}
                onClick={() => handleCategorySelect('Research')}
              >
                Research
              </CategoryButton>
              <CategoryButton
                className={selectedCategory === 'Copywriting' ? 'selected' : ''}
                onClick={() => handleCategorySelect('Copywriting')}
              >
                Copywriting
              </CategoryButton>
            </CategoryButtons>
          </CategorySection>
          
          <ButtonContainer>
            <CreateTaskButton onClick={handleSubmit}>
              Создать задачу
            </CreateTaskButton>
          </ButtonContainer>
        </PopNewTaskForm>
      </PopNewTaskContent>
    </PopNewTaskContainer>
  )
}

export default PopNewTask 