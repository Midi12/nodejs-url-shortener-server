const Express = require('express');
const BodyParser = require('body-parser');

const Mongo = require('./mongo');
const ApiRouter = require('./api/routes/api-router');

class Server {
	constructor() {
		this.buildApp();
		this.setupDb();
	}

	buildApp() {
		this.app = Express();
		this.app.use(BodyParser.urlencoded({ extended: true }));
		this.app.use(BodyParser.json());
		this.app.use(`/api/${process.env.API_VERSION}`, ApiRouter.getRoutes());
	}

	setupDb() {
		this.db = new Mongo(process.env.DB_CONNECTION_STRING);
		this.db.connect();
	}

	getApp() {
		return this.app;
	}

	getDb() {
		return this.db;
	}
}

module.exports = Server;
