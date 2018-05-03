// What is consoled out for each array?

var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);
console.log('arr4: ', arr4);


// my attempt:
console.log('arr1: ', arr1); // => []
console.log('arr2: ', arr2); // => [50]
console.log('arr3: ', arr3); // => [1, 2, "three", 4, "five"]
console.log('arr4: ', arr4); // =>[[1, 2, 3, 4, 5]] (an array with its first element as an array)

// actually:
// arr1:  []
// arr2:  [ <50 empty items> ]
// arr3:  [ 1, 2, 'three', 4, 'five' ]
// arr4:  [ [ 1, 2, 3, 4, 5 ] ]

var arr1 = [];
// If only one paramter is passed in the array constructor and that is a number
// greater than 50, it creates an array of that number's length with all elements empty (not undefined!)
var arr2 = new Array(50);
var strArr = new Array('hello world') // => ['hello world']
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);
