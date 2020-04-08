const countElements = require('../../src/7April/countElements');

describe('Given an integer array arr, count element x such that x + 1 is also in arr.', function() {
    it('[1,2,3] should return 2', () => {
        expect(countElements([1,2,3])).toEqual(2);
    });
});
