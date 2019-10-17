const Express = require('express');

const UrlShortenerRouter = require('./url-shortener-routes/url-shortener-router');

const apiRouter = () => {
	const router = Express.Router();

	router.use('/link', UrlShortenerRouter.getRoutes());

	return router;
};

module.exports = apiRouter;
