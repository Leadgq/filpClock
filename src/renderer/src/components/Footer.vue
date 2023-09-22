<template>
  <div
    class="rounded-[3px] text-white text-center bg-red-500 mt-[5px] text-[15px] w-[94%] flex items-center justify-between px-2 py-[3px]"
    :style="footerStyle"
  >
    <div class="text-left flex-1 truncate">{{ footerContent }}</div>
    <NavBar class="w-[30%] ml-[10px]" />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@renderer/components/NavBar.vue'
import { ref } from 'vue'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { watchPostEffect } from 'vue'
const store = useConfigStore()
const footerStyle = ref()
const footerContent = ref<string | undefined>('')
watchPostEffect(() => {
  footerStyle.value = {
    backgroundColor: store.clock.footer.bgColor,
    color: store.clock.footer.color
  }
  footerContent.value = store.clock.footer.content
})
</script>
