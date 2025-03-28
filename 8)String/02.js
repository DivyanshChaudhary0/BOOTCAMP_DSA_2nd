
// WAP to calculate the length of string
let str = "Bhola chaudhary";
let count=0,i=0;
while(str[i]){
    count++;
    i++;
}
console.log(count);

// Wap to count the occurrence of a character in a string
function count_Character(str,ch){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===ch) count++;
    }
    return count;
}
console.log(count_Character("hello hhh",'h'));

// count vowels in a given string
function count_Vowels(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            count++;
        }
    }
    return count;
}
console.log(count_Vowels("bhola"));

// count spaces in a given string
function count_Spaces(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            count++;
        }
    }
    return count;
}
console.log(count_Spaces("bhola  chaudhary "));

// convert a given string into uppercase
function convert_to_Uppercase(str){
    let newStr = "";
    for(let i=0;i<str.length;i++){
        if(str[i]>='a' && str[i]<='z'){
            newStr += String.fromCharCode(str.charCodeAt(i)-32);
        }
    }
    return newStr;
}
console.log(convert_to_Uppercase("divyansh sheetal"));

// convert a given string into lowercase
function convert_to_Lowercase(str){
    let newStr = "";
    for(let i=0;i<str.length;i++){
        if(str[i]>='A' && str[i]<='Z'){
            newStr += String.fromCharCode(str.charCodeAt(i)+32);
        }
    }
    return newStr;
}
console.log(convert_to_Lowercase("SHEETAL JAAT"));

// Wap to reverse a string
function reverse(str){
    let newStr = '';
    for(let i=str.length-1;i>=0;i--){
        newStr += str[i]
    }
    return newStr;
}
console.log(reverse("hello"));

