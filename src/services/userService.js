import { mockApi } from './mockApi'

export const userService = {
  async getUsers() {
    return mockApi.get('/user')
  },

  async register(userData) {
    return mockApi.post('/user', userData)
  },

  async login(credentials) {
    return mockApi.post('/user/login', credentials)
  }
} 