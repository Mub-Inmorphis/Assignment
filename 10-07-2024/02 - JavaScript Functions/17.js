// Write a JavaScript function to get the number of occurrences of each letter in specified string.
function countOccurrences(str) {
  let occurrences = {};
  for (let char of str) {
    if (occurrences[char]) {
      occurrences[char]++;
    } else {
      occurrences[char] = 1;
    }
  }
  return occurrences;
}
console.log(countOccurrences("hello world"));
