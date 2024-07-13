// The Movie Database
// It's like IMDB, but much much smaller!
// -> Create an object to store the following information about your favorite movie: title (a
// string), duration (a number), and stars (an array of strings).
// -> Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30
// minutes. Stars: Puff, Jackie, Living Sneezes."

const movieDetails = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"],
};

function printMovieDetails(obj) {
  obj.title &&
    obj.duration &&
    obj.stars &&
    console.log(
      obj.title +
        " lasts for " +
        obj.duration +
        " minutes." +
        " Stars: " +
        obj.stars +
        "."
    );
}

function printMovieDetails2(movie) {
  let starsString = movie.stars.join(", ");
  console.log(
    `${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsString}.2`
  );
}

printMovieDetails(movieDetails);

printMovieDetails2(movieDetails);
