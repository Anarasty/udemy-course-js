const numberOfFilms = prompt('How much films have you watched?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Last films that you watched...',''),
//       b = prompt('Rate film...',''),
//       c = prompt('Last films that you watched...',''),
//       d = prompt('Rate film...','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Last films that you watched...',''),
          b = prompt('Rate film...','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Films watched lower than 10. Try 10 < films < 30');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Films count ok')
} else if (personalMovieDB.count >= 30) {
    console.log('Super movie watcher');
} else {
    console.log('not enough films!!!error')
}

console.log(personalMovieDB);