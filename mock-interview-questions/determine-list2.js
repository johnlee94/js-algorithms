// What will the console log?

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2);

// my attempt:
// => [1, 2, 3, 4, 5] because when list2 is set equal to list1, it is set to an
// entirely new array with elements exactly that of list1. So pushing 6, 7, and 8 will
// only manipulate list1 array, not list2.


// WRONG AGAIN. >_<
// => [1, 2, 3, 4, 5, 6, 7, 8]

// This has to do with javascript passing data by reference vs by value.

// *** Passing by Value ***

// If the data we are passing is a primitive data type or it has no properties
// such as a string or number, data is passed by value
// This means that when you assign the variable by passing the data by value,
// the variable is set equal to the value of the data

// i.e.
const myNum = 10;
const myString = 'hello world';
const myString2 = myString;



// *** Passing by Reference ***

// If the data we are passing is an object (or arrays), then that data is being passed by reference.

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
// => both list1 and list2 are being set to reference the array object

list1.push(6, 7, 8);
// => this is pushing the elements to the array object that list1 is referencing


// **Note**
const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1 = [10, 20, 30];

// list1 is now referencing a new array object, but list2 is still referencing
// the old array object that list1 was referencing before!
// furthermore, changing list1's reference to a new object doesn't alter the original
// object!

// when you list1.push(6, 7, 8), you change the original object because .push is
// protoype of the Array object


// ** Follow-up Question!
// How can we, then, set list2 to an array with the same elements as list1 without
// changing list2's referenced array when manipulating list1's referenced array?

// my attempt:

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];
list1.push(6, 7, 8);

console.log(list2);
// => should return [1, 2, 3, 4, 5] because list2 is referencing a different array object

// course's

// answer is to use an array method to return a new copy of the array
const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();
list1.push(6, 7, 8);

console.log(list2); // => [1, 2, 3, 4, 5]

// another option
const list1 = [1, 2, 3, 4, 5];
const list2 = list1.concat([]);
list1.push(6, 7, 8);

console.log(list2);
