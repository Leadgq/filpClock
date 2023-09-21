<script setup lang="ts">
import useMouseEvent from '@renderer/composables/useMouseEvent'

const { setIgnoreMouseEvents } = useMouseEvent()
setIgnoreMouseEvents()
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style lang="less"></style>
