"use strict";

//alert
//confirm
//prompt

const numberOfFolms = +prompt("Сколько фильмов вы уже посмотрели", "");

console.log(numberOfFolms);

const personalMovieDB = {
    count: numberOfFolms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a1 = prompt("Один из последних просмотренных фильмов?", ""),
b1 = prompt("На сколько оцените его?", ""),
a2 = prompt("Один из последних просмотренных фильмов?", ""),
b2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a1] = b1;
personalMovieDB.movies[a2] = b2;

console.log(personalMovieDB);