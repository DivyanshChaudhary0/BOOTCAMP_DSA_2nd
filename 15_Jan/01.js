// array frequency by map

// let arr = [2,1,2,3,1,1,2,2,3,5,6,7,6];
// let map = new Map();

// ------- first method --------
// for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }
//     else{
//         map.set(arr[i],1)
//     }
// }

// ---------- second method ------------
// for(let i=0;i<arr.length;i++){
//     map.set(arr[i],(map.get(arr[i]) || 0)+1);
// }

// for(let key of map.keys()){
//     console.log(key + " => " + map.get(key));
// }

// console.log(map);

// --------- find the unique elements ------------
// let arr2 = [2,4,2,1,5,4,6,7,6,4,6]
// ------- first method ------------
// let map2 = new Map();

// for(let i=0;i<arr2.length;i++){
//     if(map2.has(arr2[i])){
//         map2.set(arr2[i],map2.get(arr2[i])+1);
//     }
//     else{
//         map2.set(arr2[i],1);
//     }
// }
// console.log(map2);

// for(let a of map2.keys()){
//     if(map2.get(a) === 1){
//         console.log(a);
//     }
// }

// ------- second method ------------
// let unique = {};
// for(let i=0;i<arr2.length;i++){
//     unique[arr2[i]] = unique[arr2[i]] + 1 || 1;
// }
// console.log(unique);
// for(let key in unique){
//     if(unique[key] === 1) console.log(key);
// }

// let s = 'dog cat cat dog'
// s = s.split(" ");
// console.log(s);

// let morse = [
//   ".-",
//   "-...",
//   "-.-.",
//   "-..",
//   ".",
//   "..-.",
//   "--.",
//   "....",
//   "..",
//   ".---",
//   "-.-",
//   ".-..",
//   "--",
//   "-.",
//   "---",
//   ".--.",
//   "--.-",
//   ".-.",
//   "...",
//   "-",
//   "..-",
//   "...-",
//   ".--",
//   "-..-",
//   "-.--",
//   "--..",
// ];

// let word = "mary";
// let res = "";

// for(let i=0;i<word.length;i++){
    // console.log(word[i].charCodeAt() - 97);
    // console.log(morse[word[i].charCodeAt() - 97]);
    // res += morse[word[i].charCodeAt() - 97]
// }

// console.log(res);

// let s = "abbba";
// let set = new Set(s);
// console.log(set.size);


var mostFrequentEven = function(nums) {
  let map = new Map();
  let keys = [];
  let freq = [];
  for(let i=0; i<nums.length; i++){
      if(map.has(nums[i])){
          map.set(nums[i],map.get(nums[i])+1);
      }
      else map.set(nums[i],1)
  }

  for(let key of map.keys()){
      if(key % 2 === 0){
          keys.push(key);
          freq.push(map.get(key));
      }
  }
  if(keys.length === 0) return -1;
  let max = -1;
  let idx = 0;
  for(let i=0;i<freq.length;i++){
      if(max < freq[i]){
        max = freq[i];
        idx = i;
      }
  }
  return keys[idx]
};

console.log(mostFrequentEven([1, 2, 3, 2, 3, 4, 5, 6, 5, 6]));

// let arr = [1,1,2,3,4,4,5];

// arr = [...new Set(arr)];
// console.log(arr);
// leetcode 2210 hills & valleys
function hillsAndValleys(nums){
    let count=0;
    nums = [...new Set(nums)];
    for(let i=1;i<nums.length-1;i++){
        if(nums[i]>nums[i+1] && nums[i]>nums[i-1]) count++;
        else if(nums[i]<nums[i+1] && nums[i]<nums[i-1]) count++;
    }
    return count;
}
console.log(hillsAndValleys([2,4,1,1,6,5]));
console.log(hillsAndValleys([6,6,5,5,4,1]));

// let nums = [5,7,7,1,7];
// for(let i=0;i<nums.length;i++){
//     if(nums[i]==nums[i+1]){
//         nums.splice(i,1);
//     }
// }
// console.log(arr);

// let colors = [1,1,1,6,1,1,1];
// let colors = [0,1];
let colors = [1, 8, 3, 8, 3];

function maxDistance(colors){
    if(colors.length>2){
        let max = 0,count = 0;
        for(let i=0;i<colors.length-1;i++){
            for(let j=i+1;j<colors.length;j++){
                if(colors[i] !== colors[j])
                    count = Math.abs(i-j);
            }
            max = Math.max(count,max);
        }
        return max;
    }
    return 1;
}

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // Slow pointer

    for (let j = 1; j < nums.length; j++) { // Fast pointer
        if (nums[j] !== nums[i]) { // Found a new unique element
            i++; // Move the slow pointer
            nums[i] = nums[j]; // Update the position with the new unique element
        }
    }

    return i+1; // Number of unique elements
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

