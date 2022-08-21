import path from 'path'
import serve from 'electron-serve'
import { app, Tray, ipcMain } from 'electron'

import { createWindow } from './helpers'

let tray = null
let mainWindow = null

const appIcon = path.join(__dirname, '../resources/icon.ico')
const isProd: boolean = process.env.NODE_ENV === 'production'

if (isProd) {
    serve({ directory: 'app' })
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
    await app.whenReady()

    mainWindow = createWindow('main', {
        width: 1000,
        height: 600,
    })

    if (isProd) {
        await mainWindow.loadURL('app://./home.html')
    } else {
        const port = process.argv[2]
        await mainWindow.loadURL(`http://localhost:${port}/home`)

        mainWindow.webContents.openDevTools()
    }
})()

app.on('window-all-closed', () => {
    app.quit()
})

ipcMain.on('systemTray', (_, data) => {
    if (data === 'show') {
        mainWindow.hide()

        console.log(tray)

        if (tray !== null) {
            return
        }

        try {
            tray = new Tray(appIcon)

            tray.setToolTip('Dodo Desktop')

            tray.on('click', async () => {
                mainWindow.show()

                tray = null
            })
        } catch (error) {
            console.error(error)
        }
    }
})
