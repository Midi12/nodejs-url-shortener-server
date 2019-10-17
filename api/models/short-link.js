const cuid = require('cuid');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const helpers = require('../../common/helpers/helpers');

const shortLinkSchema = new Schema({

	longURL: {
		type: Schema.Types.String,
		required: true,
		validate: {
			validator: (value) => helpers.isValidUrl(value)
		}
	},

	slug: {
		type: Schema.Types.String,
		default: cuid.slug,
		required: true,
		unique: true,
		index: true,
		validate: {
			validator: (value) => cuid.isSlug(value)
		}
	},

	createdAt: {
		type: Schema.Types.Date,
		default: Date.now,
		required: true
	},

	deletedAt: {
		type: Schema.Types.Date
	}

}, { collection: 'shortLinks' });

shortLinkSchema.set('toObject', { virtuals: true });
shortLinkSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ShortLink', shortLinkSchema);
