<template>
  <main>
    <div id="flip-number"></div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import FlipClock from '../composables/FlipClock'
import Footer from '../components/Footer.vue'
import { watch, ref, onMounted } from 'vue'
import '@renderer/assets/flipclock.scss'
import { useConfigStore } from '@renderer/store/useConfigStore'
const store = useConfigStore()
const instance = ref<FlipClock>()

onMounted(() => {
  instance.value = new FlipClock({
    el: '#flip-number',
    type: store.clock.config.type,
    timing: store.clock.config.timing
  })
  instance.value.render()
})

watch(
  () => store.clock.config.type,
  () => {
    if (instance.value) {
      instance.value
        .destroy()
        .config({ el: '#flip-number', ...store.clock.config })
        .render()
    }
  }
)
</script>

<style lang="scss">
:root {
  --bgColor: #000;
}
</style>
