const ObjectUtils = require('./object-utils');

describe('Object Utils Test Case', () => {
    
    describe('missing Keys', () => {
        it('Should return the missing keys', function () {
            const result = ObjectUtils.missingKeys({
                teste: 1,
                teste2: 2
            }, ['teste1', 'teste2']);
            expect(result).toEqual(['teste1']);
        });
    });

    describe('transformToArray', () => {
        it('should transform correctly', function () {
            const a = ObjectUtils.transformToArray("1");
            expect(a).toEqual([1]);
        });
    });
});