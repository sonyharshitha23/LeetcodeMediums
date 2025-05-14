/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var calcTotal = function (arr, hours) {
  let n = arr.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    total = total + Math.ceil(arr[i] / hours);
  }
  return total;
};
var minEatingSpeed = function (piles, h) {
  let l = 1;
  let r = Math.max(...piles);

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    totalH = calcTotal(piles, m);
    if (totalH <= h) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};
