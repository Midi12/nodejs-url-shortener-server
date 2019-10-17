const JsonResponse = require('../json-response');

class JsonMovedPermanentlyResponse extends JsonResponse {
	constructor(response, data) {
		const payload = typeof data === 'string' ? { url: data } : data;

		super(response, 301, payload, false);
		this.send();
	}

	send() {
		this.response.set('location', this.data.url);
		this.response.status(this.code).send();
	}
}

module.exports = JsonMovedPermanentlyResponse;
