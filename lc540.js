/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 1;
  let h = nums.length - 2;
  if (nums[1] != nums[0]) {
    return nums[0];
  }
  if (nums[h] != nums[h + 1]) {
    return nums[h + 1];
  }
  while (l <= h) {
    let m = Math.floor((l + h) / 2);
    if (nums[m] != nums[m - 1] && nums[m] != nums[m + 1]) {
      return nums[m];
    } else if (
      (m % 2 == 1 && nums[m] == nums[m - 1]) ||
      (m % 2 == 0 && nums[m] == nums[m + 1])
    ) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
};
