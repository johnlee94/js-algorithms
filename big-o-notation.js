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


// ***Logarithmic runtime: Big O Notation: "O (log n)"
// as our input size grows, our number of operations will grow logarthmically
// meaning less than proportionally-- even if input grows a lot, number of operations
// required to complete the function won't grow that much!

// aside: binary search is like finding a word in the dictionary: you cut your sorted
// list in half and throw away the half that does not have the key you are looking for
// and keep cutting in half until you have the key

//i.e. 4000 elements -> only 12 operations!
function binarySearch(sortedArray, key) {
  var low = 0;
  var high = sortedArray.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = sortedArray[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid -1;
    } else {
      return mid;
    }
  }
  return -1;
}

var myArray = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 34, 36, 40, 51]

binarySearch(myArray, 17); // => 1 (Since 17 is the second element in the sorted Array)
