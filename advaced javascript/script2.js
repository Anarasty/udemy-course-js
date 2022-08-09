// LOCALSTORAGE
// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));

// REGULAR EXPRESSIONS
const ans = prompt('Enter your name: ');
const reg = /\d/ig;
console.log(ans.match(reg));
// regEx classes
// \d digits
// \w words
// \s spaces
// Flags
// i
// g
// m
// console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password: ');
console.log(pass.replace(/./g, "*"));

console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\W/ig));
// W
// D

/// GETTERS AND SETTERS

const persone1 = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(persone1.userAge = 30);
console.log(persone1.userAge);

/// INCAPSULATION
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    
    say () {
        console.log(`Users name is - ${this.name}, and age is - ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Syntax err');
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan._age);
ivan._age = 99;
console.log(ivan._age);
ivan.say();

/// ANONYMOUS SELF-CALLING FUNCTIONS

const app = '123';

const number = 1;

(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('I am privat');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();