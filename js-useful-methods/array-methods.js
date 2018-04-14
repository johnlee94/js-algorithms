// ***ARRAY METHODS!!*** //

//forEach
// The forEach() method executes a provided function once for each array element.
// note: does not explicitly change the original array
var nums = [1, 2, 3]

nums.forEach(num => {
  console.log(num + 2);
})
// expected output: 3, 4, 5
// console.log(nums) // => [1, 2, 3];

//splice
//The slice() method returns a shallow copy of a portion of an array into a
// new array object selected from begin to end (end not included).
// The original array will not be modified.
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

//filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//find
// The find() method returns the value of the first element in the array that
// satisfies the provided testing function. Otherwise undefined is returned.
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12


//**sorting an array
// by convention, Array.protoype.sort() sorts an array alphabetically treating
// its elements as strings

fruitsArray = ['bananas', 'apples', 'raisins'];

fruistArray.sort() // => ['apples', 'bananas', raisins];

  // if you want to sort an array numerically
  // the compare function within the sort returns a negative, 0, or positive number
  // which then can be used in the sort method to sort numeric arrays
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a - b}); // => [1, 5, 10, 25, 40, 100]

  // descending
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return b - a}); // => [100, 40, 25, 10, 5, 1];