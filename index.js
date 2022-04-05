const {app, BrowserWindow, ipcMain } = require('electron');

function createWindows(){
    let appWindow = new BrowserWindow({
        width: 600,
        height:800,
        center: true,
        minWidth: 300,
        show:false,
    });
    //load brouser
        //appWindow.loadURL('https://cmdbanner.io');
    // load file
        appWindow.loadFile('./index.html');

        appWindow.on('closed', () => {
            appWindow = null
        });

        let aboutWindow = new BrowserWindow({
            width:300,
            height:300,
            frame:false,
            webPreferences: {
                nodeIntegration: true
            },
            show:false,
        });
        aboutWindow.loadFile('about.html');

        appWindow.once('ready-to-show', ()=>{
            // appWindow.maximize();
            appWindow.show();

            setTimeout(()=>{
                aboutWindow.show();
                /*setTimeout(()=>{
                    aboutWindow.hide()
                }, 5000);*/
            }, 1000);

            aboutWindow.show();
        });
        aboutWindow.on('closed', () => {
            aboutWindow = null
        });
        ipcMain.on('closeInfoWindow', (event) => {
            aboutWindow.hide()
        });
        ipcMain.on('openInfoWindow', (event) => {
            aboutWindow.show()
        });
        
}

app.on('ready', createWindows);