// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used
// as a factor. 8, 2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.


function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * exponent(base, exp - 1);
}

const base = 8;
const exp = 2;
const result = exponent(base, exp);
console.log(`${base}^${exp} = ${result}`); 
