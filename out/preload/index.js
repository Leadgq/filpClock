"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  setIgnoreMouseEvents: (ignore, options) => {
    electron.ipcRenderer.send("setIgnoreMouseEvents", ignore, options);
  },
  changeWindowSize(size) {
    electron.ipcRenderer.send("changeWindowSize", size);
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
