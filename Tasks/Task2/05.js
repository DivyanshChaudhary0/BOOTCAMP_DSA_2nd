

let choice = Number(prompt("Enter choice: "));

let n = Number(prompt("Enter number: "));

switch(choice){
    case 1: 
        if(n%2==0) console.log("Even Number");
        else console.log("Odd Number");
        break;
    case 2: 
        let temp=0;
        for(let i=2;i<n;i++){
            if(n%i==0){
                temp=1;
                break;
            }
        }
        if(temp==1)
            console.log(`${n} is not prime`);
        else
            console.log(`${n} is prime`);
        break;

    case 3:
        let fact=1;
        for(let i=1;i<=n;i++){
            fact = fact*i;
        }
        console.log(`Factorial of ${n} is ${fact}`);
        break;
    default:
        console.log("Invalid Input");
}