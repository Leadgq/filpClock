<template>
  <div
    class="tools w-[94%] bg-white mb-2 opacity-0 rounded-sm text-white hover:opacity-100 p-1 flex justify-between items-center"
    :style="{
      backgroundColor: store.clock.footer.bgColor,
      color: store.clock.footer.color
    }"
  >
    <div class="text-sm select-none">工具栏</div>
    <div class="flex">
      <el-tooltip :content="isWindowText">
        <minus-the-top
          theme="outline"
          size="14"
          class="mr-2 cursor-pointer"
          @click="setWindowIsTop"
        />
      </el-tooltip>
      <el-tooltip content="缩小" :visible="windVisible">
        <click-to-fold
          theme="outline"
          size="14"
          class="mr-2 cursor-pointer"
          @click="toFold"
          @mouseenter="windVisible = true"
          @mouseleave="windVisible = false"
        />
      </el-tooltip>
      <el-tooltip content="关闭">
        <Close theme="outline" size="14" class="cursor-pointer" @click="closeWin" />
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Close, ClickToFold, MinusTheTop } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore'
const store = useConfigStore()
const isWindowTop = ref(true)
const isWindowText = ref('取消置顶')
const windVisible = ref(false)
const toFold = async () => {
  windVisible.value = false
  setTimeout(() => window.api.toFoldWindow(), 100)
}
const closeWin = () => {
  window.api.closeWindow()
}
const setWindowIsTop = () => {
  isWindowTop.value = !isWindowTop.value
  isWindowText.value = isWindowTop.value ? '取消置顶' : '置顶'
  window.api.setWindowIsTop(isWindowTop.value)
}
</script>
