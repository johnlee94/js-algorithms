// what will be consoled out?

(function() {
  var x = y = 200;
})();

console.log('y: ', y);
console.log('x: ', x);

// my attempt:
// y will return undefined because a y variable has never been declared
// x will return 200

// again, nope.

console.log('y: ', y); // => y: 200
console.log('x: ', x); // => x is not defined

// this is because x is defined within the lexical scope of the iffy
// however, y is made into a global variable because it was instantiated without
// a keyword var, let or const

// note: 'use strict' would fix the accidental global variable instantiation of y
