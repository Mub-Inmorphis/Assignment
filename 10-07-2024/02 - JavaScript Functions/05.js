// Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string in upper case.


function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter("the quick brown fox"));
