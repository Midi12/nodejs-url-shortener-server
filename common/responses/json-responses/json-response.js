const BaseResponse = require('../base-response');

class JsonResponse extends BaseResponse {
	constructor(response, code, data, shouldSend = true) {
		super(response, code, data);
		if (shouldSend) {
			this.send();
		}
	}

	send() {
		return this.response.status(this.code).json(this.data);
	}
}

module.exports = JsonResponse;
