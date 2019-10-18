const mongoose = require('mongoose');

const MongoOptions = {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
};

class Mongo {
	constructor(cs) {
		this.connectionString = cs;
		this.started = false;
	}

	Start() {
		mongoose.connect(this.connectionString, MongoOptions, (err) => {
			if (err) {
				throw Error(`Failed to connect to ${this.connectionString} : ${err.message}`);
			}

			console.log(`Connected to ${this.connectionString}`);
			this.started = true;
		});
	}

	Stop() {
		mongoose.disconnect((err) => {
			if (err) {
				throw Error(`Failed to disconnect from ${this.connectionString} : ${err.message}`);
			}

			console.log(`Disconnected from ${this.connectionString}`);
			this.started = false;
		});
	}
}

module.exports = Mongo;
module.exports.MongoOptions = MongoOptions;
