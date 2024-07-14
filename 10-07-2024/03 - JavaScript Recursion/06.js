// Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13,
// 21, 34, . . . Each subsequent number is the sum of the previous two


function fibonacci(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    let fibSeq = fibonacci(n - 1);
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    return fibSeq;
}

const n = 10;
const fibNumbers = fibonacci(n);
console.log(`First ${n} Fibonacci numbers:`, fibNumbers);
