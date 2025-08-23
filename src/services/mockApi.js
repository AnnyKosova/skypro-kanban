const mockUsers = [
  {
    id: 1,
    login: 'admin',
    name: 'Админ Глеб',
    password: 'admin',
    token: 'mock-admin-token-12345'
  },
  {
    id: 2,
    login: 'test1',
    name: 'Тестовый пользователь',
    password: 'test1',
    token: 'mock-test1-token-67890'
  }
]

const mockTasks = [
  {
    _id: '1',
    userId: '1',
    title: 'Web Design',
    topic: 'Web Design',
    date: '2024-01-07T16:26:18.179Z',
    description: 'Создать дизайн для нового сайта',
    status: 'Без статуса'
  },
  {
    _id: '2',
    userId: '1',
    title: 'Research',
    topic: 'Research',
    date: '2024-01-08T16:26:18.179Z',
    description: 'Провести исследование рынка',
    status: 'Нужно сделать'
  },
  {
    _id: '3',
    userId: '1',
    title: 'Copywriting',
    topic: 'Copywriting',
    date: '2024-01-09T16:26:18.179Z',
    description: 'Написать тексты для лендинга',
    status: 'В работе'
  }
]

const getAuthHeaders = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.token ? { Authorization: `Bearer ${user.token}` } : {}
}

const checkAuth = () => {
  const headers = getAuthHeaders()
  if (!headers.Authorization) {
    throw new Error('HTTP error! status: 401')
  }
  return true
}

export const mockApi = {
  get: async (endpoint) => {
    if (endpoint === '/user') {
      return { users: mockUsers }
    }
    if (endpoint === '/kanban') {
      checkAuth()
      return { tasks: mockTasks }
    }
    throw new Error('Endpoint not found')
  },

  post: async (endpoint, data) => {
    if (endpoint === '/user/login') {
      const user = mockUsers.find(u => u.login === data.login && u.password === data.password)
      if (user) {
        return { user }
      }
      throw new Error('Неверный логин или пароль')
    }
    if (endpoint === '/user') {
      const newUser = {
        id: mockUsers.length + 1,
        login: data.login,
        name: data.name,
        password: data.password,
        token: `mock-token-${Date.now()}`
      }
      mockUsers.push(newUser)
      return { user: newUser }
    }
    if (endpoint === '/kanban') {
      checkAuth()
      const newTask = {
        _id: String(mockTasks.length + 1),
        userId: '1',
        title: data.title || 'Новая задача',
        topic: data.topic || 'Research',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        status: data.status || 'Без статуса'
      }
      mockTasks.push(newTask)
      return { tasks: mockTasks }
    }
    throw new Error('Endpoint not found')
  },

  put: async (endpoint, data) => {
    if (endpoint.startsWith('/kanban/')) {
      checkAuth()
      const taskId = endpoint.split('/').pop()
      const taskIndex = mockTasks.findIndex(t => t._id === taskId)
      if (taskIndex !== -1) {
        mockTasks[taskIndex] = { ...mockTasks[taskIndex], ...data }
        return { tasks: mockTasks }
      }
      throw new Error('Task not found')
    }
    throw new Error('Endpoint not found')
  },

  delete: async (endpoint) => {
    if (endpoint.startsWith('/kanban/')) {
      checkAuth()
      const taskId = endpoint.split('/').pop()
      const taskIndex = mockTasks.findIndex(t => t._id === taskId)
      if (taskIndex !== -1) {
        mockTasks.splice(taskIndex, 1)
        return { tasks: mockTasks }
      }
      throw new Error('Task not found')
    }
    throw new Error('Endpoint not found')
  }
} 