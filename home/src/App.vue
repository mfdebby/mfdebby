<script setup>
import { darkTheme } from "naive-ui"
import { useThemeStore } from '@/store/theme'

import Experience from '@/components/Experience.vue'
import Profile from "@/components/Profile.vue"
import Navbar from '@/components/Navbar.vue'

const theme = useThemeStore()
</script>

<template>
  <n-config-provider :theme="theme.isDark ? darkTheme : null">
    <n-layout style="height: 100vh;">
      <n-layout-header bordered>
        <Navbar />
      </n-layout-header>
      <n-layout-content class="min-h-screen overflow-x-hidden">
        <Profile />
        <!-- <Experience /> -->
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
