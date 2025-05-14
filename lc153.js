/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let res = nums[0];
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    m = l + r; //2;
    res = Math.min(res, nums[m]);
    if (nums[m] > nums[l]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return res;
};
