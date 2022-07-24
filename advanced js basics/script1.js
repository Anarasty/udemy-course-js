'use strict';

//NULLISH COALESCING
const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;
console.log(userKey ?? userName ?? 'User'); //nullish coalescing

//OPTIONAL CHAINING
const block = document.querySelector('.block');
console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

console.log(block?.textContent); //optional chaining

console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function () {
        console.log('Hello');
    }
};
userData.say();
userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js);

//LIVING COLLECTIONS AND USEFUL METHODS

const boxesQuery = document.querySelectorAll('.box1');
const boxesGet = document.getElementsByClassName('box1');

boxesQuery.forEach( box2 => {
    if (box2.matches('.this')){
        console.log('This one!');
    }
});

console.log(boxesQuery[0].closest('.wrapper'));

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box1');
    document.body.append(div);
}

console.log(boxesQuery);
console.log(boxesGet); //live collection
// console.log(document.body.children);

console.log(Array.from(boxesGet));

//SYMBOL DATA TYPE
let id = Symbol("id");

const obj = {
    'name': 'Test',
    // [Symbol('id')]: 1
    [id]:1,
    getId: function() {
        return this[id];
    }
};

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id == id2);

// obj[id] = 1;

// console.log(obj[id]);
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value);

const myAwesomeDB = {
    movies: [],
    actors: [],
    // id: 123
    [Symbol.for('id')]: 123
};

myAwesomeDB.id = '323232';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);


//PROPERTY DESCRIPTORS AND OBJECT METHODS
const birthday = Symbol('birthday');
const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});


// Object.defineProperty(user, 'gender', {value:'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
// writable
// enumerable
// configurable