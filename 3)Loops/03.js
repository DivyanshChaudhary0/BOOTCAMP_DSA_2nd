// 1) calculate sum of first N natural numbers
// let n = 10;
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum = sum + i;
// }
// console.log(sum);

// 2) calculate sum of first N even natural numbers
// let n = 10;
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum = sum + 2*i;
// }
// console.log(sum);

// 3) calculate sum of first N odd natural numbers
// let n = 10;
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum = sum + 2*i-1;
// }
// console.log(sum);

// 4) calculate sum of squres of first N natural numbers
// let n = 5;
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum = sum + i*i;
// }
// console.log(sum);

// 5) calculate sum of cubes of first N natural numbers
// let n = 5;
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum = sum + i*i*i;
// }
// console.log(sum);

// 6) calculate factorial of a number
// let n = 5;
// let fact = 1;
// for(let i=1;i<=n;i++){
//     fact = fact*i;
// }
// console.log(fact);

// 7) count digits of a given number
// let n = 12345;
// let count = 0;

// while(n>0){
//     count++;
//     n = parseInt(n/10);
// }
// console.log(count);

// 8) check wheather number is a prime number
// let num = 11;
// let i;
// for(i=2;i<num;i++){
//     if(num%i==0)
//         break;
// }
// if(num===i)
//     console.log(`${num} is a prime number`);
// else
//     console.log(`${num} is not a prime number`);

// 9) calculate LCM of two numbers
// let a = 12;
// let b = 18;
// let temp=0,LCM=1,i=2;

// while(a>1 || b>1){
//     if(a%i==0){
//         a = parseInt(a/i);
//         temp = 1;
//     }
//     if(b%i==0){
//         b = parseInt(b/i);
//         temp = 1;
//     }
//     if(temp==1){
//         LCM = LCM*i;
//         temp = 0;
//     }
//     else{
//         i++;
//     }
// }
// console.log(LCM);

// 10) reverse a given number
// let n = 1234;
// let rev = 0;
// while(n>0){
//     rev = rev*10 + n%10;
//     n = Math.floor(n/10);
// }
// console.log(rev);


// 10) print all armstrong numbers under 100
// for (let i = 1; i <= 100; i++) {
//   let copy = i;
//   let count = 0;
//   let sum = 0;
//   while (i < 0) {
//     count++;
//     i = parseInt(i / 10);
//   }
//   i = copy;
//   while (i < 0) {
//     let ld = i % 10;
//     sum = sum + Math.pow(ld, count);
//     i = parseInt(i / 10);
//   }
//   if(copy === sum) {
//     console.log(`${copy} is an armstrong number`);
//   }
// }
