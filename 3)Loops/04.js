// 1) find the Nth term of fibonacci series
// 0 1 1 2 3 5 8 13
// let n = 8;
// let a = -1,b=1,temp=0;

// for(let i=1;i<=n;i++){
//     temp = a+b;
//     a = b;
//     b = temp;
// }
// console.log(temp);

// 2) print first N term of fibonacci series
// let n = 8;
// let a = -1,b=1,temp=0;

// for(let i=1;i<=n;i++){
//     temp = a+b;
//     a = b;
//     b = temp;
//     console.log(temp);
// }

// 3) check that a given number is in the fibonacci series or not
// let n = 5;
// let a = -1,b=1,temp=0;

// for(let i=1; ;i++){
//     temp = a+b;
//     a = b;
//     b = temp;
//     if(n==temp){
//         console.log(`${n} is in the fibonacci series`);
//         break;
//     }
//     if(i>n) {
//         console.log(`${n} is not in the fibonacci series`);
//         break;
//     }
// }

// 4) calculate HCF of two numbers
// let a = 12;
// let b = 18;
// let HCF = 1;
// for(let i=a<b?a:b;i>=1;i--){
//     if(a%i==0 && b%i==0){
//         HCF = i;
//         break;
//     }
// }
// console.log(HCF);

// ----- Second Method ------
// while(a!=b){
//     if(a>b) a=a-b;
//     else b=b-a;
// }
// console.log(a);

// 5) check whether two numbers are co-prime or not
// let a = 14;
// let b = 3;
// let HCF = 1;
// for(let i=a<b?a:b;i>=1;i--){
//     if(a%i==0 && b%i==0){
//         HCF = i;
//         break;
//     }
// }
// console.log(HCF);
// if(HCF==1){
//     console.log(`${a} and ${b} are co-prime numbers`);
// }
// else{
//     console.log(`${a} and ${b} are not co-prime numbers`);
// }

// 6) print all prime numbers under 100
// let i,j,count=0;
// for(i=2;i<=100;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0)
//             break;
//     }
//     if(i==j){
//         count++;
//         console.log(i);
//     }
// }
// console.log(`Prime numbers between 2 to 100 is ${count}`);

// 7) print all prime numbers between two given numbers
// let a = 12;
// let b = 20;
// let i,j;
// for(i=a;i<=b;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0)
//             break;
//     }
//     if(i==j){
//         console.log(i);
//     }
// }

// 8) find next prime number of a given number
// let n = 13;
// let i,j;
// for(i=n+1; ; i++){
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             break;
//         }
//     }
//     if(i==j){
//         console.log(`${i} is next prime of ${n}`);
//         break;
//     }
// }

// 9) check whether a given number is an armstrong number or not
// let n = 153;
// let copy = n;
// let count = 0;
// let sum = 0;

// while (n > 0) {
//   count++;
//   n = parseInt(n / 10);
// }
// n = copy;
// while (n > 0) {
//   let ld = n % 10;
//   sum = sum + Math.pow(ld, count);
//   n = parseInt(n / 10);
// }
// if (copy === sum) {
//   console.log(`${copy} is an armstrong number`);
// } else {
//   console.log(`${copy} is not an armstrong number`);
// }

// 10) print all armstrong numbers under 100

for (let i = 1; i <= 100; i++) {
  let n = i;
  let copy = i;
  let count = 0;
  let sum = 0;

  while (n > 0) {
    count++;
    n = parseInt(n / 10);
  }
  n = copy;
  while (n > 0) {
    let ld = n % 10;
    sum = sum + Math.pow(ld, count);
    n = parseInt(n / 10);
  }
  if (copy === sum) {
    console.log(`${copy} is an armstrong number`);
  }
}
