'use strict';

///OLD METHODS
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');//get a collection of all btns
const btns1 = document.getElementsByTagName('button')[1];//get second element of the collection
console.log(btns);
console.log(btns1);

const circles = document.getElementsByClassName('circle');
console.log(circles);

///NEW METHODS
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);