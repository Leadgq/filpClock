import { BrowserWindow, IgnoreMouseEventsOptions, IpcMainEvent, ipcMain } from 'electron'

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: IgnoreMouseEventsOptions) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    win?.setIgnoreMouseEvents(ignore, options)
  }
)

ipcMain.on('changeWindowSize', (event: IpcMainEvent, width: number) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  const position = win?.getPosition()
  let x: number, y: number
  if (position) {
    x = position[0]
    y = position[1]
    win?.setBounds({ x, y, width, height: 400 })
  }
})

ipcMain.on('toFoldWindow', (event: IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  win?.minimize()
})

ipcMain.on('closeWindow', (event: IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  win?.close()
})
