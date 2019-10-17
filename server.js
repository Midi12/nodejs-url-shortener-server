const Express = require('express');
const BodyParser = require('body-parser');

const Mongo = require('./mongo');
const router = require('./api/routes/router');

const app = Express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(`/api/${process.env.API_VERSION}`, router());

global.gMongo = new Mongo(process.env.DB_CONNECTION_STRING);
global.gMongo.Start();

module.exports = app;
