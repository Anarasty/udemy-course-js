const numberOfFilms = prompt('How much films have you watched?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last films that you watched...',''),
      b = prompt('Rate film...',''),
      c = prompt('Last films that you watched...',''),
      d = prompt('Rate film...','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);