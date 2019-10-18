const Server = require('./server');

const port = Number.parseInt(process.env.PORT, 10) || 3000;
const hostname = process.env.HOSTNAME || null;

global.gServer = new Server().getApp().listen(port, hostname, () => console.log(`Server running on port ${port}`));

// Graceful exit
const gracefulExit = () => {
	if (global.gServer != null) {
		global.gServer.close(() => {
			if (global.gServer.getDb() != null) {
				global.gMongo.getDb().disconnect();
			}
		});
	}
};

process.on('SIGINT', gracefulExit);
process.on('SIGTERM', gracefulExit);
