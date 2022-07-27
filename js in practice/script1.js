//CLASSLIST AND EVENT DELEGATION
const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('RED');
// }

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

    // btns[1].classList.toggle('red'); //SAME CONSTRUCT AS CYCLE
});
// console.log(btns[0].className); //OLD CUNSTRUCT

wrapper.addEventListener('click', (event) => { //EVENT DELEGATION
    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.log('Hello');
    // }
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
});

// btns.forEach(btn => { //NO EVENT DELEGATION
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);