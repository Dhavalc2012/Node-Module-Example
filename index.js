'use strict';
//const firstMod = require('./first-module');
//firstMod.doIt();


/* Example of Destructing module or  selective import */
/*getIdDone : gotItDone ; here we are using gotItDone as an alias for getIdDone */
const {doSomething, getIdDone: gotItDone} = require('./first-module');
doSomething();
//getIdDone();
gotItDone();


/*Testing singleton Modules It means no mater how many times you require a particular module 
its the same copy we can share data between two*/
/*const firstMod1 = require('./first-module');
const firstMod2 = require('./first-module');

console.log(firstMod1 === firstMod2);*/


/*const configurable = require('./configurable-module');

const configuredA = configurable({logPrefix: "A> "});
configuredA.log('test');

const configuredB = configurable({logPrefix: "B> "});
configuredA.log('test2');*/