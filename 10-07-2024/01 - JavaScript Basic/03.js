// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function today() {
  let current = new Date();

  let dd = current.getDate();
  let mm = current.getMonth() + 1;
  let yyyy = current.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  console.log(
    dd + "-" + mm + "-" + yyyy,
    ":",
    dd + "/" + mm + "/" + yyyy
  );
}

today();
