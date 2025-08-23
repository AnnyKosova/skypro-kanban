import { mockApi } from './mockApi'

export const kanbanService = {
  async getTasks() {
    return mockApi.get('/kanban')
  },

  async getTaskById(id) {
    const tasks = await mockApi.get('/kanban')
    const task = tasks.tasks.find(t => t._id === id)
    if (!task) throw new Error('Task not found')
    return { task }
  },

  async createTask(taskData) {
    return mockApi.post('/kanban', taskData)
  },

  async updateTask(id, taskData) {
    return mockApi.put(`/kanban/${id}`, taskData)
  },

  async deleteTask(id) {
    return mockApi.delete(`/kanban/${id}`)
  }
} 