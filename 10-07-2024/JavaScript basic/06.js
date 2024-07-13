
// Write a JavaScript program to determine whether a given year is a leap year in 
// the Gregorian calendar

function leapyear(year) {
    let leap = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

    console.log(
        (leap ? year + " is a Leap Year" : year + " is not a Leap Year")
    );

}

leapyear(2024)