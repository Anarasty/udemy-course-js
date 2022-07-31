'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);
const style = window.getComputedStyle(box);
console.log(style.display);


//FUNCTIONS CONSTRUCTORS

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} has gone`);
};

const ivan = new User('Ivan', 25);
const alex = new User('Alex', 44);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);