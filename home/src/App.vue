<script setup>
import { darkTheme } from 'naive-ui'
import { useThemeStore } from '@/store/theme'

import Navbar from '@/components/Navbar.vue'
import Profile from '@/components/Profile.vue'
import Timeline from '@/components/Timeline.vue'
import Tools from '@/components/Tools.vue'

const theme = useThemeStore()
</script>

<template>
  <n-config-provider :theme="theme.isDark ? darkTheme : null">
    <n-layout style="height: 100vh">
      <n-layout-header bordered>
        <Navbar />
      </n-layout-header>
      <n-layout-content class="min-h-screen overflow-x-hidden">
        <Profile />
        <Timeline />
        <Tools />
      </n-layout-content>
      <n-layout-footer bordered>Chengfu Road</n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  padding: 24px;
}
</style>
