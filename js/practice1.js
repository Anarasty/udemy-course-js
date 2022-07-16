
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('How much films have you watched?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null ||isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('How much films have you watched?','');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Last films that you watched...','').trim(),
                  b = prompt('Rate film...','');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Films watched lower than 10. Try 10 < films < 30');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Films count ok')
        } else if (personalMovieDB.count >= 30) {
            console.log('Super movie watcher');
        } else {
            console.log('not enough films!!!error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Your favorite jenre is (chose number) - ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Your input is invalid -_-');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            //METHOD 2
            let genres = prompt(`Enter your favorite genres with coma ,`).toLocaleLowerCase();

            if (genres === '' || genres == null) {
                console.log('Your input is invalid -_-');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - is ${item}`);
        });
    }
};

// console.log(personalMovieDB);
