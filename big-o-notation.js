// the run time or how long it takes an algorithm or function to complete based
// on the input size

// CONSTANT runtime:  Big O Notation: "O (1)" O of 1
// even if the input increases, the number of operations needed to complete the
// function remains exactly the same
function log (array) {
  console.log(array[0]);
  console.log(array[1]);
}

log([1, 2, 3, 4]);
// => 1, 2
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// => 1, 2
