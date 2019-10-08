const axios = require('axios');
const httpContext = require('express-http-context');

/**
 * Configure Axios interceptors to log useful information
 * @param header
 * @param uniqueIdName
 */
configAxios = (header, uniqueIdName = 'unique-id-header') => {
    axios.interceptors.request.use(function(config) {
        // logger.info(`HTTP CALL ${config.method.toUpperCase()} ${config.url}`);
        config.time = Date.now();
        config.headers = {
            ...config.headers,
            [header]: httpContext.get(uniqueIdName)
        };
        return config;
    });
    axios.interceptors.response.use(function(response) {
        const config = response.config;
        const totalTime = Date.now() - config.time;
        logger.debug(`HTTP CALL ${config.method.toUpperCase()} ${config.url} ${totalTime}`);
        return response;
    }, (error) => {
        const config = error.config;
        const totalTime = Date.now() - config.time;
        logger.error(`HTTP CALL ${config.method.toUpperCase()} ${config.url} ${totalTime}`, error.stack);
        return Promise.reject(error);
    });
}

module.exports = configAxios;
