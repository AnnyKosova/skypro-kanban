import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { kanbanService } from '../services/kanbanService'
import useAuth from './AuthContext'

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
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    
    if (!user.token) {
      setTasks([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)
    try {
      const response = await kanbanService.getTasks()
      setTasks(response.tasks || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createTask = async (taskData) => {
    try {
      const response = await kanbanService.createTask(taskData)
      setTasks(response.tasks || [])
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updateTask = async (id, taskData) => {
    try {
      const response = await kanbanService.updateTask(id, taskData)
      setTasks(response.tasks || [])
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await kanbanService.deleteTask(id)
      setTasks(response.tasks || [])
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

  useEffect(() => {
    if (setAuthCallback && typeof setAuthCallback === 'function') {
      setAuthCallback(fetchTasks)
    }
  }, [setAuthCallback, fetchTasks])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

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

export { TaskProvider }
export default useTasks
