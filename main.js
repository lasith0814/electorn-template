const { app, BrowserWindow } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");

require("@electron/remote/main").initialize();

const createWindow = async () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false,
		},
	});
	win.maximize();
	win.setMenu(null);
	win.loadURL(isDev ? "http://localhost:8000" : `file://${path.join(__dirname, "build/index.html")}`);
	require("@electron/remote/main").enable(win.webContents);
	win.show();
	if (isDev) win.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
