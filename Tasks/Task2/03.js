
// Q-3
// Write a program to print the HCF or GCD of two numbers.

let a = 20;
let b = 10;
let hcf = 1;

for(let i=a<b?a:b;i>=2;i--){
    if(a%i==0 && b%i==0){
        hcf = i;
        break;
    }
}
console.log(hcf);
