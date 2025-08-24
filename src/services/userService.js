import { api } from './api'

export const userService = {
  async getUsers() {
    return api.get('/user')
  },

  async register(userData) {
    return api.post('/user', userData)
  },

  async login(credentials) {
    return api.post('/user/login', credentials)
  }
} 