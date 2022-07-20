"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img");
const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre");
const movieList = document.querySelector(".promo__interactive-list"); //DP NPT USE HERE querySelectorALL it will not work

//first method to remove all adds items
adv.forEach((item) => {
  item.remove();
});
//second method to remove all adds items
// adv.forEach(function(item){
//     item.remove();
// });

genre.textContent = "drama";

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

// a = a + 1;
// a += 1;
