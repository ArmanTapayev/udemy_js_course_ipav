const numberOfFilms = +prompt("How many movies did you see?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Last seen movie: ", ""),
  b = prompt("Your assessment: ", ""),
  c = prompt("Last seen movie: ", ""),
  d = prompt("Your assessment: ", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
