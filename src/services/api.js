const API_BASE_URL = 'https://wedev-api.sky.pro/api'

const getAuthHeaders = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const headers = {}
  
  if (user.token) {
    headers['Authorization'] = `Bearer ${user.token}`
  }
  
  return headers
}

const handleResponse = async (response) => {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`
    
    try {
      const errorData = await response.json()
      if (errorData.message) {
        errorMessage = errorData.message
      } else if (errorData.error) {
        errorMessage = errorData.error
      }
    } catch (e) {
      // Если не удалось распарсить JSON, используем стандартное сообщение
    }
    
    throw new Error(errorMessage)
  }
  return response.json()
}

export const api = {
  get: async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: getAuthHeaders()
    })
    return handleResponse(response)
  },

  post: async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return handleResponse(response)
  },

  put: async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return handleResponse(response)
  },

  delete: async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    return handleResponse(response)
  }
} 