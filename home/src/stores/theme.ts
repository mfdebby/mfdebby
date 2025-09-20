import { defineStore } from 'pinia'
import { ref, watch, type Ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark: Ref<boolean> = ref(localStorage.getItem('theme') === 'dark')

  watch(isDark, (val: boolean) => {
    localStorage.setItem('theme', val ? 'dark' : 'light')
  })

  function toggleTheme(): void {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
})
