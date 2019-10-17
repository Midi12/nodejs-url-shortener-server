const cuid = require('cuid');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const errorSchema = new Schema({

	message: {
		type: Schema.Types.String,
		required: true,
		validate: {
			validator: (value) => value != null && value !== ''
		}
	},

	name: {
		type: Schema.Types.String,
		required: true,
		validate: {
			validator: (value) => value != null && value !== ''
		}
	},

	code: {
		type: Schema.Types.String,
		required: true,
		validate: {
			validator: (value) => value != null && value !== ''
		}
	},

	stack: {
		type: Schema.Types.String,
		required: true,
		validate: {
			validator: (value) => value != null && value !== ''
		}
	},

	statusCode: {
		type: Schema.Types.Number,
		required: true,
		validate: {
			validator: (value) => !Number.isNaN(value) && value > 0
		}
	},

	requestId: {
		type: Schema.Types.String,
		required: true,
		validate: {
			validator: (value) => cuid.isCuid(value)
		}
	},

	createdAt: {
		type: Schema.Types.Date,
		default: Date.now
	},

	deletedAt: {
		type: Schema.Types.Date
	}

}, { collection: 'errors' });

errorSchema.set('toObject', { virtuals: true });
errorSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Error', errorSchema);
