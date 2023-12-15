let personalMobieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMobieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

    while (
      personalMobieDB.count == "" ||
      npersonalMobieDB.count == null ||
      isNaN(personalMobieDB.count)
    ) {
      personalMobieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
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
        personalMobieDB.movies[lastMovie] = lastMovieRate;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMobieDB.count < 10) {
      console.log("Просмотренно довольно мало фильмов");
    } else if (personalMobieDB.count >= 10 && personalMobieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMobieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  showMyDB: function () {
    if (hidden === false) {
      console.log(personalMobieDB);
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
      if (genre != null && genre.length > 0) {
        personalMobieDB.genres[i - 1] = genre;
      } else {
        i--;
      }
    }
  },
};

personalMobieDB.detectPersonalLevel();
