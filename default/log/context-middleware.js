const httpContext = require('express-http-context');
const uuid = require('uuid');

class ContextMiddleware {

    /**
     * create a middleware function for extracting/creating a unique id
     * and setting on the http context
     * @param header
     * @param uniqueIdName
     * @returns {Function}
     */
    static forHeader(header, uniqueIdName = 'unique-id-header') {
        return function (req, res, next) {
            const extractedHeader = req.headers[header] || uuid.v1();
            res.setHeader(header, extractedHeader);
            httpContext.set(uniqueIdName, extractedHeader);
            next();
        }
    }
}

module.exports = ContextMiddleware;