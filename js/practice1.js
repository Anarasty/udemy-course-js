let numberOfFilms;

function start() {
    numberOfFilms = prompt('How much films have you watched?','');

    while (numberOfFilms == '' || numberOfFilms == null ||isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How much films have you watched?','');
    }
}
start();

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

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Films watched lower than 10. Try 10 < films < 30');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Films count ok')
    } else if (personalMovieDB.count >= 30) {
        console.log('Super movie watcher');
    } else {
        console.log('not enough films!!!error');
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite jenre is (chose number) - ${i}`);
    }
}
writeYourGenres();

console.log(personalMovieDB);