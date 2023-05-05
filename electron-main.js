const { app, BrowserWindow } = require("electron");
require("dotenv").config();

let url;
if (process.env.NODE_ENV === "DEV") {
  url = "http://localhost:8080/";
} else {
  console.log("Environment is not in DEV!");
}
console.log(url);

app.on("ready", () => {
  let window = new BrowserWindow({ width: 800, height: 600 });
  if (process.env.DEBUG === "true") {
    window.webContents.openDevTools();
  }
  window.loadURL(url);
});
