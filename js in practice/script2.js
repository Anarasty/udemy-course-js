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
