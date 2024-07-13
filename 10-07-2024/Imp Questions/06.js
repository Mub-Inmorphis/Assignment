// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//  Write a function named calculateSupply that:
//  takes 2 arguments: age, amount per day.
//  calculates the amount consumed for rest of the life (based on a constant max age).
//  outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
//  Call that function three times, passing in different values each time.
//  Bonus: Accept floating point values for amount per day, and round the result to a round number.


const calculateSupply = (age, amountPerDay) => {
    const maxAge = 80;    
    let yearsRemaining = maxAge - age;
    let amountNeeded = Math.ceil(yearsRemaining * 365 * amountPerDay);    
    console.log(`You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}`);
}

calculateSupply(30, 120);
calculateSupply(32, 60); 
calculateSupply(25, 20);
