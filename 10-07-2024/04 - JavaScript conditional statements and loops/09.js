// Write a JavaScript program to find the armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the
// cubes of its digits is equal to the number itself. For example, 371 is an Armstrong
// number since 3**3 + 7**3 + 1**3 = 371.

function isArmstrongNumber(number) {
  let numStr = number.toString();
  let numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    let digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === number;
}

console.log(isArmstrongNumber(371));
