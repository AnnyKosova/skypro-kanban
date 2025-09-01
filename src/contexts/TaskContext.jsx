import React, { createContext, useCallback, useContext, useState } from 'react'
import { kanbanService } from '../services/kanbanService'
import { useAuth } from './AuthContext'

const TaskContext = createContext()

const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { setAuthCallback } = useAuth()

  const fetchTasks = useCallback(async () => {
    console.log('TaskContext: fetchTasks called')
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    console.log('TaskContext: User from localStorage:', user)
    
    if (!user.token) {
      console.log('TaskContext: No token, setting empty tasks')
      setTasks([])
      setIsLoading(false)
      return
    }

    console.log('TaskContext: Fetching tasks with token')
    setIsLoading(true)
    setError(null)
    try {
      const response = await kanbanService.getTasks()
      console.log('TaskContext: Tasks response:', response)
      setTasks(response.tasks || [])
    } catch (err) {
      console.error('TaskContext: Error fetching tasks:', err)
      setError(err.message)
      setTasks([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createTask = async (taskData) => {
    try {
      const response = await kanbanService.createTask(taskData)
      if (response.tasks) {
        setTasks(response.tasks)
      } else if (response.task) {
        setTasks(prev => [response.task, ...prev])
      } else {
        // если сервер ничего не вернул, обновим общий список
        const fresh = await kanbanService.getTasks()
        setTasks(fresh.tasks || [])
      }
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updateTask = async (id, taskData) => {
    try {
      const response = await kanbanService.updateTask(id, taskData)
      if (response?.tasks) {
        setTasks(response.tasks)
      } else if (response?.task) {
        setTasks(prev => prev.map(t => (t._id === id ? response.task : t)))
      } else {
        setTasks(prev => prev.map(t => (t._id === id ? { ...t, ...taskData } : t)))
      }
      // гарантированно синхронизируемся с сервером
      try {
        const fresh = await kanbanService.getTasks()
        setTasks(fresh.tasks || [])
      } catch {}
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await kanbanService.deleteTask(id)
      if (response?.tasks) {
        setTasks(response.tasks)
      } else {
        setTasks(prev => prev.filter(t => t._id !== id))
      }
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const getTaskById = async (id) => {
    try {
      const response = await kanbanService.getTaskById(id)
      return { success: true, task: response.task }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const value = {
    tasks,
    isLoading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider, useTasks }
