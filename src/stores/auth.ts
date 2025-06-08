import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  // Hardcoded credentials for demo
  const validCredentials = {
    username: 'jmnebre',
    password: 'compeng2024'
  }

  const login = (username: string, password: string): boolean => {
    if (username === validCredentials.username && password === validCredentials.password) {
      isAuthenticated.value = true
      user.value = {
        username: username,
        name: 'John Michael Nebre',
        email: 'jmnebre@gmail.com'
      }
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('user', JSON.stringify(user.value))
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = null
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
  }

  const initializeAuth = () => {
    const storedAuth = localStorage.getItem('isAuthenticated')
    const storedUser = localStorage.getItem('user')
    
    if (storedAuth === 'true' && storedUser) {
      isAuthenticated.value = true
      user.value = JSON.parse(storedUser)
    }
  }

  return {
    isAuthenticated: computed(() => isAuthenticated.value),
    user: computed(() => user.value),
    login,
    logout,
    initializeAuth
  }
})