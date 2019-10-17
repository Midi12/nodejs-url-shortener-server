const BaseError = require('./base-error');

class NotImplementedError extends BaseError {
	constructor(message) {
		// Calling parent constructor of base class.
		super(message || 'Not implemented', 204, 'NotImplemented', 'NotImplementedError');
	}
}

module.exports = NotImplementedError;
