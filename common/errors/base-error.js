const cuid = require('cuid');

const ErrorService = require('../../api/services/error.service');

class BaseError {
	constructor(message, status, code, name) {
		this.message = message || 'BaseError';
		this.name = name || this.constructor.name;
		this.code = code || this.name;

		// Capturing stack trace, excluding constructor call from it
		Error.captureStackTrace(this, this.constructor);

		this.statusCode = status || 500;
		this.requestId = cuid();

		// async save to database
		const errorService = new ErrorService();
		if (errorService != null) {
			errorService.save(this).then();
		}
	}
}

module.exports = BaseError;
