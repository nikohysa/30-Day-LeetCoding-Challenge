let moveZeros = require('../../src/4April/moveZeros');

describe('Move zeros to the end of the array', function () {
    it('[0,1,0,3,12] should become [0,1,0,3,12]', function () {
        let items = [0, 1, 0, 3, 12];
        moveZeros(items);
        console.log(items);
        expect(items[0]).toEqual(1);
        expect(items[1]).toEqual(3);
        expect(items[2]).toEqual(12);
        expect(items[3]).toEqual(0);
        expect(items[4]).toEqual(0);
    });
});