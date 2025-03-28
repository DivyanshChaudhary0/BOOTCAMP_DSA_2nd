// Array

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

// function sort(arr) {                // sort the array by bubble sort
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

// ------------- check that a number is plaindrome or not ------------
// let num = 121;
// let copy = num;
// let rev = 0;

// while(num>0){
//   rev = rev*10 + num%10;
//   num = Math.floor(num/10);
// }
// console.log(rev);
// if(rev === copy) console.log("Plaindrome number");
// else console.log("Not a palindrome number");

// ------------- WAF to reverse a string ------------
// let str = "bhola";
// let rev = '';
// for(let i=str.length-1;i>=0;i--){
//   rev += str[i];
// }
// console.log(rev);

// ------------- check that a string is plaindrome or not ------------
// let str = "naman";
// let rev = '';
// for(let i=str.length-1;i>=0;i--){
//   rev += str[i];
// }
// if(str===rev) console.log("palimdrome");
// else console.log("Not palindrome");

// Reverse Array
// let arr = [10,20,30,40,50];
// let i=0,j=arr.length-1;
// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);

// Left rotation by one
// let arr = [10,20,30,40,50];
// let temp = arr[0];
// for(let i=0;i<arr.length;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = temp;
// console.log(arr);

// Left rotation by K steps
// let k=2;
// let arr = [10,20,30,40,50];
// k = k%arr.length;

// for(let i=1;i<=k;i++){
//     let temp = arr[0];
//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = temp;
// }
// console.log(arr);

// palindrome string
// let str = "madam";
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }
// if (str === rev) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

// count vowel,consonents & spaces
// let str = "  9999";
// let countVow=0,countConso=0,countSpaces=0;

// for(let i=0;i<str.length;i++){
//     let char = str[i].toLocaleLowerCase();
//     if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
//         countVow++;
//     }
//     else if(char===" "){
//         countSpaces++;
//     }
//     else if(char>='1' && char<='9'){

//     }
//     else{
//         countConso++;
//     }
// }
// console.log(countVow,countConso,countSpaces);

// Toggle Characters
// let str = "AcgDfRt";
// let newStr = "";
// for(let i=0;i<str.length;i++){
//     if(str[i]>='a' && str[i]<='z'){
//         newStr += str[i].toUpperCase();
//     }
//     else{
//         newStr += str[i].toLowerCase();
//     }
// }
// console.log(newStr);

// count the valid words
// let words = ["pay", "attire", "practice", "attend"];
// let pref = "at";

// for(let i=0;i<words.length;i++){
//     if(starts_with(words[i],pref))
//         console.log(words[i]);
// }

// function starts_with(str,pref){
//     if(pref.length>str.length) return false;
//     for(let i=0;i<pref.length;i++){
//         if(str[i]!==pref[i]){
//             return false;
//         }
//     }
//     return true;
// }

let sentence = "Hello bhai kaise ho";

// with split method
function capitalized(sentence){
    let words = sentence.split(" ");
    for(let i=0;i<words.length;i++){
        let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        console.log(capitalizedWord);
    }
}

capitalized(sentence)

// without using split method
function capitalizedWords(sent){
    let word = "";

    for(let i=0;i<=sent.length;i++){
        if(sent[i] === " " || sent[i] === undefined){
            if(word.length>0){
                let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
                console.log(capitalized);
            }
            word = "";
        }
        else{
            word += sent[i];
        }
    }
}
capitalizedWords(sentence);

// Accept a string and count the frequency of each character
let str = "hello";
let sortedStr = str.split("").sort().join("");
for(let i=0;i<str.length;i++){
    let count = 0;
    for(let j=0;j<str.length;j++){
        if(sortedStr[i]===sortedStr[j]) {
            count++;
        }
    }
    console.log(`${sortedStr[i]} = ${count}`)
}
console.log(sortedStr);


// let arr = [1,1,2,2,3,3];
// let res = {};
// for(let i=0;i<arr.length;i++){
//     res[arr[i]] = 1;
// }
// let count = 0;
// for(let key in res){
//     count++;
// }
// console.log(count);

let arr = [10,12,-6,-7,56,-17,16,18,-1];
