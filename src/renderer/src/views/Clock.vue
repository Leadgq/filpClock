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
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@renderer/store/useConfigStore'
const store = useConfigStore()
const { config } = storeToRefs(store)
const { setConfig } = store
const instance = ref<FlipClock>()

onMounted(() => {
  instance.value = new FlipClock({
    el: '#flip-number',
    type: config.value.type,
    timing: config.value.timing
  })
  instance.value.render()
})

watch(
  () => config.value.type,
  () => {
    if (instance.value) {
      instance.value
        .destroy()
        .config({ el: '#flip-number', ...config.value })
        .render()
    }
  }
)

setTimeout(() => {
  setConfig({
    type: 'timing',
    timing: {
      hour: 0,
      minute: 8,
      second: 0
    }
  })
}, 5000)
</script>

<style lang="scss">
:root {
  --bgColor: #000;
}
</style>
