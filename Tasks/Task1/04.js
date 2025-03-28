

// Q-4
// Make a Calculator. Take 2 numbers (a & b) from the 
// user and an operation as follows :
//  + (Addition) a + b-(Subtraction) a – b
//  * (Multiplication) a * b
//  / (Division) a / b
//  % (Modulo or remainder) a % b

let first = Number(prompt("Enter first: "));
let second = Number(prompt("Enter second: "));
let operand = prompt("Enter operator: ");

if(operand === "+"){
    alert(`${first+second}`);
}
else if(operand === "-"){
    alert(`${first-second}`);
}
else if(operand === "*"){
    alert(`${first*second}`);
}
else if(operand === "/"){
    alert(`${first/second}`);
}
else if(operand === "%"){
    alert(`${first%second}`);
}
else{
    alert("Invalid Opeartor");
}