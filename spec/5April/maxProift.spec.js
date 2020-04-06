const maxProfit = require('../../src/5April/maxPorfit');

describe('Best time to buy and sell ||', () => {
    it('[7,1,5,3,6,4] should have a max profit of 8', () => {
        expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
    });
});
