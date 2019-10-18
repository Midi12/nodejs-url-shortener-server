const Express = require('express');

const NotImplementedError = require('../../common/errors/not-implemented-error');

class BaseRouter {
	constructor(Controller) {
		this.router = Express.Router();
		if (Controller !== undefined) {
			this.controller = new Controller();
		}
	}

	getRouter() {
		return this.router;
	}

	getController() {
		return this.controller;
	}

	/* eslint-disable class-methods-use-this */
	build() {
		throw new NotImplementedError('You need to override this function');
	}
	/* eslint-disable class-methods-use-this */

	bind(func) {
		return this.controller[func].bind(this.controller);
	}

	static getRoutes() {
		throw new NotImplementedError('You need to override this function');
	}
}

module.exports = BaseRouter;
