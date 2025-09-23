import { defineStore } from 'pinia'
import { ref, watch, type Ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const savedTheme = localStorage.getItem('theme')

  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  const isDark: Ref<boolean> = ref(
    savedTheme ? savedTheme === 'dark' : systemPrefersDark,
  )

  watch(isDark, (val: boolean) => {
    localStorage.setItem('theme', val ? 'dark' : 'light')
  })

  function toggleTheme(): void {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
})
