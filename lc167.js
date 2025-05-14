/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  let res = [];
  while (l < r) {
    if (numbers[l] + numbers[r] > target) {
      r = r - 1;
    } else if (numbers[l] + numbers[r] < target) {
      l = l + 1;
    } else {
      res.push(l + 1, r + 1);
      return res;
    }
  }
};
