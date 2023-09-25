import { defineStore } from 'pinia'

type footerType = {
  bgColor?: string
  color?: string
  content?: string
}
type configType = {
  type: 'clock' | 'timing'
  background?: string
  color?: string
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
      isRefresh: false,
      clock: <ClockType>{
        config: <configType>{
          type: 'clock' as 'clock' | 'timing',
          background: '#fff',
          color: '#000',
          timing: {
            hour: 0,
            minute: 8,
            second: 0
          }
        },
        footer: {
          bgColor: '#16a085',
          color: '#fff',
          content: '点赞是一种美德'
        }
      }
    }
  },
  actions: {
    setIsRefresh(state: boolean) {
      this.isRefresh = state
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'clock',
        storage: localStorage,
        paths: ['clock']
      }
    ]
  }
})
