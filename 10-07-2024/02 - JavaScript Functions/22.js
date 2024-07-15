// Write a JavaScript function that accepts two arguments, a string and a
// letter and the function will count the number of occurrences of the specified letter within the string.

function countLetterOccurrences(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetterOccurrences("w3resource.com", "o"));
