/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let f = -1;
  let las = -1;

  var first = function (nums, target) {
    let l = 0;
    let h = nums.length - 1;

    while (l <= h) {
      let m = Math.floor((l + h) / 2);
      if (nums[m] == target) {
        f = m;
        h = m - 1;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return f;
  };
  var last = function (nums, target) {
    let l = 0;
    let h = nums.length - 1;
    while (l <= h) {
      let m = Math.floor((l + h) / 2);
      if (nums[m] == target) {
        las = m;
        l = m + 1;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return las;
  };
  f = first(nums, target);
  last = last(nums, target);
  return [f, las];
};
