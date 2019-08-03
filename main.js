const electron = require('electron');
const url = require('url');
const path = require('path');
const jsonfile = require('jsonfile');

const{app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function(){
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
    // mainWindow.removeMenu();
});

const mainMenu = [
    {
        label: 'Something',
        submenu:[{
            label: 'Add Item'
        }]
    }
];


if(process.env.NODE_ENV !== 'production'){
    mainMenu.push({
        label:'Dev Tools',
        submenu:[
            {
                label: 'Toggle Dev Tools',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    });
}


jsonfile.readFile("apps.json", function (err, obj) {
    if (err) console.error(err);
    const appList = obj.apps;
    console.dir(appList[1].file);
    mainWindow.webContents.send("item:add",appList[1].file);
  });
  