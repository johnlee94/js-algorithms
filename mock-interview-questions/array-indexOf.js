console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2]));

// my guess
console.log([10, 20, 30, 40, 50].indexOf(30)); // => 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // => 1
console.log('hello world'.indexOf('o')); // => 4
console.log([[1], [2], [3], [4]].indexOf([2])); // => 1

// actual
console.log([10, 20, 30, 40, 50].indexOf(30)); // => 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // => -1
console.log('hello world'.indexOf('o')); // => 4
console.log([[1], [2], [3], [4]].indexOf([2])); // => -1

// my second guess, because the object and array are referring to different objects!

// To compare objects, use variables

const myArray = [1];
const anotherArray = myArray;

console.log([myArray, 2, 3].indexOf(myArray)); // => 0
// anotherArray still returns index 0 because it is referencing the same array in memory
console.log([myArray, 2, 3].indexOf(anotherArray)); // => 0
