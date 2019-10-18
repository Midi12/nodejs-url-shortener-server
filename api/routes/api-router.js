const BaseRouter = require('./base-router');
const UrlShortenerRouter = require('./url-shortener-routes/url-shortener-router');

class ApiRouter extends BaseRouter {
	constructor() {
		super();
		this.build();
	}

	build() {
		this.router.use('/link', UrlShortenerRouter.getRoutes());
	}

	static getRoutes() {
		return new ApiRouter().getRouter();
	}
}

module.exports = ApiRouter;
