<script setup lang="ts">
import { Crown } from '@icon-park/vue-next'
import Footer from '@renderer/components/Footer.vue'
import { onMounted } from 'vue'
import useMouseEvent from '@renderer/composables/useMouseEvent'
onMounted(() => {
  const { setIgnoreMouseEvents } = useMouseEvent()
  setIgnoreMouseEvents()
})
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component }">
      <div class="flex flex-col justify-center items-center">
        <Crown theme="outline" size="18" class="mb-2 text-white" />
        <Component :is="Component" class="drag" />
        <Footer />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
