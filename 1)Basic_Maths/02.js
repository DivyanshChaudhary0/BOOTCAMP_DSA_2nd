
//1) +++++++++ Average of three numbers +++++++++++
// let a=12,b=10,c=12;
// let avg;
// avg=(a+b+c)/3;
// console.log(avg.toFixed(2));

//2) +++++++++ circumference of a circle +++++++++++
// let r=5;
// let PI = Math.PI;
// console.log(`Circumference of circle is ${(2*PI*r).toFixed(2)}`);

//3) +++++++++ Simple interest +++++++++++
// let p=1000,r=2,t=2;
// let SI = (p*r*t)/100;
// console.log(SI);

//4) +++++++++ Volume of cuboid ++++++++++
// let l=20.5556,w=12.5,h=20.6;
// let voc = parseFloat(l*w*h);
// console.log(voc);

//5) +++++++++ Cost price ->CP and selling Price->SP ++++++++++
// let cp = 200;  // 12 kele
// let sp = 450;  // 12 kele

// let res = (450/12)*25;
// console.log(one);

//6) +++++++++ print ASCII code of character ++++++++++
//7) +++++++++ input ASCII code than print corresponding character ++++++++++

//8) +++++++++ print unit digit of a number ++++++++++
// let n = 1234;
// console.log(`Unit digit is ${n%10}`);

//9) +++++++++ print number without its last digit ++++++++++
// let n = 1234;
// console.log(`Number is ${parseInt(n/10)}`);

//10) +++++++++ swap two integer variables ++++++++++
// let a = 10;
// let b = 20;

// let temp = a;
// a = b;
// b = temp;
// console.log(`Value of a is ${a} and b is ${b}`);

//11) +++++++++ swap two integer variables without using third variable ++++++++++
// let a = 10;
// let b = 20;

// a = a + b;  //30
// b = a - b;  //10
// a = a - b;  //20
// console.log(`Value of a is ${a} and b is ${b}`);

//12) +++++++++ swap two integer variables without using third variable and +,- operators ++++++++++
// let a = 10;
// let b = 20;

// a = a*b;
// b = parseInt(a/b);
// a = parseInt(a/b);
// console.log(`Value of a is ${a} and b is ${b}`);

//13) +++++++++ swap two integer variables without using third variable and arithmatic operations ++++++++++
// let a = 10;
// let b = 20;

// a = a^b;
// b = a^b;
// a = a^b;
// console.log(`Value of a is ${a} and b is ${b}`);

//14) +++++++++ swap two integer variables in single line ++++++++++
// let a = 10;
// let b = 20;

// a = a + b - (b = a);
// console.log(`Value of a is ${a} and b is ${b}`);

//15) +++++++++ input three digit number and display the sum ++++++++++
// let n = 456;
// let sum = (n%10) + parseInt(n%100/10) + parseInt(n/100);
// console.log(sum);

//16) +++++++++ make last digit as zero ++++++++++
// let n = 2389;
// n = parseInt(n/10) * 10; // First Way
// // n = n - n%10;  // Second Way
// console.log(n);

//17) +++++++++ input number and digit. Now append it and print ++++++++++
// let number = 234;
// let digit = 5;

// let newNum = number*10+digit;
// console.log(newNum);

//17) +++++++++ input three digits number and rotate digits by one in right ++++++++++
// let n = 678; // 321
// n = (n%10)*100 + parseInt(n%100/10)*10 + parseInt(n/100);
// console.log(n);

//18) +++++++++ Predict output ++++++++++
// let x = 10>8>4;
// console.log(x);  // false

//19) +++++++++ Predict output ++++++++++
// let x = 12>-2;
// console.log(x);   //true

//20) +++++++++ Predict output ++++++++++
// let n ;
// n=3<0 && 5>0;
// console.log(n);   //false
