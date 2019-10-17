const JsonResponse = require('../json-response');

class JsonBadRequestResponse extends JsonResponse {
	constructor(response, data) {
		super(response, 400, data);
	}
}

module.exports = JsonBadRequestResponse;
