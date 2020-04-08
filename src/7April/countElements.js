/**
 *
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 *
 * If there're duplicates in arr, count them seperately.
 *
 * Example 1:
 *
 * Input: arr = [1,2,3]
 * Output: 2
 * Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
 *
 * @param {number[]} arr
 * @return {number}
 */
const countElements = (arr) => {
    const set = new Set(arr);
    return arr.filter(value => set.has(value + 1)).length;
};


module.exports = countElements;
