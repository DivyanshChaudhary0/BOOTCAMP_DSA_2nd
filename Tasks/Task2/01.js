
// Q-1
// Write a program to generate and print the first N terms of the Fibonacci series.

let n = 5;
let a = -1;
let b = 1;
let temp = 0;
for(let i=1;i<=n;i++){
    temp = a+b;
    a = b;
    b = temp;
    console.log(temp)
}
