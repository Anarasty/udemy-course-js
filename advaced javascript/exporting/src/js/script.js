/// USING WEBPACK
// const myModule = require('./main');
// const myModuleInstance = new myModule();
// myModuleInstance.hello();
// myModuleInstance.goofbye();

/// USING ES6 MODULES
import {one, two} from './main.js';
// import {one as first} from './main';
// import * as data from './main';
import sayHi from './main.js';
console.log(`${one} and ${two}`);
sayHi();