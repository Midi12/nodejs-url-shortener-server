const server = require('./server');

const port = Number.parseInt(process.env.PORT, 10) || 3000;
const hostname = process.env.HOSTNAME || null;

global.gServer = server.listen(port, hostname, () => console.log(`Server running on port ${port}`));

// Graceful exit
const gracefulExit = () => {
	if (global.gServer != null) {
		global.gServer.close(() => {
			if (global.gMongo != null) {
				global.gMongo.Stop();
			}
		});
	}
};

process.on('SIGINT', gracefulExit);
process.on('SIGTERM', gracefulExit);
