
// print string in newline
// let s = "hello";
// for(let i=0;i<s.length;i++){
//     console.log(s[i]);
// }

//reverse a string
// let s = "hello";
// let rev = "";
// for(let i=s.length-1;i>=0;i--){
//     rev += s[i];
// }
// console.log(rev);

// count vowel and consonents
// let str = "hello world";
// let vowel=0,consonents=0,spaces=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//         vowel++;
//     }
//     else if(str[i]==' '){
//         spaces++;
//     }
//     else{
//         consonents++;
//     }
// }
// console.log(vowel,spaces,consonents);


// Toggle characters
// let str = "AcgDFD";
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
// let words = ["pay","attire","practice","attend"];
// let pref = "at";
// let count = 0;
// for(let i=0;i<words.length;i++){
//     for(let j=0;j<words[i].length;j++){
//         if(words[i][j]===pref[j])
//             count+=1/2;
//         else
//             break;
//     }
// }
// console.log(count);

// --------------------- truncate text -------------------------
// const str = "Divyansh Chaudhary";
// const maxLength = 8;

// function truncate(str,maxLength){
//     if(str.length > maxLength){
//         return str.slice(0,maxLength) + "..."
//     }
//     else{
//         return str;
//     }
// }
// console.log(truncate(str,maxLength));

// --------------------- Haming distance -------------------------
// let x = "hello",y = "hwllr";
// let count = 0;

// if(x.length === y.length){
//     for(let i=0;i<x.length;i++){
//         if(x[i]!==y[i])
//             count++;
//     }
// }
// console.log(count);

// --> Leet code 461 inplementation
let x = 1,y = 4;
let count = 0;
x=x.toString(2);
y=y.toString(2);
if(x.length<y.length){
    while(x.length!==y.length) x = "0"+x;
}
else{
    while(x.length!==y.length) y = "0"+y;
}

for(let i=0;i<x.length;i++){
    if(x[i]!==y[i])
        count++;
}
console.log(x,y,count);
