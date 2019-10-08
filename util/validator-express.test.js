const objectUtils = require('./object-utils');
objectUtils.missingKeys = jest.fn();

const validatorExpress = require('./validator-express');

describe('Validator Express Test Case', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('errorIfEmpty ', () => {
        it('should call json', function () {
            const result = {};
            const res = {
                json: jest.fn()
            };
            validatorExpress.errorIfEmpty(result, res);
            expect(res.json).toHaveBeenCalledWith(result);
        });

        it('should return error', function () {
            const res = {
                json: jest.fn(),
                status: jest.fn()
            };
            res.status.mockReturnValue(res);
            validatorExpress.errorIfEmpty(undefined, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({
                msg: 'Not found'
            });
        });
    });

    describe('testRequest', () => {
        it('should call next', function () {
            objectUtils.missingKeys.mockReturnValue([]);
            const req = {
                query: 1
            };
            const next = jest.fn();
            const keys = [1];
            validatorExpress.testRequest(keys)(req, undefined, next);
            expect(next).toHaveBeenCalled();
            expect(objectUtils.missingKeys).toHaveBeenCalledWith(req.query, keys);
        });

        it('should return error', function () {
            const missingKeysReturn = ['1'];
            objectUtils.missingKeys.mockReturnValue(missingKeysReturn);
            const req = {
                query: 1
            };
            const next = jest.fn();
            const keys = [1];
            const res = {
                status: jest.fn(),
                json: jest.fn()
            };
            res.status.mockReturnValue(res);
            validatorExpress.testRequest(keys)(req, res, next);
            expect(next).not.toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                msg: `Missing keys: ${missingKeysReturn}`
            });
        });
    });
});