/*找出两个数组中的重复元素。
深入思考： 1.优化时间复杂度 2.优化空间复杂度 3.如果一个数组比另一个数组长很多怎么改？
 */
function findDuplicates(nums1, nums2) {
  // 去除重复添加的元素
  const ans = new Set();
  if (nums1.length === 0 || nums2.length === 0) return [];
  for (let num1 of nums1) {
    for (let num2 of nums2) {
      if (num1 === num2) {
        ans.add(num1);
      }
    }
  }
  return Array.from(ans);
}
function findDuplicates(nums1, nums2) {
  const ans = new Set();
  if (nums1.length === 0 || nums2.length === 0) return [];
  const nums1Set = new Set(nums1);
  for (let num2 of nums2) {
    if (nums1Set.has(num2)) {
      ans.add(num2);
    }
  }
  return Array.from(ans);
}
//时间复杂度为O(n+m)

function findDuplicates(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const ans = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
}
