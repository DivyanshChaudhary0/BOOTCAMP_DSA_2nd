
// 2. Take a number and print the table
// let n = 5;
// for(let i=1;i<=10;i++){
//     console.log(n+ " * " +i + " = " + n*i);
// }

// 3. ISBN number
// let n = 1566199093;
// let copy = n;
// let count=0;
// let sum=0;

// while(n>0){
//     count++;
//     n=Math.floor(n/10);
// }
// if(count===10 || count===13){
//     for(let i=1;i<=count;i++){
//         let ld = copy%10;
//         sum += (i*ld);
//         copy = Math.floor(copy/10);
//     }
//     if(sum%11===0){
//         console.log(`valid ISBN number`);
//     }
//     else{
//         console.log(`not a valid ISBN number`);
//     }
// }
// else{
//     console.log("Not an ISBN Number");
// }

// 4. HCF/GCD
// let a = 25;
// let b = 125;
// let hcf = 1;

// for(let i=a<b?a:b;i>=1;i--){
//     if(a%i==0 && b%i==0){
//         hcf = i;
//         break;
//     }
// }

// console.log(`HCF of ${a} and ${b} is ${hcf}`);

// 5. Harshad number

// let n = 21;
// let copy = n;
// let sum = 0;

// while(n){
//     sum += n%10;
//     n = Math.floor(n/10);
// }
// if(copy%sum==0){
//     console.log(`${copy} is a harshad number`);
// }
// else{
//     console.log(`${copy} is not a harshad number`);
// }

// 6. perfect square
// let n = 256;
// let square = Math.sqrt(n);

// if(Number.isInteger(square)){
//     console.log(`${n} is a perfect square of ${square}`);
// }
// else{
//     console.log(`${n} is not a perfect square`);
// }

// 7. Abundant number

// let n = 12;
// let sum = 0;
// for(let i=1;i<n;i++){
//     if(n%i==0){
//         sum+=i;
//     }
// }
// if(sum>n){
//     console.log(`${n} is an abundant number`);
// }
// else{
//     console.log(`${n} is not an abundant number`);
// }

// 8. Fibonaaci series by loop
// let n = 10;
// let a = -1;
// let b = 1;
// let temp;

// for(let i=1;i<=n;i++){
//     temp=a+b;
//     a=b;
//     b=temp;
//     console.log(temp);
// }

// 9. Find Number of integers which has exactly x divisors

// let n=20;
// let x = 3;

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
        
//     }
// }



// 10. Program for Finding out the Prime Factors of a number

// let n = 84;
// let a = 2;
// let prime_factors = [];

// while(n>1){
//     if(n%a === 0){
//         n = Math.floor(n/a);
//         prime_factors.push(a);
//     }
//     else{
//         a = find_next_prime(a);
//     }
// }
// console.log(prime_factors);

// function find_next_prime(n){
//     let next_prime;
//     let i,j;
//     for(i=n+1; ;i++){
//         for(j=2;j<i;j++){
//             if(i%j==0) break;
//         }
//         if(i==j){
//             next_prime = i;
//             break;
//         }
//     }
//     return next_prime;
// }

// 11. Write a program to calculate the area of a circle, rectangle, and triangle using a switch statement
// alert(`Prees 1 to find area of a circle, 
//     Press 2 to find area of rectangle, 
//     and press 3 to find area of triangle`);
// let input = Number(prompt("Enter choice: "));
// switch(input){
//     case 1:
//         let r = Number(prompt("Enter radius: "));
//         console.log(`Area of circle is ${3.14*r*r}`);
//         break;
//     case 2:
//         let l = Number(prompt("Enter length: "));
//         let b = Number(prompt("Enter width: "));
//         console.log(`Area of rectangle is ${l*b}`);
//         break;
//     case 3:
//         let base = Number(prompt("Enter base: "));
//         let height = Number(prompt("Enter height: "));
//         console.log(`Area of rectangle is ${base*height}/2`);
//         break;
//     default: console.log("Invalid output");
// }

// 12. A neon number is a number where the sum of digits of the square of the numbezr is equal to the number.

// let n = 12;
// let square = n*n;
// let sum = 0;
// while(square){
//     sum += square%10;
//     square = Math.floor(square/10);
// }
// if(sum==n){
//     console.log(`${n} is a neon number`);
// }
// else{
//     console.log(`${n} is not a neon number`);
// }

// 13. For a given positive integer N, the purpose is to find the
//  value of F2 + F4 + F6 +………+ F2n till N number.
//  Where Fi indicates the i’th Fibonacci number.

// let n = 7;
// let a = -1;
// let b = 1;
// let temp;
// let sum = 0;

// for(let i=0;i<=2*n;i++){
//     temp=a+b;
//     a=b;
//     b=temp;
    
//     if(i%2==0){
//         sum+=temp;
//     }
// }
// console.log(sum);


let n = 12;
let temp = true;
for(let i=2;i<n;i++){
    if(n%i==0){
        temp = false;
        break;
    }
}
if(temp){
    console.log(`${n} is prime number`);   
}
else{
    console.log(`${n} is not prime number`);   
}

function check_prime(n,i){
    if(i>=n) return true;
    if(n%i==0) return false;
    return check_prime(n,i+1);
}

console.log(check_prime(7,2))