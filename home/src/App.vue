<script setup>
import { darkTheme } from "naive-ui"
import { useThemeStore } from '@/store/theme'

import Experience from '@/components/Experience.vue'
import Navbar from '@/components/Navbar.vue'

const theme = useThemeStore()
</script>

<template>
  <n-config-provider :theme="theme.isDark ? darkTheme : null">
    <n-layout>
      <n-layout-header>
        <Navbar />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <Experience />
      </n-layout-content>
      <n-layout-footer>Chengfu Road</n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  padding: 24px;
}
</style>
