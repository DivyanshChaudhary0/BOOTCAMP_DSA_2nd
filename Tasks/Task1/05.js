
// Q-5 
// Given an integer n, return a string answer where:
//  answer == "FizzBuzz" if n is divisible by 3 and 5.
//  answer == "Fizz" if n is divisible by 3. 
// answer == "Buzz" if n is divisible by 5.
//  answer == i (as a string) if none of the above conditions are true.
//  [Hint : String.valueOf(1) convert int 1 to “1” as string]

let n = 15;
if(n%3==0 && n%5==0){
    console.log("Fizzbuzz");
}
else if(n%3==0){
    console.log("Fizz");
}
else if(n%5==0){
    console.log("Buzz");
}
else{
    console.log(n);
}