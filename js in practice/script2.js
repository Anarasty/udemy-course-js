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