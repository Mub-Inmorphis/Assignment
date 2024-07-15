// Write a JavaScript function to get all possible subset with
// a fixed length (for example 2) combinations in an array.

function fixedLengthSubsets(arr, length) {
  let result = [];
  function subsetHelper(start, subset) {
    if (subset.length === length) {
      result.push([...subset]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      subset.push(arr[i]);
      subsetHelper(i + 1, subset);
      subset.pop();
    }
  }
  subsetHelper(0, []);
  return result;
}
console.log(fixedLengthSubsets([1, 2, 3], 2));
