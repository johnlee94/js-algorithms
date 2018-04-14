// the run time or how long it takes an algorithm or function to complete based
// on the input size

// ***TIME COMPLEXITIES (RUN TIMES)***

// ***CONSTANT runtime:  Big O Notation: "O (1)" O of 1***
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


// ***LINEAR runtime: Big O Notation: "O (n)"***
// run time increases proportionally to how input increases
function logAll(array){
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logAll([1, 2, 3, 4, 5]);
// => 1, 2, 3, 4, 5
logAll([1, 2, 3, 4, 5, 6]);
// => 1, 2, 3, 4, 5, 6


// ***EXPONENTIAL runtime: Big O Notation: "O (n^2)"***
// run time increases exponentially (drastically) as input increases
function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

addAndLog(['A', 'B', 'C']); // 9 pairs logged out (input of 3)
addAndLog(['A', 'B', 'C', 'D']); // 16 pairs logged out (input of 4)
addAndLog(['A', 'B', 'C', 'D', 'E']); // 25 pairs logged out (input of 5)
