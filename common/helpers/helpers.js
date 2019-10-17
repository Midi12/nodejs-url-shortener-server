const ValidUrl = require('valid-url');

const JsonBadRequestResponse = require('../responses/json-responses/json-client-error-responses/json-bad-request-response');
const JsonInternalErrorResponse = require('../responses/json-responses/json-server-error-responses/json-internal-error-response');

const BadRequestError = require('../errors/bad-request-error');
const InternalError = require('../errors/internal-error');

function handleExpectionResponse(res, err) {
	let Instance = null;

	switch (err.constructor) {
		case BadRequestError:
			Instance = JsonBadRequestResponse;
			break;
		case InternalError:
		default:
			Instance = JsonInternalErrorResponse;
			break;
	}

	return new Instance(res, err);
}

function isValidUrl(url) {
	return ValidUrl.isWebUri(url);
}

module.exports.handleExpectionResponse = handleExpectionResponse;
module.exports.isValidUrl = isValidUrl;
