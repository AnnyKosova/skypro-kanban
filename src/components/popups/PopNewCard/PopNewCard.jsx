import React, { useState } from 'react'
import Calendar from '../../Calendar/Calendar'

function PopNewCard({ onCreateTask }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    topic: 'Web Design',
    status: 'Без статуса',
    date: new Date().toISOString()
  })
  const [selectedTopic, setSelectedTopic] = useState('Web Design')
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setFormData(prev => ({
      ...prev,
      topic
    }))
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setFormData(prev => ({
      ...prev,
      date: date.toISOString()
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim()) {
      alert('Пожалуйста, введите название задачи')
      return
    }

    const taskData = {
      title: formData.title,
      description: formData.description,
      topic: selectedTopic,
      status: formData.status,
      date: selectedDate.toISOString()
    }

    if (onCreateTask) {
      onCreateTask(taskData)
    }

    setFormData({
      title: '',
      description: '',
      topic: 'Web Design',
      status: 'Без статуса',
      date: new Date().toISOString()
    })
    setSelectedTopic('Web Design')
    setSelectedDate(new Date())

    const form = document.getElementById('formNewCard')
    if (form) {
      form.reset()
    }
  }

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">&#10006;</a>
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" onSubmit={handleSubmit}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input 
                    className="form-new__input" 
                    type="text" 
                    name="title" 
                    id="formTitle" 
                    placeholder="Введите название задачи..." 
                    autoFocus 
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea 
                    className="form-new__area" 
                    name="description" 
                    id="textArea" 
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar">
                <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
              </div>
              <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div 
                    className={`categories__theme _orange ${selectedTopic === 'Web Design' ? '_active-category' : ''}`}
                    onClick={() => handleTopicSelect('Web Design')}
                  >
                    <p className="_orange">Web Design</p>
                  </div>
                  <div 
                    className={`categories__theme _green ${selectedTopic === 'Research' ? '_active-category' : ''}`}
                    onClick={() => handleTopicSelect('Research')}
                  >
                    <p className="_green">Research</p>
                  </div>
                  <div 
                    className={`categories__theme _purple ${selectedTopic === 'Copywriting' ? '_active-category' : ''}`}
                    onClick={() => handleTopicSelect('Copywriting')}
                  >
                    <p className="_purple">Copywriting</p>
                  </div>
                </div>
              </div>
              <button 
                className="form-new__create _hover01" 
                id="btnCreate"
                onClick={handleSubmit}
              >
                Создать задачу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopNewCard 