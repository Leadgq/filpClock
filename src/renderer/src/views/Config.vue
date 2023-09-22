<template>
  <div class="p-5 bg-[#34495e] w-[94%] flex flex-col items-center">
    <h2>时钟颜色</h2>
    <div class="flex gap-5">
      <div class="card nodrag">
        <p>背景颜色</p>
        <el-color-picker v-model="store.clock.config.background"></el-color-picker>
      </div>
      <div class="card nodrag">
        <p>文字颜色</p>
        <el-color-picker v-model="store.clock.config.color"></el-color-picker>
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
  @apply text-sm  font-bold  opacity-80 text-white mb-2;
}
.card {
  @apply flex  flex-col text-xs items-center;
  p {
    @apply mb-2;
  }
}
</style>
