const NumberLib = require('./number');

describe('Number Test Case', () => {

    it.each(['10a', 'a10', 'aaa', '1a1', 'a1a', '--', '!', ''])
        ('used value %s, must throw', (value) => {
            expect(() => {
                NumberLib.transformInteger(value);
            }).toThrow();
        });

    it.each([[1,1], ['1', 1], [2, 2], ['001', 1]])('used value %s, must be %i', (value, expected) => {
        expect(NumberLib.transformInteger(value)).toEqual(expected);
    });
});