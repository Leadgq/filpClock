<template>
  <main class="flex items-center">
    <div @click="toggle">
      <alarm-clock
        v-if="currentActionIcon === 'timing'"
        theme="outline"
        size="16"
        class="cursor-pointer"
      />
      <Time v-else theme="outline" size="16" class="cursor-pointer" />
    </div>
    <div class="opacity-80 text-sm text-gray-800">
      <router-link
        v-if="$route.name === 'config'"
        :to="{ name: 'clock' }"
        :style="{ color: store.clock.footer.color }"
        class="ml-2"
        >时钟</router-link
      >
      <router-link
        v-else
        :to="{ name: 'config' }"
        :style="{ color: store.clock.footer.color }"
        class="ml-2"
        >配置</router-link
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { AlarmClock, Time } from '@icon-park/vue-next'
import { computed } from 'vue'
import router from '@renderer/route/index'
const route = useRoute()
const store = useConfigStore()
const toggle = () => {
  if (route.name !== 'clock') {
    router.push({ name: 'clock' })
    return
  }
  store.clock.config.type = store.clock.config.type === 'clock' ? 'timing' : 'clock'
}
const currentActionIcon = computed(() => store.clock.config.type)
</script>
<style scoped lang="scss">
main {
  user-select: none;
}
</style>
