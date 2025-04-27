
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let max = Math.max(arr[0],arr[1]);
// let sMax = Math.min(arr[0],arr[1]);

// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         sMax = max;
//         max = arr[i];
//     }
//     else if(sMax < arr[i]){
//         sMax = arr[i];
//     }
// }
// console.log(max,sMax);


// let i=0,j=arr.length-1;
// function swap(arr,i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }

// console.log(arr);


// let arr = [1,1,1,0,1,0,0,1,1,0,0,0,0];

// let i=0,j=0;

// while(i<arr.length){
//     if(arr[i]===0){
//         swap(arr,j,i);
//         j++;
//     }
//     i++;
// }

// console.log(arr);


// let str = ["hello","bhai","kaise","ho"]
// let ans = [];

// for(let i=0; i<str.length; i++){
//     let word = str[i];
//     let temp = "";
//     temp += word[0].toUpperCase();
//     temp += word.substring(1,word.length-1);
//     temp += word[word.length-1].toUpperCase();
//     str[i] = temp;
// }

// console.log(str.join(" "));

// let str = "Bhola";
// let rev = "";

// for(let i=str.length-1; i>=0; i--){
//     rev += str[i];
// }

// console.log(rev);

// let str = "naman";
// let i=0,j=str.length-1;
// let isPalindrome = true;

// while(i<j){
//     if(str[i] !== str[j])  isPalindrome = false;
//     i++;
//     j--;
// }

// console.log(isPalindrome);


// let str = "shEEtal";
// let newStr = "";
// for(let i=0; i<str.length; i++){
//     let ascii = str.charCodeAt(i);
//     if(ascii >= 65 && ascii <= 90) newStr += String.fromCharCode(ascii+32);
//     else newStr += String.fromCharCode(ascii-32);
// }

// console.log(newStr);

// let words = ["pay","attention","practice","attend"]
// let pref = "at"
// let count = 0;

// for(let i=0; i<words.length; i++){
//     let word = words[i];
//     // if(word.startsWith(pref)) count++;
//     if(word.substring(0,2) === pref) count++;
// }

// console.log(count);

// let str = "Hello bhai Kaise ho a";
// let arr = str.split(" ");

// for(let i=0; i<arr.length; i++){
//     let word = arr[i];
//     let temp = word[0].toUpperCase() + word.substring(1,word.length-1) + word[word.length-1].toUpperCase();
//     arr[i] = temp;
// }

// console.log(arr.join(" "));

// let str = "Sheetal";
// let arr = new Array(128).fill(0);

// for(let i=0; i<str.length; i++){
//     let ascii = str.charCodeAt(i);
//     arr[ascii] = arr[ascii] + 1;
// }

// let i=0;
// arr.forEach(val => {
//     if(val !== 0){
//         console.log(String.fromCharCode(i) + " => " + val);
//     }
//     i++;
// })

let str = "Sheetal"
let map = new Map();

for(let i=0; i<str.length; i++){
    if(map.has(str[i])){
        map.set(str[i], map.get(str[i]) + 1);
    }
    else map.set(str[i], 1);
}

for(let key of map.keys()){
    console.log(key + " => " + map.get(key));
}
