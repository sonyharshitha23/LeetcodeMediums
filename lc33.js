/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // let l=0;r=nums.length-1;
  // let m=0;
  // while(l<=r){
  //     m=Math.floor((l+r)/2);
  //     if(nums[m]==target){
  //         return m;
  //     }
  //     if(nums[m]>=nums[l]){
  //         if(nums[m]<target || nums[l]>target){
  //             l=m+1;
  //         }
  //         else{
  //             r=m-1;
  //         }
  //     }
  //     else{
  //         if(nums[m]>target || nums[r]<target){
  //             r=m-1;
  //         }
  //         else{
  //             l=m+1;
  //         }
  //     }

  // }
  // return -1;
  let arr = nums.concat(nums);
  let l = 1;
  if (nums.length == 1) {
    if (nums[0] == target) {
      return 0;
    }
  }
  while (nums[l] >= nums[l - 1] && l <= nums.length - 1) {
    l = l + 1;
  }
  h = l + nums.length - 1;
  while (l <= h) {
    m = Math.floor((l + h) / 2);
    if (arr[m] == target) {
      return m;
    } else if (target > arr[m]) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
};
