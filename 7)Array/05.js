
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


let str = ["hello","bhai","kaise","ho"]
let ans = [];

for(let i=0; i<str.length; i++){
    let word = str[i];
    let temp = "";
    temp += word[0].toUpperCase();
    temp += word.substring(1,word.length-1);
    temp += word[word.length-1].toUpperCase();
    str[i] = temp;
}

console.log(str.join(" "));
