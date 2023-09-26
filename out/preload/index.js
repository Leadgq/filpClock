"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  setIgnoreMouseEvents: (ignore, options) => {
    electron.ipcRenderer.send("setIgnoreMouseEvents", ignore, options);
  },
  changeWindowSize(width) {
    electron.ipcRenderer.send("changeWindowSize", width);
  },
  toFoldWindow() {
    electron.ipcRenderer.send("toFoldWindow");
  },
  closeWindow() {
    electron.ipcRenderer.send("closeWindow");
  },
  setWindowIsTop(isTop) {
    electron.ipcRenderer.send("setWindowIsTop", isTop);
  }
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
