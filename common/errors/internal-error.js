const BaseError = require('./base-error');

module.exports = class InternalError extends BaseError {
	constructor(message) {
		// Calling parent constructor of base class.
		super(message || 'Internal Error', 500, 'Internal', 'InternalError');
	}
};
