<template>
  <main>
    <div id="flip-number" class="drag"></div>
  </main>
</template>

<script setup lang="ts">
import FlipClock from '../composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipclock.scss'

onMounted(() => {
  const instance = new FlipClock({
    type: 'clock',
    el: '#flip-number',
    timing: {}
  })
  instance.render()
})
</script>
