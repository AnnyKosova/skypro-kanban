import { api } from './api'

export const kanbanService = {
  async getTasks() {
    return api.get('/kanban')
  },

  async getTaskById(id) {
    return api.get(`/kanban/${id}`)
  },

  async createTask(taskData) {
    return api.post('/kanban', taskData)
  },

  async updateTask(id, taskData) {
    return api.put(`/kanban/${id}`, taskData)
  },

  async deleteTask(id) {
    return api.delete(`/kanban/${id}`)
  }
} 