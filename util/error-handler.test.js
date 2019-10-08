const customError = require('./custom-error');
const errorHanlder = require('./error-handler');

describe('Error Handler Test Case', () => {
    describe('asyncHolder Test Case', () => {
        it('Must wrap on a promise', async () => {
            const fn = jest.fn((req, res) => {
                return true;
            });
            const wrappedFunction = errorHanlder.asyncHolder(fn);
            await wrappedFunction();
            expect(fn).toHaveBeenCalled();
        });

        it('Must call error on throw', async () => {
            const error = new Error('derp');
            const fn = jest.fn((req, res) => {
                throw error;
            });
            const errorFn = jest.fn((error) => {

            });
            const wrappedFunction = errorHanlder.asyncHolder(fn);
            await wrappedFunction(undefined, undefined, errorFn);
            expect(errorFn).toHaveBeenCalledWith(error);
        });
    });

    describe('errorHandler Test Case', () => {
        it('Must return the unknown error', async () => {
            const res = {
                json: jest.fn()
            };
            res.status = jest.fn().mockReturnValue(res);
            global.logger = {
                error: jest.fn()
            };
            errorHanlder.errorHandler(new Error(1), undefined, res);
            expect(res.json).toHaveBeenCalledWith({
                msg: 'Bad Implementation/Unknown Error'
            });
            expect(global.logger.error).toHaveBeenCalled();
        });

        it('Must must call with custom error', async () => {
            const res = {
                json: jest.fn()
            };
            res.status = jest.fn().mockReturnValue(res);
            global.logger = {
                error: jest.fn()
            };

            errorHanlder.errorHandler(new customError('derp', 400), undefined, res);
            expect(res.json).toHaveBeenCalledWith({
                msg: 'derp'
            });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(global.logger.error).toHaveBeenCalled();
        });
    });
});