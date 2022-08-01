'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('.type-box');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);
const style = window.getComputedStyle(box);
console.log(style.display);


//FUNCTIONS CONSTRUCTORS

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} has gone`);
};

const ivan = new User('Ivan', 25);
const alex = new User('Alex', 44);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);


//THIS KEYWORD

//common function of this = window
//in strict mode this = undefined
function showThis(a,b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

//context for object methods - the object itself
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();

//this in constructs and classes is a new object instance
function Person(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}
let ann = new Person('Ann', 11);

// Manual binding this: call, apply, bind
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'Jon'
};
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));


const btn1 = document.querySelector('.super-btn');
btn1.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
});
// btn1.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
// });

const obj1 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj1.sayNumber();

const doubles = a => a * 2;
console.log(doubles(4));


//ES6 CLASSES
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());


//REST OPERATOR
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);