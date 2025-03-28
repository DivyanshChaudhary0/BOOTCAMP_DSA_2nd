
//1) Write a program to accept rating of the movies and movie name in string format.
// show category of the movie based on the rating...

let movieName = prompt("Enter Movie Name: ");
let rating = parseFloat("Enter rating: ");

if(rating>0 && rating<=2){
    console.log(movieName+" is a flop");
}
else if(rating>=2.1 && rating<=3.4){
    console.log(movieName+ " is a Semi Hit");
}
else if(rating>=3.5 && rating<=4.5){
    console.log(movieName+" is a Hit");
}
else{
    console.log(movieName+" is a Super Hit");
}

// Write a program to calculate tha salary as per given things...

let gender = "female";
let experience = 10;
let qualifications = "graduate";

if(gender==="male"){
    if(experience>=10 && qualifications==="post graduate"){
        console.log("Salary is 15000");
    }
    else if(experience>=10 && qualifications==="graduate"){
        console.log("Salary is 10000");
    }
    else if(experience<10 && qualifications==="post graduate"){
        console.log("Salary is 10000");
    }
    else if(experience<10 && qualifications==="graduate"){
        console.log("Salary is 7000");
    }
}
else{
    if(experience>=10 && qualifications==="post graduate"){
        console.log("Salary is 12000");
    }
    else if(experience>=10 && qualifications==="graduate"){
        console.log("Salary is 9000");
    }
    else if(experience<10 && qualifications==="post graduate"){
        console.log("Salary is 10000");
    }
    else if(experience<10 && qualifications==="graduate"){
        console.log("Salary is 6000");
    }
}