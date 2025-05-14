/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let res = new Array();
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix = prefix * nums[i];
  }
  let postfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix;
    postfix = postfix * nums[j];
  }
  return res;
};
