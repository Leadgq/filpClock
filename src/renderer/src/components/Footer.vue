<template>
  <div
    class="rounded-sm text-white text-center bg-red-500 mt-[5px] text-[15px] w-[94%]"
    :style="footerStyle"
  >
    {{ footerContent }}
  </div>
</template>

<script setup lang="ts">
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
