/// USING WEBPACK
// function myModule() {
//     this.hello = function() {
//         console.log('hello');
//     };

//     this.goofbye = function() {
//         console.log('goddbye!');
//     };
// }

// module.exports = myModule;


/// USING ES6 MODULES
export let one = 1;

let two = 2;

export {two};

export default function sayHi() {
    console.log('Hi!');
}