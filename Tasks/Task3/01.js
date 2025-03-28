
// Q-1
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

let arr = [0,1,1,0,1,1,1,0,0];
let count = 0;
let max = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
        count++;
    }
    else{
        max = Math.max(max,count);
        count=0;
    }
}

console.log(max);
