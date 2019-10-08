const CustomError = require('./custom-error');

function errorHandler(err, req, res, next) {
    logger.error(err.stack);
    if (err instanceof CustomError) {
        return res.status(err.status).json({
            msg: err.message
        });
    }
    return res.status(500).json({
        msg: 'Bad Implementation/Unknown Error'
    });
}

function asyncHolder(cb) {
    return async function (req, res, next) {
        try {
            await cb(req, res);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = {
    errorHandler,
    asyncHolder
};