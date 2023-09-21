import { defineStore } from 'pinia'

type configType = {
  type: 'clock' | 'timing'
  timing: {
    hour?: number
    minute?: number
    second?: number
  }
}
export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      config: <configType>{
        type: 'clock' as 'clock' | 'timing',
        timing: {
          hour: 0,
          minute: 8,
          second: 0
        }
      }
    }
  },
  actions: {
    setConfig(config: configType) {
      this.config = {
        ...this.config,
        ...config
      }
    }
  }
})
