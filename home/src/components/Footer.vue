<script setup>
import { Mail, LogoLinkedin } from '@vicons/ionicons5'
</script>

<template>
  <n-flex justify="center" align="center" vertical>
    <n-flex>
      <a href="https://github.com/mfdebby">
        <n-icon size="20">
          <i class="devicon-github-original"></i>
        </n-icon>
      </a>

      <a href="https://www.linkedin.com/in/christian-lester-cayabyab-6b7849168">
        <n-icon size="20">
          <LogoLinkedin />
        </n-icon>
      </a>

      <a href="mailto:mfchristianbcayabyab@gmail.com">
        <n-icon size="20">
          <Mail />
        </n-icon>
      </a>
    </n-flex>
    <n-text> &copy; {{ new Date().getFullYear() }} mfdebby </n-text>
  </n-flex>
</template>
