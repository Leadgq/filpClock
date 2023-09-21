<template>
  <main>
    <div id="flip-number"></div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import FlipClock from '../composables/FlipClock'
import Footer from '../components/Footer.vue'
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

<style lang="scss">
:root {
  --bgColor: #000;
}
</style>
