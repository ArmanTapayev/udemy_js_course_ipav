"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies did you see?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies did you see?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilm() {
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
}

rememberMyFilm();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Too less movies");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are classical viewer");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are moviefill");
  } else {
    console.log("Error");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Your favourite genre is number ${i}`
    );
  }
}

writeYourGenres();
