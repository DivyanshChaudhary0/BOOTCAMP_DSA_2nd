
// ------------- Sum of numbers of size 10 ---------------
// let arr = [10,20,30,40,50,60,70,80,90,100];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// console.log(sum);

// ------------- Calculate average of numbers of size 10 ---------------

// let arr = [10,20,30,40,50,60,70,80,90,100];
// let sum = 0;
// let avg;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// avg = parseFloat(sum/arr.length);
// console.log(`Average is ${avg}`);

// ------------- Find Sum of even and Odd numbers ---------------

// let n = Number(prompt("Enter size of array"));
// let arr = [];
// let sumOfEven = 0;
// let sumOfOdd = 0;

// for(let i=0;i<n;i++){
//     let num = Number(prompt(`Enter ${i+1}th element: `));
//     arr.push(num);
// }

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2 === 0){
//         sumOfEven += arr[i];
//     }
//     else{
//         sumOfOdd += arr[i];
//     }
// }
// console.log(sumOfEven,sumOfOdd);

// ------------- Find the greatest number in the array ---------------

// let n = Number(prompt("Enter size of array"));
// let arr = [];

// for(let i=0;i<n;i++){
//     let num = Number(prompt(`Enter ${i+1}th element: `));
//     arr.push(num);
// }
// let MAX = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(MAX<arr[i])
//         MAX = arr[i];
// }
// console.log(MAX);

// ------------- Find the smallest number in the array ---------------
// let n = Number(prompt("Enter size of array"));
// let arr = [];

// for(let i=0;i<n;i++){
//     let num = Number(prompt(`Enter ${i+1}th element: `));
//     arr.push(num);
// }
// let MIN = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(MIN>arr[i])
//         MIN = arr[i];
// }
// console.log(MIN);

// ------------- Sort array elements ---------------
// let arr = [9,12,4,8,10];

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

// ------------- Find the second greatest number in the array ---------------
// let arr = [9,12,4,8,10];
// let Max ;
// let second_Max ;
// if(arr[0]>arr[1]){
//     Max = arr[0];
//     second_Max = arr[1];
// }
// else{
//     Max = arr[1];
//     second_Max = arr[0];
// }

// for(let i=2;i<arr.length;i++){
//     if(Max<arr[i]){
//         second_Max = Max;
//         Max = arr[i];
//     }
//     else if(arr[i] > second_Max){
//         second_Max = arr[i];
//     }
// }
// console.log(second_Max);

// ------------- Find the second smallest number in the array ---------------
// let arr = [9,12,4,8,10];
// let Min ;
// let second_Min ;
// if(arr[0]<arr[1]){
//     Min = arr[0];
//     second_Min = arr[1];
// }
// else{
//     Min = arr[1];
//     second_Min = arr[0];
// }

// for(let i=2;i<arr.length;i++){
//     if(arr[i]<Min){
//         second_Min = Min;
//         Min = arr[i];
//     }
//     else if(arr[i]<second_Min){
//         second_Min = arr[i];
//     }
// }
// console.log(second_Min);

// ------------- Sort array elements in desending order ---------------
// -> first sort the array than reverse it

// let arr = [10, 1, 3, 30, 45, 40, 48, 50];
// let i = 0;
// let j = arr.length - 1;

// function sort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }

// sort(arr)
// console.log(arr);

// function reverse(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }
// reverse(arr, i, j);

// console.log(arr);

// ------------- copy array elements into another array ---------------

// let arr1 = [10, 1, 3, 30, 45, 40, 48, 50];
// let arr2 = [];

// for(let i=0;i<arr.length;i++){
//     arr2[i] = arr1[i]
// }
// console.log(arr2);

// ------------- find the total number of pairs in the array whose sum is equal to target number ---------------
// let arr = [1,8,4,5,6];
// let x = 12;
// let count = 0;

// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==x){
//             count++;
//             console.log(arr[i],arr[j]);
//         }
//     }
// }
// console.log(`Total number of pairs is ${count}`);

// ------------- find the total number of triplets in the array whose sum is equal to target number ---------------
// let arr = [1,4,6,8,10];
// let x = 11;
// let count =0;

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         for(let k=j+1;k<arr.length;k++){
//             if(arr[i]+arr[j]+arr[k]==x){
//                 count++;
//                 console.log(arr[i],arr[j],arr[k]);
//             }
//         }
//     }
// }
// console.log(count);

// -------------- Reverse array using extra array ---------------------------
// let arr = [12,34,67,88,99];
// let brr = [];
// for(let i=0;i<arr.length;i++){
//     brr[arr.length-1-i] = arr[i];
// }
// for(let i=0;i<arr.length;i++){
//     arr[i] = brr[i];
// }
// console.log(arr);
// console.log(brr);

// -------------- Reverse array without using extra array ---------------------------
// let arr = [12,34,67,88,99];
// let i=0,j=arr.length-1;
// while(i<=j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);

// -------------- Linear Search in an array ---------------------------
// let arr = [10,23,34,56,67];
// let target = 56;
// let temp = -1,idx=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//         temp=1;
//         idx=i;
//         break;
//     }
// }
// if(temp===1){
//     console.log(`${target} is present in the array at index ${idx}`);
// }
// else{
//     console.log(`${target} is not present in the array`);
// }

// -------------- Reverse part of an array ---------------------------
// let arr = [20,33,45,67,23,45,67,89];

// let i=2,j=6;
// reverse(arr,i,j);
// function reverse(arr,i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }
// console.log(arr);

// -------------- check that array is palindrome or not ---------------------------
// let arr = [1,2,3,3,4,2,1];
// let i=0,j=arr.length-1,temp=-1;

// while(i<j){
//     if(arr[i]!==arr[j]){
//         temp=1;
//         break;
//     }
//     i++;
//     j--;
// }
// if(temp==-1){
//     console.log(`array is palindrome`);
// }
// else{
//     console.log(`array is not palindrome`);
// }

//find unique elements by set
// let arr = [1,1,2,3,4,5,6,5,4,3];
// let set = new Set();
// for(let i=0;i<arr.length;i++){
//     if(set.has(arr[i])){
        
//     }
//     else set.add(arr[i]);
// }.

let arr = [0,-1,8,-6,2,-3,8,-4];
let i=arr.length-1, j=i;

while(j>0){
    if(arr[j]<0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i--;
    }
    j--;
}

console.log(arr);
