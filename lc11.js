/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    area = 0,
    res = 0;
  while (l < r) {
    area = Math.max(area, (r - l) * Math.min(height[l], height[r]));
    if (height[l] > height[r]) {
      r = r - 1;
    } else {
      l = l + 1;
    }
  }
  return area;
};
