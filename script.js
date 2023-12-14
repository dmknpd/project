let numbersOfFilms;

function start() {
  numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (
    numbersOfFilms == "" ||
    numbersOfFilms == null ||
    isNaN(numbersOfFilms)
  ) {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}

start();

let personalMobieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastMovie = prompt("Один из последних просмотренных фильмов?");
    let lastMovieRate = prompt("На сколько оцените его");
    if (
      lastMovie != null &&
      lastMovieRate != null &&
      lastMovie.length > 0 &&
      lastMovie.length < 50
    ) {
      personalMobieDB.movies[lastMovie] = lastMovieRate;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMobieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
  } else if (personalMobieDB.count >= 10 && personalMobieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMobieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (hidden === false) {
    console.log(personalMobieDB);
  }
}

showMyDB(personalMobieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    if (genre != null && genre.length > 0) {
      personalMobieDB.genres[i - 1] = genre;
    } else {
      i--;
    }
  }
}

writeYourGenres();
