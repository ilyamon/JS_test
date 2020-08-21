"use strict";

//alert
//confirm
//prompt

let numberOfFolms;

function start() {
    numberOfFolms = prompt("Сколько фильмов вы уже посмотрели", "");

    while (numberOfFolms == '' || numberOfFolms == null || isNaN(numberOfFolms)) {
        numberOfFolms = prompt("Сколько фильмов вы уже посмотрели", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFolms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    
    function rememberMyFilm() {
        for(let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("Error");
                i--;
            }
        }
    }

    rememberMyFilm();

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов!");
        } else if (personalMovieDB.count>=10 || personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
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

    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        let i = 0;
        while (i<3) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i++}`, "");;
            i++;
        }
    }

    writeYourGenres();
