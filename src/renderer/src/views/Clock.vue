<template>
  <main>
    <div
      id="flip-number"
      :style="{
        '--bgColor': store.clock.config.background,
        '--color': store.clock.config.color
      }"
    ></div>
  </main>
</template>

<script setup lang="ts">
import FlipClock from '../composables/FlipClock'
import { watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import '@renderer/assets/flipclock.scss'
import { useConfigStore } from '@renderer/store/useConfigStore'
const store = useConfigStore()
const instance = ref<FlipClock>()
const route = useRoute()
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
    refreshClick()
  }
)
watch(
  () => store.isRefresh,
  () => {
    if (route.name !== 'clock') return
    refreshClick()
  }
)

const refreshClick = () => {
  if (instance.value) {
    instance.value.refresh({ el: '#flip-number', ...store.clock.config })
  }
}
</script>

<style lang="scss"></style>
