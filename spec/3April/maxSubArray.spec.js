const maxSubArray = require('../../src/3April/maxSubArray');

describe('Maximum Sub Array test', function () {
    it('[-2,1,-3,4,-1,2,1,-5,4] should return 6, because of [4,-1,2,1]', function () {
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });
    it('[1,2] should return 3', function () {
        expect(maxSubArray([1,2])).toEqual(3);
    })
});