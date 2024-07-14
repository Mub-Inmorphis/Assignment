// Write a JavaScript program to check whether a number is even or not


function isEven(num) {
    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else if (num > 0) {
        return isEven(num - 2);
    }
    else {
        return isEven(-num);
    }
}

console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven(0)); 
console.log(isEven(-1)); 
