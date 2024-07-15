// Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let maxSubstring = "";
  let currentSubstring = "";
  for (let char of str) {
    if (!currentSubstring.includes(char)) {
      currentSubstring += char;
      if (currentSubstring.length > maxLength) {
        maxLength = currentSubstring.length;
        maxSubstring = currentSubstring;
      }
    } else {
      currentSubstring =
        currentSubstring.slice(currentSubstring.indexOf(char) + 1) + char;
    }
  }
  return maxSubstring;
}
console.log(longestSubstringWithoutRepeating("abcabcbb"));
