const helpers = require('../../common/helpers/helpers');

const ShortLinkService = require('../services/short-link.service');

const BadRequestError = require('../../common/errors/bad-request-error');
const InternalError = require('../../common/errors/internal-error');

const JsonCreatedResponse = require('../../common/responses/json-responses/json-success-responses/json-created-response');
const JsonMovedPermanentlyResponse = require('../../common/responses/json-responses/json-redirection-responses/json-moved-permanently-response');
const JsonNotFoundResponse = require('../../common/responses/json-responses/json-client-error-responses/json-not-found-response');

class UrlShortenerController {
	constructor() {}

	/* eslint-disable class-methods-use-this */
	async getLink(req, res) {
		let link = null;

		try {
			const slug = req.params.slug;
			if (slug == null || slug === '') {
				throw new BadRequestError('Invalid slug');
			}

			const shortLinkService = new ShortLinkService();
			if (shortLinkService == null) {
				throw new InternalError('Failed to start ShortLinkService');
			}

			const shortenedLink = await shortLinkService.get(slug);
			if (shortenedLink != null) {
				link = shortenedLink.longURL;
			}
		} catch (err) {
			return helpers.handleExpectionResponse(res, err);
		}

		return link != null
			? new JsonMovedPermanentlyResponse(res, link)
			: new JsonNotFoundResponse(res);
	}
	/* eslint-disable class-methods-use-this */

	/* eslint-disable class-methods-use-this */
	async addLink(req, res) {
		let shortenedLink = null;

		try {
			const url = req.body.url;
			if (url == null || url === '' || !helpers.isValidUrl(url)) {
				throw new BadRequestError('Invalid url');
			}

			const shortLinkService = new ShortLinkService();
			if (shortLinkService == null) {
				throw new InternalError('Failed to start ShortLinkService');
			}

			shortenedLink = await shortLinkService.save(url);
		} catch (err) {
			return helpers.handleExpectionResponse(res, err);
		}

		return new JsonCreatedResponse(res, shortenedLink);
	}
	/* eslint-enable class-methods-use-this */
}

module.exports = UrlShortenerController;
