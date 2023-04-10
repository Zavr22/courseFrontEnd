const { app, BrowserWindow } = require("electron");
require("dotenv").config();

let url;
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:8080/";
} else {
  console.log("Environment is not in DEV!");
}

app.on("ready", () => {
  let window = new BrowserWindow({ width: 800, height: 600 });
  window.webContents.openDevTools();
  window.loadURL(url);
});
