const JsonResponse = require('../json-response');

class JsonOkResponse extends JsonResponse {
	constructor(response, data) {
		super(response, 200, data);
	}
}

module.exports = JsonOkResponse;
