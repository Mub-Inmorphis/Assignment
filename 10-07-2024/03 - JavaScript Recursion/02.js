// Write a JavaScript program to find the greatest common divisor (gcd) of two
// positive numbers.


function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

const num1 = 36;
const num2 = 60;
console.log(`The GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);
