// 268. Missing Number
let nums = [3, 0, 1]; //2

function missingNumber(nums) {
  // First Approach
  //   nums.sort((a, b) => a - b);
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== i) return i;
  //   }

  // Second Approach => using set
  let set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i)) return i;
  }
}

console.log(missingNumber(nums));
