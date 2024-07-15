// Write a JavaScript function to count the number of vowels in a given string.
// Test Data :
// console.log(alphabetize_string('United States'));
// Output :
// "SUadeeinsttt"

function countVowels(str) {
    const vowelPattern = /[aeiou]/gi;
    const vowels = str.match(vowelPattern);
    return vowels ? vowels.length : 0;
}

console.log(countVowels("Hello World"));
