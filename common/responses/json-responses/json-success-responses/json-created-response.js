const JsonResponse = require('../json-response');

class JsonCreatedResponse extends JsonResponse {
	constructor(response, data) {
		super(response, 201, data);
	}
}

module.exports = JsonCreatedResponse;
