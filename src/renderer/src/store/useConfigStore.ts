import { defineStore } from 'pinia'

type footerType = {
  bgColor?: string
  color?: string
}
type configType = {
  type: 'clock' | 'timing'
  timing: {
    hour?: number
    minute?: number
    second?: number
  }
}
type ClockType = {
  config: configType
  footer: footerType
}
export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      clock: <ClockType>{
        config: <configType>{
          type: 'clock' as 'clock' | 'timing',
          timing: {
            hour: 0,
            minute: 0,
            second: 0
          }
        },
        footer: {
          bgColor: 'red',
          color: '#fff'
        }
      }
    }
  },
  actions: {
    setConfig(config: configType, footer?: footerType) {
      this.clock.config = {
        ...this.clock.config,
        ...config
      }
      this.clock.footer = {
        ...this.clock.footer,
        ...footer
      }
    }
  }
})
