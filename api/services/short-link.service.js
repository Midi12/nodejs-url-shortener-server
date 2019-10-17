const ShortLink = require('../models/short-link');

class ShortLinkService {
	constructor() {}

	/* eslint-disable class-methods-use-this */
	async get(slug) {
		const shortLink = await ShortLink.findOne({ slug });
		return shortLink;
	}
	/* eslint-disable class-methods-use-this */

	/* eslint-disable class-methods-use-this */
	async save(url) {
		let shortLink = new ShortLink({
			longURL: url
		});

		shortLink = await shortLink.save();

		return shortLink;
	}
	/* eslint-disable class-methods-use-this */
}

module.exports = ShortLinkService;
