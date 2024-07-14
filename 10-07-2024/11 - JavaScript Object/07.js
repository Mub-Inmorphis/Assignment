// Write a JavaScript program which returns a subset of a string.
// Sample Data : dog
// Expected Output : ["d", "do", "dog", "o", "og", "g"]

function getAllSubsets(str) {
  const subsets = [];

  function generateSubsets(subSet, index) {
    subsets.push(subSet);

    for (let i = index; i < str.length; i++) {
      generateSubsets(subSet + str[i], i + 1);
    }
  }

  generateSubsets("", 0);
  return subsets;
}

const str = "dog";
const subsets = getAllSubsets(str);
console.log("Subsets of", str, ":", subsets);
