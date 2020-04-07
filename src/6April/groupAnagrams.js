/**
 * Given an array of strings, group anagrams together.
 *
 * Example
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 *
 * Output:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    let words = new Map();
    strs.forEach(word => {
        const sortedWord = sortLetters(word);
        const elements = words.has(sortedWord) ? words.get(sortedWord) : [];
        words.set(sortedWord, [...elements, word]);
    });
    return Array.from(words.values());
};

/**
 * Sort the word letters
 * @param {string} word
 * @return {string}
 */
const sortLetters = (word) => {
    return word.split('').sort().join('');
};

module.exports = groupAnagrams;
