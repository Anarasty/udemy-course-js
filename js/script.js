"use strict";

let number = 2;
const leftBorderWidth = 1;

number = 10;
console.log(number);
const obj = {
  a: 50,
};

obj.a = 10;
console.log(obj);

var name = "IVAN";
console.log(name);

{
  var result = 55;
}
console.log(result);

const vehicleWidth = 300;
const vehicleLength = 500;
console.log("Car width is: " + vehicleWidth + ", car length: " + vehicleLength);
//snake_case
//UPPER_CASE
//Kebab-case
//PascalCase

let number1 = 4.3;
let und;
console.log(und);

const object1 = {
  name: "Mark",
  age: 23,
  isProgger: true,
};
console.log(object1.name);
console.log(object1["name"]);

let array1 = ["superman.png", "batman.png", "greenlantern.png"];
console.log(array1[0]);

// ARRAYS AND OBJECTS
const array2 = [1, 2, 3];
console.log(array2[1]);
array2[5] = "hello";
console.log(array2);
// const object2 = {a:1, b:2, c:3};
const object2 = {
  Anna: 500,
  Alice: 800,
};
object2["Alan"] = 220;
console.log(object2["Alan"]);
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
console.log(typeof answers);
console.log(typeof undefined);
console.log(typeof null);

// INTERPOLATION
const category = "toys";
console.log("https://someurl.com/" + category);
console.log(`https://someurl.com/${category}/5`);

const user1 = "Gena";
alert(`Hello, ${user1}`);

// OPERATORS
console.log("arr" + " - object");
console.log(4 + " - object");
console.log(4 + +"5");

let incr = 10,
  decr = 10;
//incr++; //++incr
//decr--; //--decr
console.log(incr++);
console.log(decr--);
console.log(++incr);
console.log(--decr);
console.log(7 % 2);
console.log(2 * 4 == "8");
console.log(2 * 4 === "8");
console.log(4 + 4 !== "9");

const isChecked = true,
  isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);

//CONDITIONAL STATEMENTS
if (2) {
  //0=false
  console.log("Good");
} else {
  console.log("Error");
}

const num = 50;
if (num < 49) {
  console.log("false");
} else if (num > 100) {
  console.log("falsefalse");
} else {
  console.log("true");
}
num === 50 ? console.log("Ok!") : console.log("Error!"); //ternary operator

switch (num) {
  case 49:
    console.log("Not true");
    break;
  case 100:
    console.log("false");
    break;
  case 50:
    console.log("true");
    break;
  default:
    console.log("Not this time");
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
  console.log("I am not hungry!");
} else {
  console.log("Still hungry!");
}

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "sdasdsad");

const hamburger1 = 3;
const fries1 = 3;
const cola1 = 0;
const nuggets1 = 2;

if ((hamburger1 === 3 && cola1 === 2) || (fries1 === 3 && nuggets1)) {
  console.log("It's OK");
} else {
  console.log("NOT ok");
}
console.log(hamburger1 || cola1 || fries1);

let johnReport,
  alexReport,
  samReport,
  mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!false); //!0

console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log((!1 && 2) || !3);
console.log(25 || (null && !3));
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || (null && !3 && undefined) || 5);
console.log((5 === 5 && 3 > 1) || 5);

//LOOPS
let num1 = 50;

while (num1 <= 55) {
  console.log(num1);
  num1++;
}

do {
  console.log(num1);
  num1++;
} while (num1 < 55);

for (let i = 1; i < 8; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}

//LOOPS ++
for (let i = 0; i < 3; i++) {
  console.log(i + "--");
  for (let j = 0; j < 3; j++) {
    console.log(j + "==");
  }
}

//task make star pyramid
//*
//**
//***
//****
//*****
//******
let result2 = "";
const lengthStar = 7;
for (let i = 1; i < lengthStar; i++) {
  for (let j = 0; j < i; j++) {
    result2 += "*";
  }
  result2 += "\n";
}

console.log(result2);

first: for (let i = 0; i < 3; i++) {
  //first is a mark
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
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

function showFirstMessage(text) {
  console.log(text);
  let num2 = 10;
  console.log(num2);
}
showFirstMessage("Hello Mark!");
console.log(num2);

function calc(a, b) {
  return a + b;
}
console.log(calc(4, 2));
console.log(calc(3, 1));

function ret() {
  //function declaration
  let num2 = 50;
  return num2;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function () {
  //function expression
  console.log("Hello");
};
logger();

const calc1 = (a, b) => {
  console.log("1");
  return a + b;
}; // a + b;

//  FUNCTIONS ++
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  console.log(curr * amount);
  return curr * amount;
}
convert(500, usdCurr);
convert(500, eurCurr);

//ABOUT RETURN
function promotion(result) {
  console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);

// ------
function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
      // return; //all function will stop
      break; //only loop will stop
    }
  }
  console.log("done");
}
test();

function doNothing() {}
console.log(doNothing() === undefined);

//METHODS AND PROPERTIES OF STRINGS AND NUMBERS
const str = "test";
const arr1 = [1, 2, 3];

console.log(str.length);
console.log(arr1.length);

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11)); //slice(6) all line will be cutted
console.log(logg.slice(-5, -1));
console.log("--");
console.log(logg.substring(6, 11)); //same as SLICE but don't accept negative numbers
console.log(logg.substr(6, 5)); //second argument is the number of symbols that you want to cut

const num3 = 12.2;
console.log(Math.round(num3));

const test1 = "12.2px";
console.log(parseInt(test1));
console.log(parseFloat(test1));

// CALLBACK FUNCTIONS
function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`I am learning ${lang}`);
  callback();
}

function done() {
  console.log("I have passed this lesson");
}

// learnJS('JavaScript', function() {  //ANONYMUS FUNCTION
//     console.log('I have passed this lesson');
// });
learnJS("Javascript", done);

//OBJECTS
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};
options.makeTest();

//DESTRUCTING OBJECT
const { border, background } = options.colors;
console.log(border);

console.log(Object.keys(options));
console.log(Object.keys(options).length);

// console.log(options.name);
// console.log(options['name']);

// delete options.name;
// console.log(options);
let counter = 0;

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Property ${i} has value ${options[key][i]}`);
      // counter++;
    }
  } else {
    console.log(`Property ${key} has value ${options[key]}`);
    // counter++;
  }
}
console.log(counter);

//ARRAYS
const arr2 = [1, 32, 3, 26, 18];
// arr2[99] = 0;
// console.log(arr2.length);
// console.log(arr2);
arr2.sort(compareNum);
console.log(arr2); //ARRAY SORTING

function compareNum(a, b) {
    return a - b; //ARRAY SORTING
}

const str1 = prompt("", "");
const products = str1.split(", ");
products.sort();
console.log(products.join("! "));

arr2.forEach(function (item, i, arr2) {
  console.log(
    `(Number in order)${i}:(array item value) ${item} inside array - ${arr2}`
  );
}); //ARRAY ITERATION

arr2.pop(); //Delete last element from array
console.log(arr2);
arr2.push(21); //Add element to array
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
  //ARRAY ITERATION
  console.log(arr2[i]);
}

for (let value of arr2) {
  //ARRAY ITERATION
  console.log(value);
}

//PASS BY REFERENCE OR BY VALUE, SPREAD OPERATOR
let a1 = 5;
let b1 = a1;

b1 = b1 + 5;
console.log(b1);
console.log(a1);

const obj1 = {
    a: 5,
    b: 1
};

const copy = obj1; //pass by reference to object
copy.a = 10;
console.log(copy);
console.log(obj1);

//how to copy objects 
function copy1 (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy1(numbers);
newNumbers.a = 10;
// newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

//how to join two objects into 1 obj (object asign method)
const add = {
    d: 17,
    e: 20
};
// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);
// console.log(clone);

//method to create array copy 
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'aaaaa';
console.log(newArray);
console.log(oldArray);

// SPREAD operatot new ES6 standart
const video = ['youtube','vimeo','rutube']; //example 1
const blogs = ['wordpress','livejournal','blogger'];
const internet = [...video, ...blogs, 'vk','facebook'];
console.log(internet);

function log1 (a, b, c){ //example 2
    console.log(a);
    console.log(b);
    console.log(c);
}
const num4 = [2, 5, 7];
log1(...num4);
console.log(num4);

const array3 = ['a', 'b']; //example3
const newArray1 = [...array3];
console.log(array3);
console.log(newArray1);

const objA = { //example 4
    one: 1,
    two: 2
};

const newObj = {...objA};
console.log(newObj);

// OOP
let someStr = 'some';
let strObj = new String(someStr);
console.log(typeof(someStr));
console.log(typeof(strObj));
console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100
};
const johnSoldier = {
    health: 100
};

const lenySoldier = Object.create(soldier); //Prototype inheritance

Object.setPrototypeOf(johnSoldier, soldier); //NEW FORMAT CODE !!!

johnSoldier.__proto__ = soldier; //OLD FORMAT CODE !!!!!

console.log(johnSoldier.armor);
console.log(lenySoldier.armor);


// DYNAMIC TYPING 
///1) test to syting
console.log(typeof(String(null)));
console.log(typeof(String(4)));
///2)
console.log(typeof(5 + ''));

const num5 = 5;
console.log("https://vk.com/catalog/" + num5); //OLD METHOD OF CODE!!!!

const fontSize = 26 + 'px';

///1) test to number
console.log(typeof(Number('2')));
///2)better way
console.log(typeof(+'3'));
///3)
console.log(typeof(parseInt("15px",10)));

let answer1 = +prompt("Hello","");

///1) to boolean
let switcher = null;
if (switcher) {
  console.log('Working..');
}
switcher = 1;
if (switcher) {
  console.log('Working..');
}

///2)
console.log(typeof(Boolean("3")));
///3) very rare!!!
console.log(typeof(!!"445"));


//CLOSURE AND LEXICAL ENVIRONMENT

function createCounter() {
  let counter1 = 0;

  const myFunction = function() {
    counter1 = counter1 + 1;
    return counter1;
  };
  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1,c2,c3);

for (let j = 0; j < 9; j++){
  for (let j = 0; j < 9; j++){
    let number4 = 3;
  }
  console.log(number4);
} 