import { ElectronAPI } from '@electron-toolkit/preload'
declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions) => void
      changeWindowSize: (width: number) => void
      toFoldWindow: () => void
      closeWindow: () => void
      setWindowIsTop: (isTop: boolean) => void
    }
  }
}
