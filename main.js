// terminal should be in activity
// create main.js
// npm init -y
// npm install electron
// in package.json file => add line => 

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow(){
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule:true
          },
          
    })

    win.loadFile("index.html").then(function(){
      // win.removeMenu() ;
        win.maximize();
    });
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.