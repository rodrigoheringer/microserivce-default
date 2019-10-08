const CustomError = require('./custom-error');
const Messages = require('./messages');

/**
 * Transforma numeros para inteiro
 * @param {number} number Numéro transformado
 * @throws invalid number
 */
function transformInteger(number) {
    if (!isFinite(number) || !number) throw new CustomError(Messages.database.badRequest.message,
            Messages.database.badRequest.code);
    return parseInt(number);
}

module.exports = {
    transformInteger
};