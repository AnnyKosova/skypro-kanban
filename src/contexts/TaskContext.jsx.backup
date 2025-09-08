import React, { createContext, useState, useEffect, useCallback } from 'react'
import { api as kanbanService } from '../services/api'
import { useAuth } from '../hooks/useAuth'

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()

  const fetchTasks = useCallback(async () => {
    if (isLoading || tasks.length > 0) return
    setIsLoading(true)
    try {
      const response = await kanbanService.getTasks()
      setTasks(response.tasks || [])
    } catch (err) {
      console.error('Ошибка загрузки задач:', err)
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, tasks])

  useEffect(() => {
    if (user) {
      fetchTasks()
    }
  }, [user, fetchTasks])

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


  const value = {
    tasks,
    setTasks,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    isLoading
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider, TaskContext }
