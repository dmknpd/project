let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let lastMovie = prompt("Один из последних просмотренных фильмов?").trim();
      let lastMovieRate = prompt("На сколько оцените его").trim();
      if (
        lastMovie != null &&
        lastMovieRate != null &&
        lastMovie.length > 0 &&
        lastMovie.length < 50
      ) {
        personalMovieDB.movies[lastMovie] = lastMovieRate;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  showMyDB: function (hidden) {
    if (hidden === false) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre != null && genre.length > 0) {
        personalMovieDB.genres[i - 1] = genre.trim();
      } else {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) =>
      console.log(`Любимый жанр #${i + 1} - это ${item}`)
    );
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

personalMovieDB.detectPersonalLevel();
