// merge arrays into one single array
let nums1 = [1,2,3,4];
let nums2 = [2,5,7];
let ans = new Array(nums1.length+nums2.length).fill(0);
let i=0,j=0,k=0;

while(i<nums1.length && j<nums2.length){
    if(nums1[i]<nums2[j]){
        ans[k] = nums1[i];
        i++;
        k++;
    }
    else{
        ans[k] = nums2[j];
        j++;
        k++;
    }
}
while(i<nums1.length){
    ans[k] = nums1[i];
    i++;
    k++;
}
while(j<nums2.length){
    ans[k] = nums2[j];
    j++;
    k++;
}

console.log(ans);

//take negative elements right side
// let arr = [-1,-2,5,6,7,-8,2,-4]
// let a = arr.length-1;
// let b = arr.length-2;
// while(b>=0){
//     if(arr[a]<0) a--;
//     else if(arr[b]<0){
//         let temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//         a--;
//     }
//     b--;
// }
// console.log(arr);

//take zeroes left side by two pointer
// let arr = [1,0,2,0,6,6,0]
// let a=0,b=1;
// while(b<arr.length){
//     if(arr[b]===0){
//         let temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//         a++;
//     }
//     b++;
// }
// console.log(arr);

// let arr = [0,1,1,2,1,1,1,3,2,1,1,1,1];
// let a=0,max=0,count=0;

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]==1 && arr[i+1]==1) count++;
//     else count=0;
//     max = Math.max(count,max)
// }
// console.log(max);

