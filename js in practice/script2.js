// setTimeout AND setInterval

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation () {
    const element = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';

        }
    }
}

btn.addEventListener('click', myAnimation);

// clearInterval(timerId);

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log () { //RECURSION TIMER
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);


/// Garbage collector and memory leaks

// function func() {
//     window.smth = 'string';
// }

// const someRes = getData();
// const node = document.querySelector('.class');
// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() {
//     const potentiallyHugeArray = [];
//     return function iner() {
//         potentiallyHugeArray.push('Hello');
//         console.log("Hello!!");
//     };
// }
// const sayHello = outer();

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(testDiv);
}
createElement();
function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}
deleteElement();


/// WeakMap AND WeakSet
let user = {name:'Ivan'};
let map = new WeakMap();
map.set(user, 'data');
user = null;
console.log(map);

let cache = new WeakMap();
function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}
let lena = {name:'Elena'};
let alex = {name:'Alex'};
cacheUser(lena);
cacheUser(alex);
lena = null;
console.log(cache.has(lena));
console.log(cache.has(alex));

// WeakSet
// add, has, delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Ann'},
    {text: 'Here', from: 'Mark'},
];
let readMessages = new WeakSet();
readMessages.add(messages[0]);
// readMessages.add(messages[1]);
readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));
