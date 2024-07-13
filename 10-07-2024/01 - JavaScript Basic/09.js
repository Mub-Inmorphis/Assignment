// Write a JavaScript program to calculate days left until next Christmas.

function daysUntilChristmas() {
    let today = new Date();

    let christmas = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    let diffMilliseconds = christmas - today;

    let daysLeft = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));

    return daysLeft;
}

let daysLeft = daysUntilChristmas();

console.log(`There are ${daysLeft} days left until next Christmas.`);
