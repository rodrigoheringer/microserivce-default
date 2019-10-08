const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const environment = require('./environment/environment');
const { createDefaultApi } = require('./default/default-api');
const enableApiDocs = require('./default/api-docs');
const configureLogger = require('./default/log/configure-logger');
const { errorHandler } = require('./util/error-handler');

const createServer = ({ package, defaultRouter, defaultRouterPath }) => {
    enableApiDocs({server, package});
    server.use(bodyParser.json());
    configureLogger(server, environment.TRACE_HEADER, environment.TRACE_UNIQUE_HEADER_ID, environment.LOG_LEVEL);
    server.use(environment.DEFAULT_INFO_ROUTE, createDefaultApi({ package }));
    server.use(`/${defaultRouterPath || package.name}`, defaultRouter);
    server.use(errorHandler);
    server.listen(environment.API_PORT, undefined, () => {
        console.log(`listening on port ${environment.API_PORT}`);
    });
    return server;
};

module.exports = { createServer };
