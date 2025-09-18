<script setup lang="ts">
import { useThemeStore } from '@/store/theme'
const theme = useThemeStore()
</script>

<template>
  <n-grid :cols="2">
    <n-gi>
      Logo
    </n-gi>
    <n-gi>
      <n-flex justify="end">
        <a href="#">Profile</a>
        <a href="#">Timeline</a>
        <a href="#">Tools</a>
        <a href="#">Contacts</a>
        <n-switch v-model:value="theme.isDark" size="large">
          <template #checked>🌙</template>
          <template #unchecked>☀️</template>
        </n-switch>
      </n-flex>
    </n-gi>
  </n-grid>
</template>
