// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)

function range(x, y) {
    if (x >= y - 1) {
        return [];
    }
    return [x + 1].concat(range(x + 1, y));
}

// Example usage:
const result = range(2, 9);
console.log(result);