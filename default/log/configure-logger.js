const logger = require('./logger');
const httpContext = require('express-http-context');
const contextMiddleware = require('./context-middleware');
const morgan = require('morgan');

module.exports = (server, headerName, uniqueIdHeader, loglevel = 'TRACE') => {
    morgan.token(uniqueIdHeader, () => {
        return httpContext.get(uniqueIdHeader);
    });
    server.use(httpContext.middleware);
    server.use(contextMiddleware.forHeader(headerName, uniqueIdHeader));
    server.use(morgan(`LEVEL: INFO ID: :${uniqueIdHeader} MSG: :method :url :status :res[content-length] - :response-time ms`));
    logger.setUniqueIdHeaderName(uniqueIdHeader);
    logger.setLogLevel(loglevel);
    global['logger'] = logger;
};
