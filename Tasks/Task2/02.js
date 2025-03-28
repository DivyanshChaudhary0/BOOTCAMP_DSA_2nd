
// Q-2
//  Write a program to print the LCM of two numbers.

let a = 20;
let b = 30;
let i=2,temp=0,LCM=1;;

while(a>1 || b>1){
    if(a%i==0){
        a = Math.floor(a/i);
        temp = 1;
    }
    if(b%i==0){
        b = Math.floor(b/i);
        temp = 1;
    }
    if(temp==1){
        LCM = LCM*i;
        temp = 0;
    }
    else{
        i++;
    }
}
console.log(LCM);