<script setup lang="ts">
import { ref } from "vue"
import { Menu, SunnyOutline, Moon } from "@vicons/ionicons5"
import { useThemeStore } from "@/store/theme"

import { NConfigProvider, GlobalThemeOverrides } from "naive-ui"

const themeOverrides: GlobalThemeOverrides = {
  Anchor: {
    linkFontSize: ".9rem",
  }
}

const theme = useThemeStore()
const showMenu = ref(false)
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-grid :cols="2">
      <!-- Logo -->
      <n-gi>
        <n-text class="text-lg">mfdebby</n-text>
      </n-gi>

      <!-- Desktop menu -->
      <n-gi class="hidden lg:block">
        <n-flex justify="end" align="center">
          <!-- Anchors -->
          <n-anchor class="flex" type="block">
            <n-anchor-link title="Profile" href="#scrollto.profile" style="font">
            </n-anchor-link>
            <n-anchor-link title="Timeline" href="#scrollto.timeline">
            </n-anchor-link>
            <n-anchor-link title="Tools" href="#scrollto.tools">
            </n-anchor-link>
            <n-anchor-link title="Contacts" href="#scrollto.contacts">
            </n-anchor-link>
          </n-anchor>

          <!-- Dark theme switch -->
          <n-switch v-model:value="theme.isDark">
            <template #checked-icon>
              <n-icon>
                <SunnyOutline />
              </n-icon>
            </template>
            <template #unchecked-icon>
              <n-icon>
                <Moon />
              </n-icon>
            </template>
          </n-switch>
        </n-flex>
      </n-gi>

      <!-- Mobile hamburger -->
      <n-gi class="flex lg:hidden justify-end">
        <n-button quaternary circle @click="showMenu = true">
          <n-icon size="30">
            <Menu />
          </n-icon>
        </n-button>
      </n-gi>
    </n-grid>

    <!-- Drawer for mobile menu -->
    <n-drawer v-model:show="showMenu" placement="right">
      <n-drawer-content>

        <!-- Anchors -->
        <n-anchor class="flex flex-col space-y-4" type="block">
          <n-anchor-link title="Profile" href="#scrollto.profile" style="font">
          </n-anchor-link>
          <n-anchor-link title="Timeline" href="#scrollto.timeline">
          </n-anchor-link>
          <n-anchor-link title="Tools" href="#scrollto.tools">
          </n-anchor-link>
          <n-anchor-link title="Contacts" href="#scrollto.contacts">
          </n-anchor-link>
        </n-anchor>

        <!-- Dark theme switch -->
        <n-switch v-model:value="theme.isDark" class="ml-2">
          <template #checked-icon>
            <n-icon>
              <SunnyOutline />
            </n-icon>
          </template>
          <template #unchecked-icon>
            <n-icon>
              <Moon />
            </n-icon>
          </template>
        </n-switch>
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>
