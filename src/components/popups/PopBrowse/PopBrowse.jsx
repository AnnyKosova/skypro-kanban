import React, { useEffect, useState } from 'react';
import Calendar from '../../Calendar/Calendar';

function PopBrowse({ isOpen, onClose, task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editData, setEditData] = useState({});


  useEffect(() => {
    if (task) {
      setSelectedStatus(task.status || 'Без статуса')
      setSelectedDate(task.date ? new Date(task.date) : new Date())
      setEditData({
        title: task.title || '',
        description: task.description || '',
        topic: task.topic || 'Web Design',
        status: task.status || 'Без статуса',
        date: task.date ? new Date(task.date) : new Date()
      })
      setIsEditing(false)
    }
  }, [task])

  if (!isOpen || !task) {
    return null
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(task._id);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    setEditData(prev => ({ ...prev, status }));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setEditData(prev => ({ ...prev, date: date.toISOString() }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (onEdit) {
      onEdit(editData);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (task) {
      setSelectedStatus(task.status || 'Без статуса')
      setSelectedDate(task.date ? new Date(task.date) : new Date())
      setEditData({
        title: task.title || '',
        description: task.description || '',
        topic: task.topic || 'Web Design',
        status: task.status || 'Без статуса',
        date: task.date ? new Date(task.date) : new Date()
      })
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'Без статуса':
        return 'Без статуса';
      case 'Нужно сделать':
        return 'Нужно сделать';
      case 'В работе':
        return 'В работе';
      case 'Тестирование':
        return 'Тестирование';
      case 'Готово':
        return 'Готово';
      default:
        return 'Без статуса';
    }
  };

  const getThemeClass = (theme) => {
    if (!theme) return 'default'
    const themeLower = theme.toLowerCase()
    if (['web design', 'webdesign'].includes(themeLower)) return 'orange'
    if (['research'].includes(themeLower)) return 'green'
    if (['copywriting'].includes(themeLower)) return 'purple'
    return 'default'
  };

  const themeClass = getThemeClass(task.topic);

  return (
    <>
      <style>
        {`
          .form-browse__area {
            color: rgba(148, 166, 190, 1) !important;
            font-family: Roboto !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 100% !important;
            letter-spacing: 0% !important;
            text-align: left !important;
          }
          
          .status__theme._active {
            background-color: rgba(148, 166, 190, 1) !important;
            color: rgba(255, 255, 255, 1) !important;
            border-color: rgba(148, 166, 190, 1) !important;
          }
          
          .status__theme._active p {
            color: rgba(255, 255, 255, 1) !important;
          }
        `}
      </style>
      <div className={`pop-browse _show`} id="popBrowse" style={{ display: 'block' }}>
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                {isEditing ? (
                  <h3 className="pop-browse__ttl" style={{
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    textAlign: 'left',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent'
                  }}>
                    {editData.title}
                  </h3>
                ) : (
                  <h3 className="pop-browse__ttl">
                    {task.title}
                  </h3>
                )}
                <div className={`categories__theme theme-top _${themeClass} _active-category`}>
                  <p>{task.topic}</p>
                </div>
              </div>
              
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                {!isEditing ? (
                  <div className="status__themes">
                    <div 
                      className={`status__theme status__theme--${selectedStatus} _active`}
                      style={selectedStatus === 'Без статуса' ? {
                        backgroundColor: 'rgba(148, 166, 190, 1)',
                        color: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(148, 166, 190, 1)'
                      } : {}}
                    >
                      <p style={selectedStatus === 'Без статуса' ? { color: 'rgba(255, 255, 255, 1)' } : {}}>
                        {getStatusText(selectedStatus)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="status__themes">
                    <div className={`status__theme status__theme--no-status ${selectedStatus === 'Без статуса' ? '_active' : ''}`} onClick={() => handleStatusClick('Без статуса')}>
                      <p>Без статуса</p>
                    </div>
                    <div className={`status__theme status__theme--todo ${selectedStatus === 'Нужно сделать' ? '_active' : ''}`} onClick={() => handleStatusClick('Нужно сделать')}>
                      <p>Нужно сделать</p>
                    </div>
                    <div className={`status__theme status__theme--in-progress ${selectedStatus === 'В работе' ? '_active' : ''}`} onClick={() => handleStatusClick('В работе')}>
                      <p>В работе</p>
                    </div>
                    <div className={`status__theme status__theme--testing ${selectedStatus === 'Тестирование' ? '_active' : ''}`} onClick={() => handleStatusClick('Тестирование')}>
                      <p>Тестирование</p>
                    </div>
                    <div className={`status__theme status__theme--done ${selectedStatus === 'Готово' ? '_active' : ''}`} onClick={() => handleStatusClick('Готово')}>
                      <p>Готово</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="pop-browse__wrap">
                <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                    <textarea 
                      className="form-browse__area" 
                      name="description" 
                      id="textArea01" 
                      readOnly={!isEditing}
                      placeholder="Описание задачи"
                      value={isEditing ? editData.description : (task.description || '')}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </form>
                <div className="pop-new-card__calendar">
                  <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
                </div>
              </div>
              
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className={`categories__theme _${themeClass} _active-category`}>
                  <p>{task.topic}</p>
                </div>
              </div>
              
              {!isEditing ? (
                <div className="pop-browse__btn-browse">
                  <div className="btn-group">
                    <button className="btn-browse__edit _btn-bor _hover03" onClick={handleEditClick}>
                      <span>Редактировать задачу</span>
                    </button>
                    <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDeleteClick}>
                      <span>Удалить задачу</span>
                    </button>
                  </div>
                  <button className="btn-browse__close _btn-bor _hover03" onClick={handleClose}>
                    <span>Закрыть</span>
                  </button>
                </div>
              ) : (
                <div className="pop-browse__btn-edit">
                  <div className="btn-group">
                    <button className="btn-edit__edit _btn-bor _hover03" onClick={handleSave}>
                      <span>Сохранить</span>
                    </button>
                    <button className="btn-edit__edit _btn-bor _hover03" onClick={handleCancel}>
                      <span>Отменить</span>
                    </button>
                    <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete" onClick={handleDeleteClick}>
                      <span>Удалить задачу</span>
                    </button>
                  </div>
                  <button className="btn-edit__close _btn-bor _hover03" onClick={handleClose}>
                    <span>Закрыть</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopBrowse 