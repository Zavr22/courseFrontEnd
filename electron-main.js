const {app, BrowserWindow} = require('electron');

let url = "http://localhost:8080/";

// if (process.env.NODE_ENV === 'DEV') {
//     url = 'http://localhost:8080/';
// } else {
//     console.log('Environment is not in DEV!')
// }

app.on('ready', () => {
    let window = new BrowserWindow({width: 800, height: 600});
    window.loadURL(url);
});