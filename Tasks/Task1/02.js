
// Q-2
// Write a program  that takes minutes as input, and 
// display the  total number  of hours a minutes . 

let minutes = 40;
let hours = Math.floor(minutes/60);

console.log(`${hours} hours and ${minutes - hours*60} minutes`);