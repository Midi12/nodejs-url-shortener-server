const BaseRouter = require('../base-router');
const UrlShortenerController = require('../../controllers/url-shortener.controller');

class UrlShortenerRouter extends BaseRouter {
	constructor() {
		super(UrlShortenerController);
		this.build();
	}

	build() {
		this.router.post('/', super.bind('addLink'));
		this.router.get('/:slug', super.bind('getLink'));
	}

	static getRoutes() {
		return new UrlShortenerRouter().getRouter();
	}
}

module.exports = UrlShortenerRouter;
