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