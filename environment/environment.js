const {parseEnv} = require('../utils/environment-handler');

const env = {
    API_PORT: 3000,
	CASSANDRA_IP: ["10.151.91.14"],
	CASSANDRA_LOCAL_DATACENTER: 'BVS_CLOUD_IBM_DEV',
	CASSANDRA_KEYSPACE: 'cpos_pcons',
	LOG_LEVEL: 'warn',
	TRACE_HEADER: 'x-unique-request-id',
	TRACE_UNIQUE_HEADER_ID: 'xUniqueRequestId'
};

module.exports = parseEnv(env);
