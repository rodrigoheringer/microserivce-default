const sortProperty = require('./sort-property');

describe('Sort Property test', () => {
    it('Test if array is returned sorted by property', () => {

        const incomingArray = [{
                obj: 5
            },
            {
                obj: 3
            }, {
                obj: 6
            }
        ]
        const result = sortProperty.sortArr(incomingArray, 'obj');

        expect(result).toEqual([{
                obj: 6
            },
            {
                obj: 5
            }, {
                obj: 3
            }
        ])
    });
});