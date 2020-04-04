/**
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    return maximumSubArray(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} elements
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const maximumSubArray = (elements, low, high) => {
    if (high === low)
        return elements[low];

    let middle = Math.floor((low + high) / 2);
    let maximumSubArrayLeft = maximumSubArray(elements, low, middle);
    let maximumSubArrayRight = maximumSubArray(elements, middle + 1, high);
    let maximumCrossingSubArray = maximumCrossingArray(elements, low, middle, high);

    return Math.max(
        maximumSubArrayLeft,
        maximumSubArrayRight,
        maximumCrossingSubArray
    );
};

/**
 *
 * @param {number[]} elements
 * @param {number} low
 * @param {number} middle
 * @param {number} high
 * @return number
 */
const maximumCrossingArray = (elements, low, middle, high) => {
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    let sum = 0;
    let index;
    for (index = middle; index >= low; index--) {
        if (sum + elements[index] >= leftSum) {
            leftSum = sum + elements[index];
        }
        sum += elements[index];
    }
    sum = 0;
    for (index = middle + 1; index <= high; index += 1) {
        if (sum + elements[index] >= rightSum) {
            rightSum = sum + elements[index];
        }
        sum += elements[index];
    }
    return leftSum + rightSum;
};

module.exports = maxSubArray;