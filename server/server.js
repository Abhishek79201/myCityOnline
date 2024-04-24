require('module-alias/register');
const httpContext = require('express-http-context');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('logger');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const config = require('../config');

const app = express();

app.use(httpContext.middleware);
app.use((req, res, next) => {
  httpContext.set('requestID', uuidv4());
  next();
});

// need to whilelist
app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '1mb' }));
const router = require('./routes');

app.use('/', router);

const PORT = process.env.PORT || config.server.port;
app.listen(PORT, () => {
  logger.info(`Server listening on Port ${PORT}`);
});
