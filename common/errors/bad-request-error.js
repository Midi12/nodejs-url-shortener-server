const BaseError = require('./base-error');

module.exports = class BadRequestError extends BaseError {
	constructor(message) {
		// Calling parent constructor of base class.
		super(message || 'Bad Request', 400, 'BadRequest', 'BadRequestError');
	}
};
