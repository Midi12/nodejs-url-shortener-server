const JsonResponse = require('../json-response');

class JsonNotFoundResponse extends JsonResponse {
	constructor(response) {
		super(response, 404, 'Not found');
	}
}

module.exports = JsonNotFoundResponse;
