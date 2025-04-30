
// function printHello(n){
//     if(n>0){
//         printHello(n-1);
//         console.log("Hello World!");
//     }
// }

// printHello(5);

// function printNumber(n){
//     if(n==0) return;
//     printNumber(n-1)
//     console.log(n);
// }
// printNumber(10);

// function printSum(n){
//     if(n==1) return 1;
//     return n + printSum(n-1);
// }

// console.log(printSum(10));

// function printFact(n){
//     if(n==0) return 1;
//     return n*printFact(n-1);
// }

// console.log(printFact(5));

// function sumOfDigits(n){
//     if(n === 0) return 0;
//     return n%10 + sumOfDigits(Math.floor(n/10));
// }

// console.log(sumOfDigits(1234));

// -------------- GCD by recursion -------------------
// function gcd(a,b,i){
//     if(i===1 || (a%i==0 && b%i==0)){
//         return i;
//     }
//     return gcd(a,b,i-1);
// }

// let a = 20;
// let b = 32;
// console.log(gcd(a,b,a<b?a:b))

// -------------- GCD by recursion -------------------
// function gcd(a,b){
//     if(a==b) return a;
//     if(a>b) a = a-b;
//     else if(b>a) b = b-a;
//     return gcd(a,b)
// }

// console.log(gcd(20,32));

// -------------- Factors by recursion -------------------
// function facotors(n,i){
//     if(n<i) return;
//     if(n%i==0) console.log(i);
//     facotors(n,i+1);
// }
// facotors(20,1);

// -------------- Factors by recursion -------------------
// function facotors(n,i){
//     if(i > Math.floor(n/2)){
//         console.log(n);
//         return;
//     }
//     if(n%i==0) console.log(i);
//     facotors(n,i+1);
// }
// facotors(20,1);

// ------------- Factors by Loop ----------------------
// let n = 36;
// let i = 1;
// for(i=1;i*i<n;i++){
//     if(n%i==0)  console.log(i);
// }
// if(i-(n/i)==1) i--;
// for( ;i>=1;i--){
//     if(n%i==0) console.log(n/i);
// }

//------------- prime number ----------------------------
// let n = 12;

// function checkPrime(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     for(let i=3;i<=Math.floor(Math.sqrt(n));i++){
        
//     }
// }

//------------- prime number to n -----------------------
// let n = 30;
// let arr = new Array(n+1).fill(true);

// for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
//     if(arr[i]===true){
//         for(let j=i*i;j<arr.length;j+=i){
//             arr[j] = false;
//         }
//     }
// }
// for(let i=2;i<arr.length;i++){
//     if(arr[i]==true) console.log(i);
// }


function printHello(n){
    if(n === 0) return;
    console.log("hello");
    printHello(n-1);
}

printHello(5);

function printNumber(n){
    if(n===0) return;
    console.log(n);
    printNumber(n-1);
}

printNumber(10);

function printSum(n){
    if(n === 0) return 0;
    let sum = n + printSum(n-1);
    return sum;
}

console.log(printSum(5));

function printFact(n){
    if(n===1 || n===0) return 1;
    return n * printFact(n-1);
}

console.log(printFact(5));


function sumOfDigits(n){
    n = Math.floor(n);
    if(n > 0 && n < 10) return n;
    let rem = n % 10;
    let sum = rem + sumOfDigits(n/10)
    return sum;
}

console.log(sumOfDigits(1234));

// function gcd(a,b,min){
//     if(a%min ==0 && b%min ==0) return min;
//     return gcd(a,b,min-1)
// }


// function gcd(a, b) {
//     if (b === 0) return a;
//     return gcd(b, a % b);
// }

// console.log(gcd(20,12));

// function reverse(n){
//     const isNegative = n < 0;
//     const reversed = helper(Math.abs(n), 0);
//     return isNegative ? -reversed : reversed;
    
//     function helper(n,rev){
//         n = Math.floor(n);
//         if(n <= 0) return rev;
//         let rem = n%10;
//         rev = (rev*10) + rem;
//         return helper(n/10,rev)
//     }
// }

// console.log(reverse(-1234));

// let n=5;
// let a=-1,b=1;

// for(let i=0;i<n;i++){
//     let c=a+b;
//     a=b;
//     b=c;
//     console.log(c);
// }


function printFibonacci(n){

    const helper = (n,a,b) => {
        if(n===0) return;
        let c = a+b;
        console.log(c);
        a=b;
        b=c;
        helper(n-1,a,b)
    }

    helper(n,-1,1);

}

printFibonacci(5);