/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let arr = nums.concat(nums);
  let l = 1;
  while (nums[l] >= nums[l - 1]) {
    l = l + 1;
  }
  h = l + nums.length - 1;
  while (l <= h) {
    m = Math.floor((l + h) / 2);
    if (arr[m] == target) {
      return true;
    } else if (target > arr[m]) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return false;
};
