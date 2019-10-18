const Error = require('../models/errors');

class ErrorService {
	constructor() {}

	/* eslint-disable class-methods-use-this */
	async save(err) {
		const error = new Error({
			message: err.message,
			name: err.name,
			code: err.code,
			stack: err.stack,
			statusCode: err.statusCode,
			requestId: err.requestId
		});

		await error.save();
	}
	/* eslint-disable class-methods-use-this */
}

module.exports = ErrorService;
