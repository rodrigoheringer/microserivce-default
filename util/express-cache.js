class ExpressCache {

    /**
     * Método que seta automaticamente as configurações de cache retornadas ao client
     * @param {string[]} options Opções relacionadas ao cache
     */
    static setCacheHeaders(options = []) {
        return (req, res, next) => {
            if (options && options.length) {
                res.set('Cache-Control', options.join(', '));   
            }
            next();
        };
    }
}

module.exports = ExpressCache;