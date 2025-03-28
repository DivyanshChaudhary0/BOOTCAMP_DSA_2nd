
// WAF to claculate LCM of two numbers
function find_LCM(a,b){
    let LCM = 1;
    for(let i=a>b?a:b;i<=a*b;i++){
        if(i%a==0 && i%b==0){
            LCM = i;
            break;
        }
    }
    return LCM;
}
console.log(find_LCM(5,10));

// WAF to claculate HCF of two numbers
function find_HCF(a,b){
    let HCF=1;
    for(let i=a<b?a:b;i>=2;i--){
        if(a%i==0 && b%i==0){
            HCF=i;
            break;
        }
    }
    return HCF;
}
console.log(find_HCF(5,10));

// WAF to check wheather a given number is prime or not
function is_Prime(n){
    if(n===1) return "1 is neither prime nor composite"
    let temp=-1;
    for(let i=2;i<n;i++){
        if(n%i==0){
            temp=1;
            break;
        }
    }
    if(temp===-1) return true;
    else return false;
}
console.log(is_Prime(2));

// WAF to find next prime number of a given number

function find_Next_Prime(n){
    let res,i;
    for(i=n+1; ;i++){
        res = is_Prime(i);
        if(res) break;
    }
    return i;
}
console.log(find_Next_Prime(11));

// WAF to print N prime numbers
function print_N_Prime(n){
    let count =0;
    for(let i=2; ;i++){
        let temp=-1;
        for(let j=2;j<i;j++){
            if(i%j==0){
                temp=1;
                break;
            }
        }
        if(temp==-1){
            count++;
            console.log(i); 
        }
        if(count===n) break;
    }
}
print_N_Prime(10)

// print prime between two given numbers
function print_Prime(a,b){
    for(let i=a;i<=b;i++){
        let temp=-1;
        for(let j=2;j<i;j++){
            if(i%j==0){
                temp=1;
                break;
            }
        }
        if(temp==-1)
            console.log(i);
    }
}
print_Prime(5,20)

// WAF to print first N terms of fibonacci series
function print_fibonacci(n){
    let a =-1;
    let b = 1;
    for(let i=1;i<=n;i++){
        let c = a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
print_fibonacci(8)

// WAF to print all Armstrong numbers between two given numbers
function print_Armstrong(a,b){
    for(let i=a;i<=b;i++){
        let count = 0;
        let copy = i;
        let sum = 0;
        while(copy>0){
            count++;
            copy=Math.floor(copy/10);
        }
        copy = i;
        while(copy>0){
            sum += Math.pow(copy%10,count);
            copy = Math.floor(copy/10);
        }
        if(sum === i) console.log(i);
    }
}
print_Armstrong(1,1000);

//Waf to find the sum of first n terms of the series... ( 1!/1+2!/2+3!/3+...+n!/n )

function sum_Of_N(n){
    function factorial(num){
        let fact =1;
        for(let i=1;i<=num;i++){
            fact = fact*i;
        }
        return fact;
    }
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum + factorial(i)/i;
    }
    return sum;
}
console.log(sum_Of_N(5))