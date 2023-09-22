<template>
  <div class="p-3 bg-white bg-opacity-10 w-[94%] drag rounded-lg">
    <div class="bg-[#34495e] w-full p-3 rounded-lg">
      <h2>时钟颜色</h2>
      <div class="block">
        <div class="card">
          <p>背景颜色</p>
          <el-color-picker v-model="store.clock.config.background"></el-color-picker>
        </div>
        <div class="card">
          <p>文字颜色</p>
          <el-color-picker v-model="store.clock.config.color"></el-color-picker>
        </div>
      </div>
      <h2 class="mt-2">倒计时</h2>
      <div class="block">
        <div class="card">
          <p>小时</p>
          <el-input-number
            v-model="store.clock.config.timing.hour"
            :min="0"
            :max="10"
            size="small"
          />
        </div>
        <div class="card">
          <p>分钟</p>
          <el-input-number
            v-model="store.clock.config.timing.minute"
            :min="0"
            :max="10"
            size="small"
          />
        </div>
        <div class="card">
          <p>秒</p>
          <el-input-number v-model="store.clock.config.timing.second" :min="0" size="small" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
const store = useConfigStore()
</script>

<style scoped lang="scss">
h2 {
  @apply text-sm  font-bold  opacity-80 text-white mb-1 text-center;
}

.block {
  @apply flex gap-5 bg-[#2c3e50] p-2 rounded-lg;
}

.card {
  @apply w-full flex  flex-col text-xs items-center text-white;
  p {
    @apply mb-2;
  }
  &:deep(.el-color-picker) {
    -webkit-app-region: no-drag;
  }
  &:deep(.el-input-number--small) {
    width: 75px;
  }
}
</style>
