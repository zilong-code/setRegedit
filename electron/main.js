const { app, BrowserWindow } = require('electron')
const electron =require("electron")
const {installWord5} = require("./utils")
const createWindow = () => {
    const size = electron.screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({
        width: size.width,
        height: size.height
    })

    //   win.loadFile('http://127.0.0.1:5173/')
    win.loadURL('http://127.0.0.1:5173/')
    // 打开electron的开发者工具
    win.webContents.openDevTools({ mode: 'detach' })
    installWord5()
}

app.whenReady().then(() => {
  createWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})