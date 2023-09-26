<template>
  <div
    class="tools w-[94%] bg-white mb-2 opacity-0 rounded-sm text-white hover:opacity-100 p-1 flex justify-end"
    :style="{
      backgroundColor: store.clock.footer.bgColor,
      color: store.clock.footer.color
    }"
  >
    <click-to-fold theme="outline" size="14" class="mr-2 cursor-pointer" @click="toFold" />
    <Close theme="outline" size="14" class="cursor-pointer" @click="closeWin" />
  </div>
</template>

<script setup lang="ts">
import { Close, ClickToFold } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore'
const store = useConfigStore()

const toFold = () => {
  window.api.toFoldWindow()
}
const closeWin = () => {
  window.api.closeWindow()
}
</script>
