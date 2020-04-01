const singleNumber = require('./singleNumber.js');

describe('Single Number tests', function() {
    it('[1,2,3,3,2] should return 1', function () {
        expect(singleNumber([1,2,3,3,2])).toEqual(1);
    });
    it('[2,5,1,2,7,1,7] should return 5', function() {
        expect(singleNumber([2,5,1,2,7,1,7])).toEqual(5);
    })
})