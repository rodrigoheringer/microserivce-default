class EnvironmentHandler {
    static getEnv(env, defaultValue) {
        const envValue = process.env[env];
        if (!envValue) return defaultValue;
        try {
            return JSON.parse(envValue);
        } catch (e) {
            return envValue;
        }
    }

    static parseEnv(obj) {
        return Object.entries(obj).reduce((all, curr) => {
            all[curr[0]] = EnvironmentHandler.getEnv(curr[0], curr[1]);
            return all;
        }, {});
    }
}

module.exports = EnvironmentHandler;
