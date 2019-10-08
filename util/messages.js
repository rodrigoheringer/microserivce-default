module.exports = {
    database: {
        badRequest: {
            message: 'invalid parameters',
            code: 400
        },
        notFound: {
            message: 'document not found',
            code: 404
        }
    },
    internalServerError: {
         code: 500,
         message: 'internal server error',
    }
}