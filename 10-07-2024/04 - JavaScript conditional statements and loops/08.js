// According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares
// of its digits, and repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1. Those numbers for
// which this process ends in 1 are happy numbers, while those that do not end in 1
// are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

function sumOfSquaresOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappyNumber(num) {
  let seen = new Set();
  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = sumOfSquaresOfDigits(num);
  }
  return num === 1;
}

function findHappyNumbers(count) {
  let happyNumbers = [];
  let num = 1;
  while (happyNumbers.length < count) {
    if (isHappyNumber(num)) {
      happyNumbers.push(num);
    }
    num++;
  }
  return happyNumbers;
}

let first5HappyNumbers = findHappyNumbers(5);
console.log("The first 5 happy numbers are:", first5HappyNumbers);
