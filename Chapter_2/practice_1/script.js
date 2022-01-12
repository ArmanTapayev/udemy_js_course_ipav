const numberOfFilms = +prompt("How many movies did you see?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

// const a = prompt("Last seen movie: ", ""),
//   b = prompt("Your assessment: ", ""),
//   c = prompt("Last seen movie: ", ""),
//   d = prompt("Your assessment: ", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
  const a = prompt("Last seen movie: ", ""),
    b = prompt("Your assessment: ", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Too less movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are classical viewer");
} else if (personalMovieDB.count >= 30) {
  console.log("You are moviefill");
} else {
  console.log("Error");
}

console.log(personalMovieDB);
