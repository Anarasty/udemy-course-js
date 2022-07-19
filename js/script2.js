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


//ACTIONS WITH ELEMENTS ON PAGE
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px;';

btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; this will not work because it address to pseudo array
circles[1].style.backgroundColor = 'red'; 

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('I have been here');

div.classList.add('black');

// document.body.append(div);
const wrapper = document.querySelector('.wrapper');
// wrapper.append(div);
// wrapper.appendChild(div);

wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div); 

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello world</h1>"; //method 1
// div.textContent = "<h1>Hello world</h1>"; //method 2
div.insertAdjacentHTML("afterend",'<h2>Hi</h2>');//beforebegin afterbegin beforeend afterend

const hearts1 = wrapper.querySelectorAll('.heart'); //another way to get elements that lay in construct without using document