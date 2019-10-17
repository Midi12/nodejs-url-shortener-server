const JsonResponse = require('../json-response');

class JsonInternalErrorResponse extends JsonResponse {
	constructor(response, data) {
		super(response, 500, data);
	}
}

module.exports = JsonInternalErrorResponse;
