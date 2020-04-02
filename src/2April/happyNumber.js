/**
 *
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay),
 * or it loops endlessly in a cycle which does not include 1.
 *
 * Example:
 * Input: 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 * Those numbers for which this process ends in 1 are happy numbers.
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let result = n;
    let result_history = new Set();
    do {
        result_history.add(result);
        result = splitAndMultiply(result);
    } while (result !== 1 && !result_history.has(result) && !isNaN(result));
    return result === 1 || !result_history.has(result);
};

const splitAndMultiply = (number) => {
    let sum = 0;
    while (number !== 0) {
        sum += Math.pow(number % 10, 2);
        number = Math.trunc(number / 10);
    }
    return sum;
};

module.exports = isHappy;
