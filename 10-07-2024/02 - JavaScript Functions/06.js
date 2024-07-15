// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(str) {
  let words = str.split(" ");
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(findLongestWord("Web Development Tutorial"));
