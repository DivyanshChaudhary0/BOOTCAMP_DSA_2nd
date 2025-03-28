
// 1365. How Many Numbers Are Smaller Than the Current Number

let nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
let ans = [];

// First Approach
for(let i=0;i<nums.length;i++){
    let count = 0;
    for(j=0;j<nums.length;j++){
        if(nums[i]>nums[j]){
            count++;
        }
    }
    ans.push(count)
}
console.log(ans);


// Second Approach
