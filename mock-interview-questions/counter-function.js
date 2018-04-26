// write a function that keeps track of how many times it was called and returns
// that number

// all functionality should be inside of that function - none outside

function counterFunc() {

}

console.log(myFunc()); // returns 1
console.log(myFunc()); // returns 2
console.log(myFunc()); // returns 3

// course
// one of the best ways to have a function keep track of something is to use
// a closure

function counterFunc() {
  let counter = 0;

  return function() {
    counter++
    return counter;
  };
}

console.log(myFunc());

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne: ', instanceOne()); // => instanceOne: 1
console.log('instanceOne: ', instanceOne()); // => instanceOne: 2
console.log('instanceOne: ', instanceOne()); // => instanceOne: 3
console.log('instanceTwo: ', instanceTwo()); // => instanceOne: 1
console.log('instanceTwo: ', instanceTwo()); // => instanceOne: 2
console.log('instanceOne: ', instanceOne()); // => instanceOne: 4

// in real application, can be used like ..
function counterFunc() {
  let counter = 0;

  return function() {
    if (counter < 4) {
    // some computation/functionality...
    }
    counter++
    return counter;
  };
}
