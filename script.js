let numbersOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMobieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastMovie = prompt("Один из последних просмотренных фильмов?");

personalMobieDB.movies[lastMovie] = prompt("На сколько оцените его");

lastMovie = prompt("Один из последних просмотренных фильмов?");

personalMobieDB.movies[lastMovie] = prompt("На сколько оцените его");

console.log(personalMobieDB.movies);
