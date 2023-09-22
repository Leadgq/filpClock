<script setup lang="ts">
import NavBar from './components/NavBar.vue'
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
      <NavBar />
      <Component :is="Component" class="flex flex-col justify-center items-center drag" />
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
