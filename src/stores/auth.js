import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const awaiting2FA = ref(false)

  const tempEmail = ref(null)

  function startLogin(email, password) {
    if (email && password) {
      awaiting2FA.value = true
      tempEmail.value = email
      return true
    }
    return false
  }

  function verifyCode(code) {
    const correctCode = '123456'

    if (code === correctCode) {
      isLoggedIn.value = true
      awaiting2FA.value = false
      tempEmail.value = null
      return true
    }

    return false
  }

  function logout() {
    isLoggedIn.value = false
    awaiting2FA.value = false
    tempEmail.value = null
  }

  return {
    isLoggedIn,
    awaiting2FA,
    startLogin,
    verifyCode,
    logout
  }
})
