const groupedAnagrams = require('../../src/6April/groupAnagrams');


describe('Given an array of strings, group anagrams together.', () => {
    it('["eat", "tea", "tan", "ate", "nat", "bat"] should equal [["ate","eat","tea"],["nat","tan"],["bat"]]', () => {
        const anagrams = groupedAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
        expect(anagrams[0].length).toEqual(3);
        expect(anagrams[1].length).toEqual(2);
        expect(anagrams[2].length).toEqual(1);
    });
});

