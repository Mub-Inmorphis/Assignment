// The Age Calculator
// Forgot how old you are? Calculate it!
//  Write a function named calculateAge that:
//  takes 2 arguments: birth year, current year.
//  calculates the 2 possible ages based on those years.
//  outputs the result to the screen like so: "You are either NN or NN"
//  Call the function three times with different sets of values.
//  Bonus: Figure out how to get the current year in JavaScript instead of passing it in.




function calculateAge(birthYear, currentYear) {
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;

    console.log(`You are either ${age1} or ${age2}`);
}

let currentYear = new Date().getFullYear();

calculateAge(1993, currentYear);
calculateAge(1994, currentYear);
calculateAge(2000, currentYear);