<template>
  <main
    class="opacity-100 hover:opacity-100 w-[94%] bg-white rounded-sm m-auto mb-2 px-2 flex justify-between items-center"
  >
    <switch-contrast theme="outline" size="16" fill="#333" class="cursor-pointer" @click="toggle" />
    <div class="opacity-80 text-sm text-gray-800">
      <router-link v-if="$route.name === 'config'" :to="{ name: 'clock' }">时钟</router-link>
      <router-link v-else :to="{ name: 'config' }">配置</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import { SwitchContrast } from '@icon-park/vue-next'
const store = useConfigStore()
const toggle = () => {
  store.clock.config.type = store.clock.config.type === 'clock' ? 'timing' : 'clock'
}
</script>
<style scoped lang="scss">
main {
  user-select: none;
}
</style>
