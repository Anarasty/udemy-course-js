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

// LOOPS
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