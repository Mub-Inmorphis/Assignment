// Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050

for (i = 2014; i <= 2050; i++) {
    var d = new Date(i, 0, 1);
    if (d.getDay() === 0) {
        console.log("1st January is being a Sunday on " + i);
    }
}