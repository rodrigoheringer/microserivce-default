const Grouping = require('./grouping');

const array = [{
    t1: 1,
    t2: 2
}, {
    t1: 2,
    t2: 2
}];

describe('Grouping Test Case', () => {
    it('should group right for the first param', function () {
        const result = Grouping.groupBy(array, 't1');
        expect(result).toEqual({
            1: [array[0]],
            2: [array[1]]
        });
    });

    it('should group rgiht for the second param', function () {
        const result = Grouping.groupBy(array, 't2');
        expect(result).toEqual({
            2: [array[0], array[1]]
        });
    });
});