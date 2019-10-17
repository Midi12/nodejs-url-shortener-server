const NotImplementedError = require('../../common/errors/not-implemented-error');

class BaseResponse {
	constructor(response, code, data) {
		this.response = response;
		this.code = code;
		this.data = data;
	}

	/* eslint-disable class-methods-use-this */
	send() {
		throw new NotImplementedError('You should override this method');
	}
	/* eslint-disable class-methods-use-this */
}

module.exports = BaseResponse;
