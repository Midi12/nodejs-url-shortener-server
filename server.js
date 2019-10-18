const Express = require('express');
const BodyParser = require('body-parser');

const Mongo = require('./mongo');
const ApiRouter = require('./api/routes/api-router');

const app = Express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(`/api/${process.env.API_VERSION}`, ApiRouter.getRoutes());

global.gMongo = new Mongo(process.env.DB_CONNECTION_STRING);
global.gMongo.Start();

module.exports = app;
