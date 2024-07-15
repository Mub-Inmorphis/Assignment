// Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(str) {
  str = str.replace(/\s+/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));
