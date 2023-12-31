import { contextBridge, IgnoreMouseEventsOptions, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions) => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  changeWindowSize(width: number) {
    ipcRenderer.send('changeWindowSize', width)
  },
  toFoldWindow() {
    ipcRenderer.send('toFoldWindow')
  },
  closeWindow() {
    ipcRenderer.send('closeWindow')
  },
  setWindowIsTop(isTop: boolean) {
    ipcRenderer.send('setWindowIsTop', isTop)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
