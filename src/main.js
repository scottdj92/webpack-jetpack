var app = require('app');
var BrowserWindow = require("browser-window");

//get a reference to the main window
var mainWindow = null;

//quit when all windows are closed
app.on('window-all-closed', function() {
    if(process.platform != 'darwin') {
        app.quit();
    }
});

//this will call when Electron has finished loading and is ready
app.on('ready', function() {
    //create main window
    mainWindow = new BrowserWindow({width: 900, height: 600});

    //load index.html of the app
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    //emitted when the window is closed
    mainWindow.on('closed', function() {
        //dereference the main window
        mainWindow = null;
    });
});
