// Write a JavaScript program to display the current day and time in the following
// format.
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22

function today() {
  let current = new Date();

  let day = current.getDay();

  let dayarr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log("Today is : " + dayarr[day]);
  var hour = current.getHours();
  var minute = current.getMinutes();
  var second = current.getSeconds();

  console.log(
    "Current time is : " + (hour >= 12 ? hour - 12 : hour),
    hour > 12 ? "PM" : "AM",
    ":",
    +minute,
    ":",
    +second
  );
}

today();
