const {app, BrowserWindow} = require('electron')

app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
mainWindow.loadURL('file://' + __dirname + '/index.html');
})
