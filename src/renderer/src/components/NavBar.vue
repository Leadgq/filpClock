<template>
  <main class="flex items-center">
    <el-tooltip content="重置倒计时" placement="top-start">
      <refresh-one theme="outline" size="16" class="mr-2 cursor-pointer" @click="refresh" />
    </el-tooltip>
    <el-tooltip content="模式切换" placement="top-start">
      <div @click="toggle">
        <alarm-clock
          v-if="currentActionIcon === 'timing'"
          theme="outline"
          size="16"
          class="cursor-pointer"
        />
        <Time v-else theme="outline" size="16" class="cursor-pointer" />
      </div>
    </el-tooltip>
    <div class="opacity-80 text-sm text-gray-800">
      <router-link
        v-if="$route.name === 'config'"
        :to="{ name: 'clock' }"
        :style="{ color: store.clock.footer.color }"
        class="ml-2"
        @click="setClockConfig('clock')"
        >时钟</router-link
      >
      <router-link
        v-else
        :to="{ name: 'config' }"
        :style="{ color: store.clock.footer.color }"
        class="ml-2"
        @click="setClockConfig('timing')"
        >配置</router-link
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { AlarmClock, Time, RefreshOne } from '@icon-park/vue-next'
import { computed, ref } from 'vue'
import router from '@renderer/route/index'
const route = useRoute()
const store = useConfigStore()
// 用于给时钟刷新、每次值都不同
const isRefreshFlag = ref(false)
// 点击时钟icon切换
const toggle = () => {
  // 只要点击窗口就是330
  window.api.changeWindowSize(330)
  if (route.name !== 'clock') {
    router.push({ name: 'clock' })
    return
  }
  // 切换时钟和倒计时
  store.clock.config.type = store.clock.config.type === 'clock' ? 'timing' : 'clock'
}
const currentActionIcon = computed(() => store.clock.config.type)
// 点击时钟和配置之间的切换
const setClockConfig = (type: 'clock' | 'timing') => {
  const size = type === 'clock' ? 330 : 400
  window.api.changeWindowSize(size)
}
const refresh = () => {
  isRefreshFlag.value = !isRefreshFlag.value
  store.setIsRefresh(isRefreshFlag.value)
}
</script>
<style scoped lang="scss">
main {
  user-select: none;
}
</style>
