import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const darkMode = ref(false)
  const notifications = ref(true)

  // Load saved settings
  const saved = localStorage.getItem('settings')
  if (saved) {
    const parsed = JSON.parse(saved)
    darkMode.value = parsed.darkMode ?? false
    notifications.value = parsed.notifications ?? true
  }

  // Auto-save on change
  watch(
    () => ({
      darkMode: darkMode.value,
      notifications: notifications.value
    }),
    (val) => {
      localStorage.setItem('settings', JSON.stringify(val))
    },
    { deep: true }
  )

  return {
    darkMode,
    notifications
  }
})
