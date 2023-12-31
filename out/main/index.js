"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const icon = path.join(__dirname, "../../resources/icon.png");
electron.ipcMain.on(
  "setIgnoreMouseEvents",
  (event, ignore, options) => {
    const win = electron.BrowserWindow.fromWebContents(event.sender);
    win?.setIgnoreMouseEvents(ignore, options);
  }
);
electron.ipcMain.on("changeWindowSize", (event, width) => {
  const win = electron.BrowserWindow.fromWebContents(event.sender);
  const position = win?.getPosition();
  let x, y;
  if (position) {
    x = position[0];
    y = position[1];
    win?.setBounds({ x, y, width, height: 400 });
  }
});
electron.ipcMain.on("toFoldWindow", (event) => {
  const win = electron.BrowserWindow.fromWebContents(event.sender);
  win?.minimize();
});
electron.ipcMain.on("closeWindow", (event) => {
  const win = electron.BrowserWindow.fromWebContents(event.sender);
  win?.close();
});
electron.ipcMain.on("setWindowIsTop", (event, isTop) => {
  const win = electron.BrowserWindow.fromWebContents(event.sender);
  win?.setAlwaysOnTop(isTop);
});
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 330,
    height: 400,
    show: false,
    frame: false,
    transparent: true,
    maximizable: false,
    resizable: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  if (utils.is.dev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}
electron.app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
