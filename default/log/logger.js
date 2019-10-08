const context = require('express-http-context');
const loglevel = require('loglevel');
class Logger {

    /**
     * Used to global application log level
     * @param level
     */
    static setLogLevel(level = 'trace') {
        loglevel.setLevel(level);
    }

    /**
     * Set context unique id to be used on logs
     * @param uniqueIdHeader
     */
    static setUniqueIdHeaderName(uniqueIdHeader) {
        this.uniqueIdHeader = uniqueIdHeader;
    }

    static log(...msg) {
        loglevel.log(this.formatMsg(msg));
    }

    static error(...msg) {
        loglevel.error(this.formatMsg(msg, 'ERROR'));
    }

    static warn(...msg) {
        loglevel.warn(this.formatMsg(msg, 'WARN'));
    }

    static info(...msg) {
        loglevel.info(this.formatMsg(msg, 'INFO'));
    }

    static debug(...msg) {
        loglevel.debug(this.formatMsg(msg, 'DEBUG'));
    }

    static trace(...msg) {
        loglevel.trace(this.formatMsg(msg, 'TRACE'));
    }

    static formatMsg(msg= [''], level = 'LOG') {
        const id = context.get(this.uniqueIdHeader);
        const s = msg.join(' ');
        return `LEVEL: ${level} ID: ${id} MSG: ${s}`;
    }
}

module.exports = Logger;