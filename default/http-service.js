const fetch = require('node-fetch');
const httpContext = require('express-http-context');
const http = require('http');
const env = require('../../environment');

class HttpService {

    static setConfig(header, uniqueId) {
        this.header = header;
        this.uniqueId = uniqueId;
    }

    static fetch(url = '', options = {}) {
        return fetch(url, this.setHeader(options));
    }

    static setHeader(options) {
        options.headers = {
            agent: this.agent,
            ...options.headers,
            [this.header]: httpContext.get(this.uniqueId)
        };
        return options;
    }
}

// TODO when updated, set to static on methods
HttpService.header = 'header';
HttpService.uniqueId = 'uniqueId';
HttpService.agent = new http.Agent({ keepAlive: env.KEEP_ALIVE, maxSockets: env.MAX_HTTP_SOCKETS, keepAliveMsecs: env.KEEP_ALIVE_MS });

module.exports = HttpService;
