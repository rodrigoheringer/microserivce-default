const {
    missingKeys
} = require('./object-utils');

class ValidatorExpress {

    /**
     * Valida que a request possuí as chaves na requisição
     * @param {string[]} keys Array com as chaves que devem existir na query
     */
    static testRequest(keys) {
        return function (req, res, next) {
            const missingKeysArray = missingKeys(req.query, keys);
            if (missingKeysArray.length === 0) return next();
            res.status(400).json({
                msg: `Missing keys: ${missingKeysArray}`
            });
        };
    }
    
    /**
     * Função de erro padrão que retorna 404 quando o objeto estiver em branco
     * @param {object} result Objeto que não pode ser nulo
     * @param {object} res Objeto de response de express
     */
    static errorIfEmpty(result, res) {
        if (result) {
            return res.json(result);
        }
        return res.status(404).json({
            msg: 'Not found'
        });
    }
}

module.exports = ValidatorExpress;