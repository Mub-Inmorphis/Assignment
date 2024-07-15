// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// printPattern(5);


const printPatternES6 = (rows) => {
    for (let i = 1; i <= rows; i++) {
        console.log('* '.repeat(i));
    }
};

printPatternES6(5);
