<template>
  <div class="p-3 bg-white bg-opacity-10 w-[94%] rounded-lg config-content">
    <div class="bg-[#34495e] w-full h-full p-3 rounded-lg overflow-y-auto overflow-x-hidden">
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
      <h2 class="mt-2">底部信息</h2>
      <div class="bg-[#2c3e50] p-3 rounded-lg">
        <div class="flex items-center">
          <span class="text-sm text-white text-opacity-80 w-[30%]">文字内容:</span>
          <el-input v-model="store.clock.footer.content" size="small" />
        </div>
        <div class="flex mt-2">
          <div class="card">
            <p>背景颜色</p>
            <el-color-picker v-model="store.clock.footer.bgColor"></el-color-picker>
          </div>
          <div class="card">
            <p>字体颜色</p>
            <el-color-picker v-model="store.clock.footer.color"></el-color-picker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useConfigStore } from '@renderer/store/useConfigStore'
const store = useConfigStore()
// 如果倒计时值有发生 变化，就切换到倒计时模式
watch(
  () => store.clock.config.timing,
  () => {
    store.clock.config.type = 'timing'
  },
  {
    deep: true
  }
)
</script>

<style scoped lang="scss">
h2 {
  @apply text-sm  font-bold  opacity-80 text-white mb-1 text-center;
}
.config-content {
  max-height: 300px;
  overflow-y: auto;
}

.block {
  @apply flex gap-5 bg-[#2c3e50] p-2  rounded-lg;
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
    width: 85px;
  }
}
</style>
