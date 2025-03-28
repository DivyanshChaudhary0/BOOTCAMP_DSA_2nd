
// 1) Reverse a String
let str = "Divya";
function reverse(str){
    let reverse = "";
    for(let i=str.length-1;i>=0;i--){
        reverse += str[i];
    }
    return reverse;
}
console.log(reverse(str));

// 2) Implement a function to check a String is plaindrome or not
function isPalindrome(str){
    let rev = reverse(str);
    if(str===rev) return true;
    else return false;
}
console.log(isPalindrome("madam"));

// 3) WAF to find the max and min value in the Array
const min_max = function(arr){
    let min = Infinity;
    let max = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max = arr[i];
        if(arr[i]<min)
            min = arr[i];
    }
    console.log(`minimum is ${min} & maximum is ${max} `);
}
min_max([10,20,30,40,50,60]);

// 4) create a function that remove dupcilates from the Array
const array = [1, 2, 2, 3, 4, 4, 5];
function remove_Duplicates(arr){
    let unique = [];
    for(let i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(remove_Duplicates(array));

// 5) Implement a function to count the occurrences of each character in a string
function find_occurance(str){
    let res = {};
    for(let i=0;i<str.length;i++){
        res[str[i]] = res[str[i]]+1 || 1;
    }

    for(let key in res){
        console.log(`${key} = ${res[key]}`);
    }
}
find_occurance("disvyansh");

// 6) Write a function if two strings are anagram
function sort_String(str){
    let charArray = [];
    for(let i=0;i<str.length;i++){
        charArray[i] = str[i];
    }
    
    for(let i=0;i<charArray.length-1;i++){
        for(let j=0;j<charArray.length-i-1;j++){
            if(charArray[j]>charArray[j+1]){
                let temp = charArray[j];
                charArray[j] = charArray[j+1];
                charArray[j+1] = temp;
            }
        }
    }
    let sortedStr = "";
    for(let i=0;i<charArray.length;i++){
        sortedStr += charArray[i];
    }
    return sortedStr;
}
function check_Anagram(str1,str2){
    if(str1.length !== str2.length) return false;

    str1 = sort_String(str1);
    str2 = sort_String(str2);

    for(let i=0;i<str1.length;i++){
        if(str1[i]!==str2[i])
            return false;
    }

    return true;
}
console.log(check_Anagram("cba","abc"));

// 7) Merge two sorted Arrays into single sorted array
let arr1 = [1,2,3,4,5];
let arr2 = [2,6,7];
let ans = new Array(arr1.length+arr2.length);
let i=0,j=0,k=0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        ans[k++] = arr1[i++];
    }
    else{
        ans[k++] = arr2[j++];
    }
}

while(i<arr1.length){
    ans[k++] = arr1[i++];
}

while(j<arr2.length){
    ans[k++] = arr2[j++];
}
console.log(ans);

// 8) Find factorial of a number using recursion
function find_factorial(n){
    if(n==1) return 1;
    else return n*find_factorial(n-1);
}
console.log(find_factorial(5));

// 9) Generate the fibonacci series to n terms
let n=8;
let a=-1,b=1;
for(let i=1;i<=n;i++){
    let c = a+b;
    console.log(c);
    a=b;
    b=c;
}

// 10) WAF to check a number is prime or not
function is_Prime(num){
    let temp = true;
    for(let i=2;i<num;i++){
        if(num%i==0){
            temp = false;
            break;
        }
    }
    return temp;
}
console.log(is_Prime(10));
