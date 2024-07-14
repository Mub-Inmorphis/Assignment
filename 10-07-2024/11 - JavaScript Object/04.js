// Write a JavaScript program to display the reading status (i.e. display book
//     name, author name and reading status) of the following books.
//     var library = [
//      {
//      author: 'Bill Gates',
//      title: 'The Road Ahead',
//      readingStatus: true
//      },
//      {
//      author: 'Steve Jobs',
//      title: 'Walter Isaacson',
//      readingStatus: true
//      },
//      {
//      author: 'Suzanne Collins',
//      title: 'Mockingjay: The Final Book of The Hunger Games',
//      readingStatus: false
//      }];

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.forEach((book) => {
  console.log(`${book.title} by ${book.author}`);
  if (book.readingStatus) {
    console.log(`You already read "${book.title}" by ${book.author}.`);
  } else {
    console.log(`You still need to read "${book.title}" by ${book.author}.`);
  }
});



// already done the same question in Imp Question Section Question No. 2
