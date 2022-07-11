"use strict";

let number = 2;
const leftBorderWidth = 1;

number = 10;
console.log(number);
const obj = {
    a:50
};

obj.a = 10;
console.log(obj);


var name = 'IVAN';
console.log(name);

{
    var result = 55;
}
console.log(result);

const vehicleWidth = 300;
const vehicleLength = 500;
console.log('Car width is: ' + vehicleWidth + ', car length: ' + vehicleLength);
//snake_case
//UPPER_CASE
//Kebab-case
//PascalCase

let number1 = 4.3;
let und;
console.log(und);

const object1 = {
    name: 'Mark',
    age: 23,
    isProgger: true
};
console.log(object1.name);
console.log(object1['name']);

let array1 = ['superman.png', 'batman.png', 'greenlantern.png'];
console.log(array1[0]);

// ARRAYS AND OBJECTS
const array2 = [1, 2, 3];
console.log(array2[1]);
array2[5] = 'hello';
console.log(array2);
// const object2 = {a:1, b:2, c:3};
const object2 = {
    'Anna': 500,
    'Alice': 800
};
object2['Alan'] = 220;
console.log(object2['Alan']);
console.log(object2);

// COMUNICATING WITH USER
// alert('YOU');
// const result1 = confirm('Want pizza?');
// console.log(result1);
// const answer = +prompt("Are you from Ukraine?", "yes");
// console.log(typeof(answer));
// console.log(answer + 2);
const answers = [];
answers[0] = prompt("Your name?", "");
answers[1] = prompt("Your age?", "");
answers[2] = prompt("Your country?", "");
document.write(answers);
console.log(typeof(answers));
console.log(typeof(undefined));
console.log(typeof(null));

// INTERPOLATION
const category = 'toys';
console.log('https://someurl.com/' + category);
console.log(`https://someurl.com/${category}/5`);

const user1 = 'Gena';
alert(`Hello, ${user1}`);


// OPERATORS
console.log('arr' + ' - object');
console.log(4 + ' - object');
console.log(4 + + "5");

let incr = 10,
    decr = 10;
//incr++; //++incr
//decr--; //--decr
console.log(incr++);
console.log(decr--);
console.log(++incr);
console.log(--decr);
console.log(7%2);
console.log(2*4 == '8');
console.log(2*4 === '8');
console.log(4+4 !== '9');

const isChecked = true,
      isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);

//CONDITIONAL STATEMENTS
if (2) { //0=false
    console.log('Good');
} else {
    console.log('Error');
}

const num = 50;
 if (num < 49) {
    console.log('false')
 } else if (num > 100) {
    console.log('falsefalse')
 } else {
    console.log('true');
 }
(num === 50) ? console.log('Ok!') : console.log('Error!'); //ternary operator

switch (num) {
    case 49:
        console.log('Not true');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('Not this time');
        break;
}

// CONDITIONAL STATEMENTS ++
// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('I am not hungry!');
// }

// console.log((hamburger && fries));

const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger === 3 && cola === 1 && fries === 1) {
    console.log('I am not hungry!');
} else {
    console.log('Still hungry!')
}

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'sdasdsad');

const hamburger1 = 3;
const fries1 = 3;
const cola1 = 0;
const nuggets1 = 2;

if (hamburger1 === 3 &&  cola1 === 2 || fries1 === 3 && nuggets1) {
    console.log("It's OK");
} else {
    console.log("NOT ok");
}
console.log((hamburger1 || cola1 || fries1));

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!false); //!0

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

//LOOPS
let num1 = 50;

while (num1 <= 55) {
    console.log(num1);
    num1++;
}

do {
    console.log(num1);
    num1++;
} 
while (num1 < 55);

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}

//LOOPS ++
for (let i = 0; i < 3; i++) {
    console.log(i + '--');
    for (let j = 0; j < 3; j++){
        console.log(j + '==');
    }
}

//task make star pyramid
//*
//** 
//*** 
//**** 
//***** 
//******
let result2 = '';
const lengthStar = 7;
for (let i = 1; i < lengthStar; i++) {
    for (let j = 0; j < i; j++){
        result2 += '*';
    }
    result2 += '\n';
}

console.log(result2);


first: for (let i = 0; i < 3; i++) { //first is a mark
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 3; k++){
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }


// FUNCTIONS

let num2 = 20;

function showFirstMessage (text) {
    console.log(text);
    let num2 = 10;
    console.log(num2);
}
showFirstMessage('Hello Mark!');
console.log(num2);


function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 2));
console.log(calc(3, 1));

function ret() { //function declaration
    let num2 = 50;
    return num2;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function() { //function expression
    console.log('Hello');
};
logger();

const calc1 = (a, b) => { 
    console.log('1');
    return a + b;
 }; // a + b;
