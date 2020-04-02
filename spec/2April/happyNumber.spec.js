const happyNumber = require('../../src/2April/happyNumber.js');

describe('Happy Numbers test', function() {
    it('19 should be a happy number', function() {
        expect(happyNumber(19)).toEqual(true);
    });
    it('7 should be a happy number', function () {
        expect(happyNumber(7)).toEqual(true);
    });
    it('1 should be a happy number', function () {
        expect(happyNumber(1)).toEqual(true);
    });
    it('78 should not be a happy number', function () {
        expect(happyNumber(78)).toEqual(false);
    })
});
