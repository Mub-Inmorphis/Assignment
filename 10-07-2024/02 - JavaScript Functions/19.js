// Write a JavaScript function that returns array elements larger than a number.
function elementsLargerThan(arr, num) {
  return arr.filter((el) => el > num);
}
console.log(elementsLargerThan([1, 2, 3, 4, 5], 3));
