const {updateEnvValues: parseEnv} = require('../util/environment-handler');

const env = {
    API_PORT: 3000,
	LOG_LEVEL: 'warn',
	TRACE_HEADER: 'x-unique-request-id',
    TRACE_UNIQUE_HEADER_ID: 'xUniqueRequestId',
    DEFAULT_INFO_ROUTE: 'info'
};

parseEnv(env);

module.exports = env;
