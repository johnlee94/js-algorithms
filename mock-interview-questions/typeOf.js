// What is logged out for each of the following statements?

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);

// my attempt:

// => Boolean, Boolean, Object, Object


// actual: => object, undefined, object, object

// arrays are of type object in javascript

// So how can we tell if something is an array specifically?

// Array.prototype.isArray()
// i.e.
console.log(Array.isArray([])); // => true
console.log(Array.isArray({})); // => false

// or use instanceof
console.log([] instanceof Array); // => true
console.log({} instanceof Array); // => false
