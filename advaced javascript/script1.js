'use strict';

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: ' Olga',
        dad: 'Mike'
    }
};
// console.log(JSON.parse(JSON.stringify(persone)));
const clone = JSON.parse(JSON.stringify(persone));
console.log(persone);
console.log(clone);


//
const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = +inputRub.value / data.current.usd;
        } else {
            inputUsd.value = 'Something went wrong';
        }
    });
});