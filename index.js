const {app, BrowserWindow } = require('electron');

function createWindows(){
    let appWindow = new BrowserWindow();
    //load brouser
        //appWindow.loadURL('https://cmdbanner.io');
    // load file
        appWindow.loadFile('./index.html');
}

app.on('ready', createWindows);