const electron = require('electron');
const url = require('url');
const path = require('path');
const jsonfile = require('jsonfile');

const{app, BrowserWindow, Menu, globalShortcut} = electron;

let mainWindow;

app.on('ready', ()=>{
    globalShortcut.register('CommandOrControl+E', () => {
        app.quit();
    });
    globalShortcut.register('CommandOrControl+D', () => {
        
    });
    mainWindow = new BrowserWindow(
        {
            webPreferences: {
                nodeIntegration: true
            }
        }
    );
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
    }));

    const menu = Menu.buildFromTemplate(mainMenu);
    Menu.setApplicationMenu(menu);
    //mainWindow.removeMenu(); // comment out this line to get DEV TOOls
});

const mainMenu = [
    {
        label:'Dev Tools',
        submenu:[
            {
                label: 'Toggle Dev Tools',
                accelerator: 'Ctrl+',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    }
];





  