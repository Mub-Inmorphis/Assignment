// Write a JavaScript program to compute the sum of an array of integers.  
// Example : var array = [1, 2, 3, 4, 5, 6]


function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

const array = [1, 2, 3, 4, 5, 6];
const result = sumArray(array);

console.log(`The sum of the array [${array}] is: ${result}`); 
