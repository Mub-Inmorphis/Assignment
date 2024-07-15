// Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(str) {
  let maxLength = 0;
  let maxPalindrome = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substring = str.slice(i, j + 1);
      if (
        substring === substring.split("").reverse().join("") &&
        substring.length > maxLength
      ) {
        maxLength = substring.length;
        maxPalindrome = substring;
      }
    }
  }
  return maxPalindrome;
}
console.log(longestPalindrome("bananas"));
